# skills 介绍

## 什么是 Agent Skills？
    Agent Skills 将专业知识打包成可发现的功能。每个 Skill 包含一个 SKILL.md 文件，其中包含 Claude 在相关时读取的说明，以及可选的支持文件，如脚本和模板。

## Skills 如何被调用：
    Skills 是模型调用的——Claude 根据您的请求和 Skill 的描述自主决定何时使用它们。



## 优势：
    为您的特定工作流扩展 Claude 的功能
    通过 git 在您的团队中共享专业知识
    减少重复提示
    为复杂任务组合多个 Skills


# 创建 Skill
Skills 存储为包含 SKILL.md 文件的目录。
​
## 个人 Skills
    个人 Skills 在您的所有项目中都可用。将它们存储在 ~/.claude/skills/ 中：
    mkdir -p ~/.claude/skills/my-skill-name
    使用个人 Skills 的场景：
    您的个人工作流和偏好
    您正在开发的实验性 Skills
    个人生产力工具
    ​
## 项目 Skills
    项目 Skills 与您的团队共享。将它们存储在项目中的 .claude/skills/ 中：
    mkdir -p .claude/skills/my-skill-name
    使用项目 Skills 的场景：
    团队工作流和约定
    项目特定的专业知识
    共享的实用程序和脚本
    项目 Skills 被检入 git 并自动对团队成员可用。
​
