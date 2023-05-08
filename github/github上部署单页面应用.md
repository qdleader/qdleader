  我们打包时候执行完npm run build 之后 会生成一个dist

  然后新建一个 分支 git checkout -b feature-outPage


  在新分支下删除除了dist 外的所有文件

  然后吧dist中的文件都复制出来到根目录下，把dist删除掉即可

  把index文件中的路径 加上./

   <script type="module" crossorigin src="/assets/index.7de06274.js"></script>
  <link rel="stylesheet" href="/assets/index.f3a4dcb2.css">

  改为

   <script type="module" crossorigin src="./assets/index.7de06274.js"></script>
  <link rel="stylesheet" href="./assets/index.f3a4dcb2.css">


  然后把 assets文件夹复制一份到assets里面

  然后把这个分支 push 上去


  在github 中 找到 settings -》 pages


在 GitHub Pages 下面找到


找到 Build and deployment

Source 选择 Deploy from a branch

Branch 选择 我们的 feature-outPage   然后保存

等一会就可以看到我们的站点了
