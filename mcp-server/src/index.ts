#!/usr/bin/env node

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
  Tool,
} from "@modelcontextprotocol/sdk/types.js";
import * as fs from "fs/promises";
import * as path from "path";
import { glob } from "glob";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get the repository root (parent of mcp-server)
const REPO_ROOT = path.resolve(__dirname, "..", "..");

interface DocumentIndex {
  path: string;
  relativePath: string;
  title: string;
  category: string;
  size: number;
}

class QDLeaderMCPServer {
  private server: Server;
  private documentIndex: DocumentIndex[] = [];

  constructor() {
    this.server = new Server(
      {
        name: "qdleader-mcp",
        version: "1.0.0",
      },
      {
        capabilities: {
          tools: {},
        },
      }
    );

    this.setupToolHandlers();
    
    // Error handling
    this.server.onerror = (error) => console.error("[MCP Error]", error);
    process.on("SIGINT", async () => {
      await this.server.close();
      process.exit(0);
    });
  }

  private setupToolHandlers() {
    // List available tools
    this.server.setRequestHandler(ListToolsRequestSchema, async () => ({
      tools: [
        {
          name: "search_knowledge",
          description:
            "Search through the QDLeader front-end knowledge base. Search across all documentation including Vue, React, TypeScript, CSS, interview questions, algorithms, and more. Returns matching files with their paths and categories.",
          inputSchema: {
            type: "object",
            properties: {
              query: {
                type: "string",
                description:
                  "Search query (searches in file names and paths). Examples: 'vue', 'react hooks', 'typescript', 'css flexbox', 'interview', 'webpack', etc.",
              },
              category: {
                type: "string",
                description:
                  "Optional: Filter by category/directory. Examples: 'vue', 'react', 'css', '前端面试', 'ai', etc.",
              },
            },
            required: ["query"],
          },
        } as Tool,
        {
          name: "read_document",
          description:
            "Read the full content of a specific document from the knowledge base. Use the path returned from search_knowledge.",
          inputSchema: {
            type: "object",
            properties: {
              path: {
                type: "string",
                description:
                  "Relative path to the document (as returned by search_knowledge)",
              },
            },
            required: ["path"],
          },
        } as Tool,
        {
          name: "list_categories",
          description:
            "List all available categories/directories in the knowledge base with their document counts.",
          inputSchema: {
            type: "object",
            properties: {},
          },
        } as Tool,
        {
          name: "get_category_contents",
          description:
            "Get a list of all documents in a specific category with their titles and paths.",
          inputSchema: {
            type: "object",
            properties: {
              category: {
                type: "string",
                description:
                  "Category name (e.g., 'vue', 'react', '前端面试', 'css')",
              },
            },
            required: ["category"],
          },
        } as Tool,
      ],
    }));

    // Handle tool calls
    this.server.setRequestHandler(CallToolRequestSchema, async (request) => {
      const { name, arguments: args } = request.params;

      try {
        switch (name) {
          case "search_knowledge":
            return await this.handleSearchKnowledge(args);
          case "read_document":
            return await this.handleReadDocument(args);
          case "list_categories":
            return await this.handleListCategories();
          case "get_category_contents":
            return await this.handleGetCategoryContents(args);
          default:
            throw new Error(`Unknown tool: ${name}`);
        }
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        return {
          content: [
            {
              type: "text",
              text: `Error: ${errorMessage}`,
            },
          ],
        };
      }
    });
  }

