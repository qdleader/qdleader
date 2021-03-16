commit时候报错，Oops! Something went wrong! :(提交不上去


```
$ git commit -m  '修改打包配置'
husky > pre-commit (node v14.15.4)
Stashing changes... [started]
Stashing changes... [skipped]
→ No partially staged files found...
Running linters... [started]
Running tasks for src/**/*.{js,vue} [started]
eslint --fix [started]
eslint --fix [failed]
→
Running tasks for src/**/*.{js,vue} [failed]
→
Running linters... [failed]



× eslint --fix found some errors. Please fix them and try committing again.


Oops! Something went wrong! :(

ESLint: 5.15.3.
ESLint couldn't find a configuration file. To set up a configuration file for this project, please run:

eslint --init

ESLint looked for configuration files in E:\20201010project\common_admin\src\utils and its ancestors. If it found none, it then looked in your home directory.

If you think you already have a configuration file or if you need more help, please stop by the ESLint chat room: https://gitter.im/eslint/eslint
husky > pre-commit hook failed (add --no-verify to bypass)
```
## 解决


```
git commit --no-verify -m "添加登录名称配置"  
```
