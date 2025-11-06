# 在 react 中展示 markdown 文件

```js
npm i react-markdown remark-gfm rehype-raw react-syntax-highlighter github-markdown-css --save-dev
```

```js
import ReactMarkdown from "react-markdown"; // 解析markdown
import remarkGfm from "remark-gfm"; // 划线、表、任务列表和直接url等的语法扩展
import rehypeRaw from "rehype-raw"; // 解析标签，支持html语法
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"; // 代码高亮
//高亮的主题，还有很多别的主题，可以自行选择
import "github-markdown-css";

const markdownContent = `

# 标题

## 二级标题

`;

<ReactMarkdown
  className="markdown-body cbol-text"
  // eslint-disable-next-line react/no-children-prop
  children={markdownContent}
  remarkPlugins={[remarkGfm]}
  rehypePlugins={[rehypeRaw]}
  components={{
    code({ node, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || "");
      return match ? (
        <SyntaxHighlighter
          // eslint-disable-next-line react/no-children-prop
          children={String(children).replace(/\n$/, "")}
          language={match[1]}
          PreTag="div"
          {...props}
        />
      ) : (
        <code className={className} {...props}>
          {children}
        </code>
      );
    },
  }}
/>;
```
