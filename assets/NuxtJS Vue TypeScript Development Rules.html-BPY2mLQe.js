import{_ as s,c as e,a,o as i}from"./app-KfnfuIf0.js";const l={};function p(t,n){return i(),e("div",null,[...n[0]||(n[0]=[a(`<h1 id="nuxtjs-vue-typescript-development-rules" tabindex="-1"><a class="header-anchor" href="#nuxtjs-vue-typescript-development-rules"><span>NuxtJS Vue TypeScript Development Rules</span></a></h1><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre><code class="language-json"><span class="line">You are an expert in TypeScript<span class="token punctuation">,</span> Node.js<span class="token punctuation">,</span> NuxtJS<span class="token punctuation">,</span> Vue <span class="token number">3</span><span class="token punctuation">,</span> Shadcn Vue<span class="token punctuation">,</span> Radix Vue<span class="token punctuation">,</span> VueUse<span class="token punctuation">,</span> and Tailwind.</span>
<span class="line"></span>
<span class="line">      Code Style and Structure</span>
<span class="line">      - Write concise<span class="token punctuation">,</span> technical TypeScript code with accurate examples.</span>
<span class="line">      - Use composition API and declarative programming patterns; avoid options API.</span>
<span class="line">      - Prefer iteration and modularization over code duplication.</span>
<span class="line">      - Use descriptive variable names with auxiliary verbs (e.g.<span class="token punctuation">,</span> isLoading<span class="token punctuation">,</span> hasError).</span>
<span class="line">      - Structure files<span class="token operator">:</span> exported component<span class="token punctuation">,</span> composables<span class="token punctuation">,</span> helpers<span class="token punctuation">,</span> static content<span class="token punctuation">,</span> types.</span>
<span class="line"></span>
<span class="line">      Naming Conventions</span>
<span class="line">      - Use lowercase with dashes for directories (e.g.<span class="token punctuation">,</span> components/auth-wizard).</span>
<span class="line">      - Use PascalCase for component names (e.g.<span class="token punctuation">,</span> AuthWizard.vue).</span>
<span class="line">      - Use camelCase for composables (e.g.<span class="token punctuation">,</span> useAuthState.ts).</span>
<span class="line"></span>
<span class="line">      TypeScript Usage</span>
<span class="line">      - Use TypeScript for all code; prefer types over interfaces.</span>
<span class="line">      - Avoid enums; use const objects instead.</span>
<span class="line">      - Use Vue <span class="token number">3</span> with TypeScript<span class="token punctuation">,</span> leveraging defineComponent and PropType.</span>
<span class="line"></span>
<span class="line">      Syntax and Formatting</span>
<span class="line">      - Use arrow functions for methods and computed properties.</span>
<span class="line">      - Avoid unnecessary curly braces in conditionals; use concise syntax for simple statements.</span>
<span class="line">      - Use template syntax for declarative rendering.</span>
<span class="line"></span>
<span class="line">      UI and Styling</span>
<span class="line">      - Use Shadcn Vue<span class="token punctuation">,</span> Radix Vue<span class="token punctuation">,</span> and Tailwind for components and styling.</span>
<span class="line">      - Implement responsive design with Tailwind CSS; use a mobile-first approach.</span>
<span class="line"></span>
<span class="line">      Performance Optimization</span>
<span class="line">      - Leverage Nuxt&#39;s built-in performance optimizations.</span>
<span class="line">      - Use Suspense for asynchronous components.</span>
<span class="line">      - Implement lazy loading for routes and components.</span>
<span class="line">      - Optimize images<span class="token operator">:</span> use WebP format<span class="token punctuation">,</span> include size data<span class="token punctuation">,</span> implement lazy loading.</span>
<span class="line"></span>
<span class="line">      Key Conventions</span>
<span class="line">      - Use VueUse for common composables and utility functions.</span>
<span class="line">      - Use Pinia for state management.</span>
<span class="line">      - Optimize Web Vitals (LCP<span class="token punctuation">,</span> CLS<span class="token punctuation">,</span> FID).</span>
<span class="line">      - Utilize Nuxt&#39;s auto-imports feature for components and composables.</span>
<span class="line"></span>
<span class="line">      Nuxt-specific Guidelines</span>
<span class="line">      - Follow Nuxt <span class="token number">3</span> directory structure (e.g.<span class="token punctuation">,</span> pages/<span class="token punctuation">,</span> components/<span class="token punctuation">,</span> composables/).</span>
<span class="line">      - Use Nuxt&#39;s built-in features<span class="token operator">:</span></span>
<span class="line">        - Auto-imports for components and composables.</span>
<span class="line">        - File-based routing in the pages/ directory.</span>
<span class="line">        - Server routes in the server/ directory.</span>
<span class="line">        - Leverage Nuxt plugins for global functionality.</span>
<span class="line">      - Use useFetch and useAsyncData for data fetching.</span>
<span class="line">      - Implement SEO best practices using Nuxt&#39;s useHead and useSeoMeta.</span>
<span class="line"></span>
<span class="line">      Vue <span class="token number">3</span> and Composition API Best Practices</span>
<span class="line">      - Use &lt;script setup&gt; syntax for concise component definitions.</span>
<span class="line">      - Leverage ref<span class="token punctuation">,</span> reactive<span class="token punctuation">,</span> and computed for reactive state management.</span>
<span class="line">      - Use provide/inject for dependency injection when appropriate.</span>
<span class="line">      - Implement custom composables for reusable logic.</span>
<span class="line"></span>
<span class="line">      Follow the official Nuxt.js and Vue.js documentation for up-to-date best practices on Data Fetching<span class="token punctuation">,</span> Rendering<span class="token punctuation">,</span> and Routing.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)])])}const o=s(l,[["render",p]]),r=JSON.parse('{"path":"/tool/cursor/cursor%20rules/NuxtJS%20Vue%20TypeScript%20Development%20Rules.html","title":"NuxtJS Vue TypeScript Development Rules","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1768183010000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"c3ab6d103d428cdd6a361e045add7154fc9253f1","time":1768183010000,"email":"yk4545945@163.com","author":"qdleader","message":"docs(mcp): 新增Mastergo MCP配置文档，包含token获取方法"}]},"filePathRelative":"tool/cursor/cursor rules/NuxtJS Vue TypeScript Development Rules.md"}');export{o as comp,r as data};
