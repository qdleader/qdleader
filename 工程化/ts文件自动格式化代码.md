
# 1 安装插件

安装插件Prettier-Code formatter
（作者是 Esben Petersen）




# 2在项目根目录下新建.vscode/setting.json

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll": true,
    "source.organizeImports": true
  }
}

```

# 3.
在tsx文件中点击右键  格式化文档
会弹出
扩展 'Auto Import - ES6, TS, JSX, TSX' 配置为格式化程序，但不能格式化 
点击配置即可

之后改完后直接保存就自动格式化了