  private async buildDocumentIndex() {
    console.error("[MCP] Building document index...");
    
    const markdownFiles = await glob("**/*.md", {
      cwd: REPO_ROOT,
      ignore: ["node_modules/**", "mcp-server/**", ".git/**"],
    });

    this.documentIndex = await Promise.all(
      markdownFiles.map(async (relativePath) => {
        const fullPath = path.join(REPO_ROOT, relativePath);
        const stats = await fs.stat(fullPath);
        const category = relativePath.includes("/")
          ? relativePath.split("/")[0]
          : "root";
        
        // Try to extract title from file
        let title = path.basename(relativePath, ".md");
        try {
          const content = await fs.readFile(fullPath, "utf-8");
          const titleMatch = content.match(/^#\s+(.+)$/m);
          if (titleMatch) {
            title = titleMatch[1].trim();
          }
        } catch {
          // Keep filename as title if reading fails
        }

        return {
          path: fullPath,
          relativePath,
          title,
          category,
          size: stats.size,
        };
      })
    );

    console.error(`[MCP] Indexed ${this.documentIndex.length} documents`);
  }

  private async handleSearchKnowledge(args: any) {
    if (this.documentIndex.length === 0) {
      await this.buildDocumentIndex();
    }

    const query = args.query?.toLowerCase() || "";
    const categoryFilter = args.category?.toLowerCase();

    let results = this.documentIndex.filter((doc) => {
      const matchesQuery =
        doc.relativePath.toLowerCase().includes(query) ||
        doc.title.toLowerCase().includes(query);
      
      const matchesCategory = !categoryFilter || 
        doc.category.toLowerCase().includes(categoryFilter) ||
        doc.relativePath.toLowerCase().includes(categoryFilter);

      return matchesQuery && matchesCategory;
    });

    // Sort by relevance (exact matches first)
    results.sort((a, b) => {
      const aExact = a.title.toLowerCase() === query ? 1 : 0;
      const bExact = b.title.toLowerCase() === query ? 1 : 0;
      return bExact - aExact;
    });

    // Limit to top 20 results
    results = results.slice(0, 20);

    const resultText = results.length > 0
      ? results
          .map(
            (doc, i) =>
              `${i + 1}. **${doc.title}**\n   Category: ${doc.category}\n   Path: ${doc.relativePath}\n`
          )
          .join("\n")
      : "No documents found matching your search.";

    return {
      content: [
        {
          type: "text",
          text: `Found ${results.length} document(s):\n\n${resultText}`,
        },
      ],
    };
  }

  private async handleReadDocument(args: any) {
    const relativePath = args.path;
    if (!relativePath) {
      throw new Error("Path parameter is required");
    }

    const fullPath = path.join(REPO_ROOT, relativePath);
    
    // Security check: ensure path is within repo
    const normalizedPath = path.normalize(fullPath);
    if (!normalizedPath.startsWith(REPO_ROOT)) {
      throw new Error("Access denied: Path outside repository");
    }

    try {
      const content = await fs.readFile(fullPath, "utf-8");
      return {
        content: [
          {
            type: "text",
            text: `# ${path.basename(relativePath)}\n\nPath: ${relativePath}\n\n---\n\n${content}`,
          },
        ],
      };
    } catch (error) {
      throw new Error(`Failed to read document: ${error}`);
    }
  }

  private async handleListCategories() {
    if (this.documentIndex.length === 0) {
      await this.buildDocumentIndex();
    }

    const categoryCounts = new Map<string, number>();
    this.documentIndex.forEach((doc) => {
      categoryCounts.set(doc.category, (categoryCounts.get(doc.category) || 0) + 1);
    });

    const sortedCategories = Array.from(categoryCounts.entries())
      .sort((a, b) => b[1] - a[1])
      .map(([category, count]) => `- **${category}**: ${count} document(s)`)
      .join("\n");

    return {
      content: [
        {
          type: "text",
          text: `Total Categories: ${categoryCounts.size}\n\n${sortedCategories}`,
        },
      ],
    };
  }

  private async handleGetCategoryContents(args: any) {
    if (this.documentIndex.length === 0) {
      await this.buildDocumentIndex();
    }

    const category = args.category?.toLowerCase();
    if (!category) {
      throw new Error("Category parameter is required");
    }

    const docs = this.documentIndex.filter(
      (doc) =>
        doc.category.toLowerCase() === category ||
        doc.category.toLowerCase().includes(category)
    );

    if (docs.length === 0) {
      return {
        content: [
          {
            type: "text",
            text: `No documents found in category: ${category}`,
          },
        ],
      };
    }

    const docList = docs
      .map(
        (doc, i) =>
          `${i + 1}. **${doc.title}**\n   Path: ${doc.relativePath}`
      )
      .join("\n\n");

    return {
      content: [
        {
          type: "text",
          text: `Found ${docs.length} document(s) in "${category}":\n\n${docList}`,
        },
      ],
    };
  }

  async run() {
    const transport = new StdioServerTransport();
    await this.server.connect(transport);
    console.error("[MCP] QDLeader MCP Server running on stdio");
  }
}

const server = new QDLeaderMCPServer();
server.run().catch(console.error);

