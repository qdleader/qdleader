# taro体积太大无法进行预览上传问题修复

通过webpackChain配置解决开发环境下小程序包体积过大无法进行预览上传的问题(不影响devtools的使用)

```js
// config/dev.sj
module.exports = {
 mini: {
    webpackChain: (chain, webpack) => {
      chain.merge({
        plugin: {
          install: {
            plugin: require('terser-webpack-plugin'),
            args: [{
              terserOptions: {
                compress: true, // 默认使用terser压缩
                // mangle: false,
                keep_classnames: true, // 不改变class名称
                keep_fnames: true // 不改变函数名称
              }
            }]
          }
        }
      })
    }
  }
}
```

引入此插件即可，亲测，可以由2m多优化为1m
