# 发布 QDLeader MCP 到 npm

这个指南将帮助你将 `qdleader-mcp` 发布到 npm，让全世界的开发者都能使用。

## 📋 发布前准备

### 1. 注册 npm 账号

如果还没有 npm 账号：

1. 访问 https://www.npmjs.com/signup
2. 填写用户名、邮箱、密码
3. 验证邮箱

### 2. 登录 npm

在终端中运行：

```bash
npm login
```

输入你的：
- Username（用户名）
- Password（密码）
- Email（邮箱）
- 可能需要输入 OTP（如果开启了双因素认证）

验证是否登录成功：

```bash
npm whoami
```

### 3. 检查包名是否可用

```bash
npm view qdleader-mcp
```

如果显示 `404`，说明包名可用。如果已被占用，需要修改 `package.json` 中的 `name` 字段。

可选的包名：
- `qdleader-mcp`
- `@your-username/qdleader-mcp`（scoped package）
- `qdleader-mcp-server`

## 🚀 发布步骤

### 步骤 1: 检查和更新版本

当前版本在 `package.json` 中定义：

```json
{
  "version": "1.0.0"
}
```

后续更新时使用：
```bash
npm version patch  # 1.0.0 -> 1.0.1
npm version minor  # 1.0.0 -> 1.1.0
npm version major  # 1.0.0 -> 2.0.0
```

### 步骤 2: 构建项目

确保项目构建成功：

```bash
cd /Users/icourt/github/qdleader/mcp-server
npm run build
```

检查 `dist` 目录是否生成了编译后的文件。

### 步骤 3: 测试本地包

在发布前本地测试：

```bash
# 创建本地链接
npm link

# 在其他项目中测试
cd /path/to/test-project
npm link qdleader-mcp
```

### 步骤 4: 检查将要发布的文件

运行 dry-run 查看哪些文件会被发布：

```bash
npm publish --dry-run
```

确认以下文件会被包含：
- ✅ `dist/` 目录（编译后的代码）
- ✅ `README.md`
- ✅ `package.json`
- ✅ `LICENSE`
- ❌ `src/` 目录（会被 `.npmignore` 排除）
- ❌ `node_modules/`

### 步骤 5: 发布到 npm

**首次发布（公开包）：**

```bash
npm publish --access public
```

**后续更新：**

```bash
# 更新版本号
npm version patch

# 发布
npm publish
```

### 步骤 6: 验证发布

1. 访问 npm 页面：https://www.npmjs.com/package/qdleader-mcp
2. 测试安装：
   ```bash
   npx qdleader-mcp@latest
   ```

## 📦 发布作为 Scoped Package（可选）

如果 `qdleader-mcp` 名称被占用，可以发布为 scoped package：

1. 修改 `package.json`：
   ```json
   {
     "name": "@your-username/qdleader-mcp"
   }
   ```

2. 发布：
   ```bash
   npm publish --access public
   ```

3. 用户使用时：
   ```json
   {
     "mcpServers": {
       "qdleader": {
         "command": "npx",
         "args": ["-y", "@your-username/qdleader-mcp"]
       }
     }
   }
   ```

## 🔄 更新版本流程

每次更新后的发布流程：

```bash
# 1. 拉取最新代码
cd /Users/icourt/github/qdleader/mcp-server
git pull

# 2. 安装依赖
npm install

# 3. 构建项目
npm run build

# 4. 测试功能
# 确保 MCP 服务器正常工作

# 5. 更新版本号
npm version patch  # 或 minor/major

# 6. 更新 CHANGELOG.md
# 记录本次更新的内容

# 7. 提交更改
git add .
git commit -m "chore: bump version to x.x.x"
git push

# 8. 发布到 npm
npm publish

# 9. 创建 GitHub Release（可选）
git tag v1.0.1
git push --tags
```

## 📝 版本管理最佳实践

### 语义化版本控制 (Semver)

- **MAJOR (1.0.0 -> 2.0.0)**: 不兼容的 API 更改
- **MINOR (1.0.0 -> 1.1.0)**: 向后兼容的新功能
- **PATCH (1.0.0 -> 1.0.1)**: 向后兼容的错误修复

