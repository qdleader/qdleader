

> 在当前目录下的 node_modules 目录查找。
> 如果没有，在父级目录的 node_modules 查找，如果没有在父级目录的父级目录的 node_modules 中查找。
> 沿着路径向上递归，直到根目录下的 node_modules 目录。
> 
> 在 node_modules中找到后，这个文件夹里面的 package.json 下 main 属性指向的文件，如果没有  package.json ，在 node 环境下会以此查找 index.js ，index.json ，index.node。

