

```js
npm install anywhere -g
```


cd 到打包目录
```js
anywhere
```


```js
 anywhere --help
// Usage:
  anywhere --help // print help information
  anywhere // 8000 as default port, current folder as root
  anywhere 8888 // 8888 as port
  anywhere -p 8989 // 8989 as port
  anywhere -s // don't open browser
  anywhere -h localhost // localhost as hostname
  anywhere -d /home // /home as root
  anywhere -f /index.html  // Enable html5 history,the index is /index.html
  anywhere --proxy http://localhost:7000/api // Support shorthand URL, webpack.config.js or customize config file
```