### 示例

```bash
# 修复 bug
npm version patch
# 1.0.0 -> 1.0.1

# 添加新功能（向后兼容）
npm version minor
# 1.0.1 -> 1.1.0

# 重大更改（不兼容旧版本）
npm version major
# 1.1.0 -> 2.0.0
```

## 🏷️ Beta 和 Pre-release 版本

测试新功能时发布 beta 版本：

```bash
# 创建 beta 版本
npm version prerelease --preid=beta
# 1.0.0 -> 1.0.1-beta.0

# 发布 beta 版本
npm publish --tag beta

# 用户安装 beta 版本
npx qdleader-mcp@beta
```

## 🔐 最佳实践

### 1. 使用 .npmignore

确保不发布不必要的文件：

```
src/
tsconfig.json
*.log
.DS_Store
*.tsbuildinfo
node_modules/
```

### 2. 设置双因素认证 (2FA)

为 npm 账号启用 2FA：

```bash
npm profile enable-2fa auth-and-writes
```

### 3. 使用 npm scripts

在 `package.json` 中添加：

```json
{
  "scripts": {
    "prepublishOnly": "npm run build",
    "preversion": "npm test",
    "version": "npm run build",
    "postversion": "git push && git push --tags"
  }
}
```

### 4. 添加 .npmrc（可选）

在用户目录创建 `~/.npmrc`：

```
//registry.npmjs.org/:_authToken=YOUR_AUTH_TOKEN
```

## 📊 发布后的维护

### 1. 监控下载量

访问 npm 统计页面：
- https://www.npmjs.com/package/qdleader-mcp

### 2. 处理 Issues

在 GitHub 上处理用户反馈：
- https://github.com/qdleader/qdleader/issues

### 3. 更新文档

每次更新后同步更新：
- README.md
- CHANGELOG.md
- 使用示例

### 4. 弃用旧版本（如需要）

```bash
npm deprecate qdleader-mcp@1.0.0 "请升级到 1.1.0"
```

### 5. 取消发布（慎用）

⚠️ 只能在发布后 72 小时内取消：

```bash
npm unpublish qdleader-mcp@1.0.0
```

## 🎯 快速发布检查清单

- [ ] ✅ 代码已提交到 Git
- [ ] ✅ 已登录 npm (`npm whoami`)
- [ ] ✅ 包名可用或已确认
- [ ] ✅ 版本号已更新
- [ ] ✅ README.md 内容完整
- [ ] ✅ LICENSE 文件存在
- [ ] ✅ 构建成功 (`npm run build`)
- [ ] ✅ 本地测试通过
- [ ] ✅ CHANGELOG.md 已更新
- [ ] ✅ .npmignore 配置正确
- [ ] ✅ package.json 信息完整（description, keywords, repository, etc.）

## 🚀 一键发布脚本

创建 `publish.sh`：

```bash
#!/bin/bash

echo "🚀 Starting publish process..."

# 1. 检查是否有未提交的更改
if [[ -n $(git status -s) ]]; then
  echo "❌ You have uncommitted changes. Please commit first."
  exit 1
fi

# 2. 构建
echo "📦 Building..."
npm run build

# 3. 询问版本类型
echo "Select version bump type:"
echo "1) patch (x.x.X)"
echo "2) minor (x.X.0)"
echo "3) major (X.0.0)"
read -p "Enter choice [1-3]: " choice

case $choice in
  1) npm version patch ;;
  2) npm version minor ;;
  3) npm version major ;;
  *) echo "Invalid choice"; exit 1 ;;
esac

# 4. 发布
echo "📤 Publishing to npm..."
npm publish --access public

# 5. 推送到 Git
echo "⬆️  Pushing to Git..."
git push && git push --tags

echo "✅ Publish complete!"
```

使用：
```bash
chmod +x publish.sh
./publish.sh
```

## 📞 需要帮助？

- npm 文档: https://docs.npmjs.com/
- npm 支持: https://www.npmjs.com/support
- GitHub Issues: https://github.com/qdleader/qdleader/issues

---

**祝发布顺利！🎉**

