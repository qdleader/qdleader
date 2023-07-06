## Git Hooks


在我们开始进行组件开发之前，还有一节是关于配置的。 请记住，如果你要长期构建该项目，你将希望该项目尽可能坚如磐石，尤其是与其他开发人员团队合作时。 花时间在一开始就把它做好是值得的。
我们将使用一个叫做 Husky 的工具
Husky 是一个用于在 git 进程的不同阶段运行脚本的工具，例如 add、commit、push 等。我们希望能够设置某些条件，并且只有在我们的代码满足这些条件时才允许提交和推送之类的事情成功，假设这表明我们的项目质量是可以接受的。




### 安装 Husky
```js
npm install -D husky

npx husky install
```
第二个命令将在你的项目中创建一个 .husky 目录。这就是你的 hooks 存放的地方。确保此目录包含在你的代码仓库中，因为它也适用于其他开发人员，而不仅仅是你自己。
在 package.json 文件中添加 script
package.json

```json
  "scripts: {
    ...
    "prepare": "husky install"
  }
```

这将确保在其他开发人员运行该项目时自动安装 Husky
创建一个 hook

```js
npx husky add .husky/pre-commit "npm run   lint"
```

上面说为了让我们的提交成功，npm run   lint 必须首先运行并成功。 在这种情况下，” 成功 ”意味着没有错误。 它将允许你有告警（请记住，在 ESLint 配置中，设置 1 是警告，设置 2 是错误）
让我们在这时候进行一次提交，带上信息 ci: implement husky 。如果所有设置都完成，在你进行提交之前就会运行 lint script
让我们再添加一个

```js
npx husky add .husky/pre-push "npm run   build"
```
以上确保我们只有在代码构建成功的时候才可以将代码推送到远程仓库中。 这似乎是一个相当合理的条件，不是吗？ 通过提交此更改并尝试推送来随意测试它。
最后，我们将再添加一个工具。 到目前为止，我们一直在遵循所有提交消息的标准约定，让我们确保团队中的每个人都遵循它们（包括我们自己！）。 我们可以为我们的提交消息添加一个 linter：



```js
npm i -D @commitlint/config-conventional @commitlint/cli
```
要配置它，我们将使用一组标准默认值，但我喜欢将该列表显式包含在 commitlint.config.js 文件中，因为我有时会忘记可用的前缀：
commitlint.config.js

