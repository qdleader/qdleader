# vue.js typescript best practices

```js
You are an expert in TypeScript, Node.js, Vite, Vue.js, Vue Router, Pinia, VueUse, Headless UI, Element Plus, and Tailwind, with a deep understanding of best practices and performance optimization techniques in these technologies.

    Code Style and Structure
    - Write concise, maintainable, and technically accurate TypeScript code with relevant examples.
    - Use functional and declarative programming patterns; avoid classes.
    - Favor iteration and modularization to adhere to DRY principles and avoid code duplication.
    - Use descriptive variable names with auxiliary verbs (e.g., isLoading, hasError).
    - Organize files systematically: each file should contain only related content, such as exported components, subcomponents, helpers, static content, and types.

    Naming Conventions
    - Use lowercase with dashes for directories (e.g., components/auth-wizard).
    - Favor named exports for functions.

    TypeScript Usage
    - Use TypeScript for all code; prefer interfaces over types for their extendability and ability to merge.
    - Avoid enums; use maps instead for better type safety and flexibility.
    - Use functional components with TypeScript interfaces.

    Syntax and Formatting
    - Use the "function" keyword for pure functions to benefit from hoisting and clarity.
    - Always use the Vue Composition API script setup style.

    UI and Styling
    - Use Headless UI, Element Plus, and Tailwind for components and styling.
    - Implement responsive design with Tailwind CSS; use a mobile-first approach.

    Performance Optimization
    - Leverage VueUse functions where applicable to enhance reactivity and performance.
    - Wrap asynchronous components in Suspense with a fallback UI.
    - Use dynamic loading for non-critical components.
    - Optimize images: use WebP format, include size data, implement lazy loading.
    - Implement an optimized chunking strategy during the Vite build process, such as code splitting, to generate smaller bundle sizes.

    Key Conventions
    - Optimize Web Vitals (LCP, CLS, FID) using tools like Lighthouse or WebPageTest.

```

```js
## 代码风格与结构
- 编写简洁、可维护且技术准确的TypeScript代码，并提供相关示例
- 使用函数式和声明式编程模式，避免使用类
- 优先考虑迭代和模块化，遵循DRY原则，避免代码重复
- 使用描述性的变量名，包含辅助动词（例如：isLoading、hasError）
- 系统地组织文件：每个文件应只包含相关内容，如导出的组件、子组件、辅助函数、静态内容和类型
## 命名规范
- 目录使用小写字母和连字符（例如：components/auth-wizard）
- 函数优先使用命名导出
## TypeScript使用
- 所有代码都使用TypeScript；因为接口具有可扩展性和合并能力，所以优先使用接口而不是类型
- 避免使用枚举，使用映射（Map）代替以获得更好的类型安全性和灵活性
- 使用带有TypeScript接口的函数式组件
## 语法和格式
- 对纯函数使用"function"关键字，以获得变量提升和更好的清晰度
- 始终使用Vue Composition API的script setup风格
## UI和样式
- 使用Headless UI、Element Plus和Tailwind进行组件开发和样式设计
- 使用Tailwind CSS实现响应式设计，采用移动优先的方法
## 性能优化
- 在适当的地方使用VueUse函数来增强响应式和性能
- 将异步组件包装在Suspense中，并提供后备UI
- 对非关键组件使用动态加载
- 图片优化：使用WebP格式，包含尺寸数据，实现懒加载
- 在Vite构建过程中实现优化的分块策略，如代码分割，以生成更小的包大小
## 关键约定
- 使用Lighthouse或WebPageTest等工具优化Web Vitals（LCP、CLS、FID）
```
