# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2024-11-03

### Added

- 🎉 Initial release of QDLeader MCP Server
- 🔍 **search_knowledge**: Search through the entire knowledge base with optional category filtering
- 📖 **read_document**: Read full content of any document by path
- 📚 **list_categories**: List all available categories with document counts
- 📂 **get_category_contents**: Get all documents in a specific category
- 🚀 Automatic document indexing on startup
- 🔒 Security: Path validation to ensure access only within repository
- 📝 Support for Chinese and English documentation
- ⚡ Fast search using in-memory document index
- 🎯 Smart sorting: exact matches prioritized in search results

### Features

- Full access to QDLeader's comprehensive front-end knowledge base
- Support for all major tech stacks: Vue, React, TypeScript, CSS, etc.
- Interview questions database
- Practical tips and project solutions
- Algorithms and LeetCode problems
- AI-related documentation

### Documentation

- Comprehensive README in Chinese and English
- Usage guide with practical examples
- Configuration examples for Cursor and Claude Desktop
- Best practices and troubleshooting

### Technical

- Built with TypeScript for type safety
- Uses Model Context Protocol (MCP) SDK
- Node.js 18+ support
- Zero external API dependencies
- Efficient file system operations with glob

---

## Future Plans

### [1.1.0] - Planned

- [ ] Add fuzzy search algorithm for better matching
- [ ] Support for full-text content search (not just titles/paths)
- [ ] Add document preview feature
- [ ] Cache optimization for faster subsequent searches
- [ ] Support for filtering by tags/keywords

### [1.2.0] - Planned

- [ ] Add document statistics and analytics
- [ ] Support for favorite/bookmark documents
- [ ] Add recently accessed documents feature
- [ ] Support for document relationships/links
- [ ] Add search history

### [2.0.0] - Planned

- [ ] Support for custom knowledge bases
- [ ] Multi-language support enhancement
- [ ] Integration with external documentation sources
- [ ] Real-time document updates
- [ ] Web interface for browsing

---

[1.0.0]: https://github.com/qdleader/qdleader/releases/tag/mcp-v1.0.0