```js
// @see: https://cz-git.qbenben.com/zh/guide
/** @type {import('cz-git').UserConfig} */

module.exports = {
  ignores: [(commit) => commit.includes('init')],
  extends: ['@commitlint/config-conventional'],
  rules: {
    // @see: https://commitlint.js.org/#/reference-rules
    'body-leading-blank': [2, 'always'],
    'footer-leading-blank': [1, 'always'],
    'header-max-length': [2, 'always', 108],
    'subject-empty': [2, 'never'],
    'type-empty': [2, 'never'],
    'subject-case': [0],
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'perf',
        'test',
        'build',
        'ci',
        'chore',
        'revert',
        'wip',
        'workflow',
        'types',
        'release',
      ],
    ],
  },
  prompt: {
    messages: {
      type: "Select the type of change that you're committing:",
      scope: 'Denote the SCOPE of this change (optional):',
      customScope: 'Denote the SCOPE of this change:',
      subject: 'Write a SHORT, IMPERATIVE tense description of the change:\n',
      body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
      breaking:
        'List any BREAKING CHANGES (optional). Use "|" to break new line:\n',
      footerPrefixsSelect:
        'Select the ISSUES type of changeList by this change (optional):',
      customFooterPrefixs: 'Input ISSUES prefix:',
      footer: 'List any ISSUES by this change. E.g.: #31, #34:\n',
      confirmCommit: 'Are you sure you want to proceed with the commit above?',
      // 中文版
      // type: "选择你要提交的类型 :",
      // scope: "选择一个提交范围（可选）:",
      // customScope: "请输入自定义的提交范围 :",
      // subject: "填写简短精炼的变更描述 :\n",
      // body: '填写更加详细的变更描述（可选）。使用 "|" 换行 :\n',
      // breaking: '列举非兼容性重大的变更（可选）。使用 "|" 换行 :\n',
      // footerPrefixsSelect: "选择关联issue前缀（可选）:",
      // customFooterPrefixs: "输入自定义issue前缀 :",
      // footer: "列举关联issue (可选) 例如: #31, #I3244 :\n",
      // confirmCommit: "是否提交或修改commit ?"
    },
    types: [
      {
        value: 'feat',
        name: 'feat:     🚀  A new feature',
        emoji: '🚀',
      },
      {
        value: 'fix',
        name: 'fix:      🧩  A bug fix',
        emoji: '🧩',
      },
      {
        value: 'docs',
        name: 'docs:     📚  Documentation only changes',
        emoji: '📚',
      },
      {
        value: 'style',
        name: 'style:    🎨  Changes that do not affect the meaning of the code',
        emoji: '🎨',
      },
      {
        value: 'refactor',
        name: 'refactor: ♻️   A code change that neither fixes a bug nor adds a feature',
        emoji: '♻️',
      },
      {
        value: 'perf',
        name: 'perf:     ⚡️  A code change that improves performance',
        emoji: '⚡️',
      },
      {
        value: 'test',
        name: 'test:     ✅  Adding missing tests or correcting existing tests',
        emoji: '✅',
      },
      {
        value: 'build',
        name: 'build:    📦️   Changes that affect the build system or external dependencies',
        emoji: '📦️',
      },
      {
        value: 'ci',
        name: 'ci:       🎡  Changes to our CI configuration files and scripts',
        emoji: '🎡',
      },
      {
        value: 'chore',
        name: "chore:    🔨  Other changes that don't modify src or test files",
        emoji: '🔨',
      },
      {
        value: 'revert',
        name: 'revert:   ⏪️  Reverts a previous commit',
        emoji: '⏪️',
      },
      // 中文版
      // { value: "特性", name: "特性:   🚀  新增功能", emoji: "🚀" },
      // { value: "修复", name: "修复:   🧩  修复缺陷", emoji: "🧩" },
      // { value: "文档", name: "文档:   📚  文档变更", emoji: "📚" },
      // { value: "格式", name: "格式:   🎨  代码格式（不影响功能，例如空格、分号等格式修正）", emoji: "🎨" },
      // { value: "重构", name: "重构:   ♻️  代码重构（不包括 bug 修复、功能新增）", emoji: "♻️" },
      // { value: "性能", name: "性能:   ⚡️  性能优化", emoji: "⚡️" },
      // { value: "测试", name: "测试:   ✅  添加疏漏测试或已有测试改动", emoji: "✅" },
      // { value: "构建", name: "构建:   📦️  构建流程、外部依赖变更（如升级 npm 包、修改 webpack 配置等）", emoji: "📦️" },
      // { value: "集成", name: "集成:   🎡  修改 CI 配置、脚本", emoji: "🎡" },
      // { value: "回退", name: "回退:   ⏪️  回滚 commit", emoji: "⏪️" },
      // { value: "其他", name: "其他:   🔨  对构建过程或辅助工具和库的更改（不影响源文件、测试用例）", emoji: "🔨" }
    ],
    useEmoji: true,
    themeColorCode: '',
    scopes: [],
    allowCustomScopes: true,
    allowEmptyScopes: true,
    customScopesAlign: 'bottom',
    customScopesAlias: 'custom',
    emptyScopesAlias: 'empty',
    upperCaseSubject: false,
    allowBreakingChanges: ['feat', 'fix'],
    breaklineNumber: 100,
    breaklineChar: '|',
    skipQuestions: [],
    issuePrefixs: [
      { value: 'closed', name: 'closed:   ISSUES has been processed' },
    ],
    customIssuePrefixsAlign: 'top',
    emptyIssuePrefixsAlias: 'skip',
    customIssuePrefixsAlias: 'custom',
    allowCustomIssuePrefixs: true,
    allowEmptyIssuePrefixs: true,
    confirmColorize: true,
    maxHeaderLength: Infinity,
    maxSubjectLength: Infinity,
    minSubjectLength: 0,
    scopeOverrides: undefined,
    defaultBody: '',
    defaultIssues: '',
    defaultScope: '',
    defaultSubject: '',
  },
};


```

然后使用 Husky 启用 commitlint：
```js
npx husky add .husky/commit-msg 'npx --no -- commitlint --edit "$1"'
// # 有的时候上述的命令会在某些命令行环境失效，也可以试试下面的命令
npx husky add .husky/commit-msg \"npx --no -- commitlint --edit '$1'\"
// # 或者
npx husky add .husky/commit-msg "npx --no -- commitlint --edit $1"

```

