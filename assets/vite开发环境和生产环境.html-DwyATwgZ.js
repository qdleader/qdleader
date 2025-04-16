import{_ as a,c as l,b as e,o as i}from"./app-DFnxdJ0h.js";const n={};function o(s,t){return i(),l("div",null,t[0]||(t[0]=[e("h1",{id:"vite开发环境和生产环境",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#vite开发环境和生产环境"},[e("span",null,"vite开发环境和生产环境")])],-1),e("p",null,"Vite的开发环境和生产环境具有较大的差异性",-1),e("p",null,"开发环境不需要对所有资源打包，只是使用esbuild对依赖进行预构建，将CommonJS和UMD发布的依赖转换为浏览器支持的ESM，同时提高了后续页面的加载性能（lodash的请求）。Vite会将于构建的依赖缓存到node_modules/.vite目录下，它会根据几个源来决定是否需要重新运行预构建，包括 packages.json中的dependencies列表、包管理器的lockfile、可能在vite.config.js相关字段中配置过的。只要三者之一发生改变，才会重新预构建。",-1),e("p",null,"同时，开发环境使用了浏览器缓存技术，解析后的依赖请求以http头的max-age=31536000,immutable强缓存，以提高页面性能。",-1),e("p",null,"在生产环境，由于嵌套导入会导致发送大量的网络请求，即使使用HTTP2.x（多路复用、首部压缩），在生产环境中发布未打包的ESM仍然性能低下。因此，对比在开发环境Vite使用esbuild来构建依赖，生产环境Vite则使用了更加成熟的Rollup来完成整个打包过程。因为esbuild虽然快，但针对应用级别的代码分割、CSS处理仍然不够稳定，同时也未能兼容一些未提供ESM的SDK。",-1),e("p",null,"为了在生产环境中获得最佳的加载性能，仍然需要对代码进行tree-shaking、懒加载以及chunk分割（以获得更好的缓存）。",-1)]))}const d=a(n,[["render",o]]),r=JSON.parse('{"path":"/vite/vite%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E5%92%8C%E7%94%9F%E4%BA%A7%E7%8E%AF%E5%A2%83.html","title":"vite开发环境和生产环境","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1744790553000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"cfe4d3cd8e5568860c1058a4bcec48e5df839e96","time":1744790553000,"email":"yk4545945@163.com","author":"qdleader","message":"docs: 添加js控制hover样式审查方法"}]},"filePathRelative":"vite/vite开发环境和生产环境.md"}');export{d as comp,r as data};
