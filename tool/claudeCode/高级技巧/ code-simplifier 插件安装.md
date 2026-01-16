#  code-simplifier 插件：把 AI 生成的“屎山代码”整理成清晰、可维护、高可读性

## Claude Code 官方开源 code-simplifier：在不改变任何功能的前提下，统一命名、拆解深层嵌套、删除冗余逻辑、遵循 CLAUDE.md 规范，让 AI 生成代码从“能跑”升级为“好维护”

## code-simplifier 到底是什么？
    一句话概括它的使命：

    功能绝对守恒（不改行为），只优化表达方式（更清晰、更一致、更好维护）。

    它擅长做这些“AI 写代码最容易翻车”的整理工作：

    统一命名风格（camelCase / snake_case / 项目约定）

    删除冗余逻辑与重复代码

    把深层嵌套拆成清晰的小函数

    自动补充“必要注释”（不写废话注释）

    优化结构但拒绝过度抽象

    严格遵守项目自定义规范（读取CLAUDE.md）

## 安装
```js
/plugin marketplace update claude-plugins-official
 
/plugin install code-simplifier
```


/plugin list 查看已安装插件


## 使用
```js
Use the code-simplifier agent to clean this up
```