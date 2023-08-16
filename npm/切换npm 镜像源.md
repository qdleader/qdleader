```ts
-- 查看当前地址：
npm config get registry
https://registry.npmjs.org/
 
npm config get disturl
undefined
 
 
-- 设置当前地址（设置为淘宝镜像）
npm config set registry http://registry.npm.taobao.org/
 
-- 设置当前地址（设置为默认地址）
npm config set registry https://registry.npmjs.org/
 
-- 每次执行命令前加入–registry指定仓库路径
npm --registry https://registry.npm.taobao.org install
 
# 使用nrm工具切换淘宝源
npx nrm use taobao
 
# 如果之后需要切换回官方源可使用
npx nrm use npm
```


淘宝镜像每15分钟更新一次