# GitHub登录过期

报错 
Support for password authentication was removed on August 13, 2021.
remote: Please see https://docs.github.com/en/get-started/getting-started-with-git/about-remote-repositories#cloning-with-https-urls for information on currently recommended modes of authentication.
fatal: Authentication failed for 'https://github.com/SkyeHarmse/Qr-code-challenge.git/'

报登录过期了

解决方法：
```js
, go to Settings => Developer Settings => Personal Access Token => Generate New Token (Give your password) => Fillup the form => click Generate token => Copy the generated Token, it will be something like ghp_sFhFsSHhTzMDreGRLjmks4Tzuzgthdvfsrta
```

时间最多选择1年

然后个人项目里面选择
 settings --> Secrets and variables --> actions--> New repository secret
