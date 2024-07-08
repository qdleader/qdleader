# vs中快速生成console.log

> 文件 - 首选项 - 用户代码片段

> 选择javascript

> 可以看到有一段被注释的代码,我们将代码解除注释


```
{
  // Place your snippets for javascript here. Each snippet is defined under a snippet name and has a prefix, body and
  // description. The prefix is what is used to trigger the snippet and the body will be expanded and inserted. Possible variables are:
  // $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. Placeholders with the
  // same ids are connected.
  // Example:
  "Print to console": {
    "prefix": "c",
    "body": [
      "console.log($1, '打印');",
      "$2"
    ],
    "description": "Log output to console"
  }
}
<!-- prefix:代码快捷键入口,这里设置cl,当我们在开发中输入cl后就会进入到这里的设置,配合tab健就可以生成console.log( , '打印')

body表示代码的主体,需要设置的代码放在这里

$1表示生成代码后光标首次所在位置

$2写在这个位置,表示在生成console.log()后,代码后面会空出一行,并且表再次按tab键时,光标会转到$2的位置 -->
```


你在你打编辑器中，打个c然后tab就出来啦，一天怎么也能省个好多分钟。
