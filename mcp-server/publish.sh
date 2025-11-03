#!/bin/bash

echo "🚀 QDLeader MCP 发布脚本"
echo "========================"
echo ""

# 检查是否有未提交的更改
if [[ -n $(git status -s) ]]; then
  echo "⚠️  检测到未提交的更改"
  git status -s
  read -p "是否继续？(y/n): " continue
  if [[ $continue != "y" ]]; then
    echo "❌ 已取消发布"
    exit 1
  fi
fi

# 检查是否登录 npm
echo "📝 检查 npm 登录状态..."
if ! npm whoami &> /dev/null; then
  echo "❌ 未登录 npm，请先运行: npm login"
  exit 1
fi

echo "✅ 已登录为: $(npm whoami)"
echo ""

# 构建项目
echo "🔨 构建项目..."
npm run build

if [ $? -ne 0 ]; then
  echo "❌ 构建失败"
  exit 1
fi

echo "✅ 构建成功"
echo ""

# 询问版本类型
echo "请选择版本升级类型："
echo "  1) patch - 修复 bug (x.x.X)  例如: 1.0.0 -> 1.0.1"
echo "  2) minor - 新功能 (x.X.0)   例如: 1.0.0 -> 1.1.0"
echo "  3) major - 重大更新 (X.0.0) 例如: 1.0.0 -> 2.0.0"
echo "  4) 自定义版本号"
echo ""
read -p "请输入选择 [1-4]: " choice

case $choice in
  1)
    echo "📌 升级 patch 版本..."
    npm version patch
    ;;
  2)
    echo "📌 升级 minor 版本..."
    npm version minor
    ;;
  3)
    echo "📌 升级 major 版本..."
    npm version major
    ;;
  4)
    read -p "请输入版本号 (例如: 1.2.3): " custom_version
    npm version $custom_version
    ;;
  *)
    echo "❌ 无效的选择"
    exit 1
    ;;
esac

if [ $? -ne 0 ]; then
  echo "❌ 版本更新失败"
  exit 1
fi

NEW_VERSION=$(node -p "require('./package.json').version")
echo "✅ 版本已更新为: v${NEW_VERSION}"
echo ""

# 显示将要发布的文件
echo "📦 检查将要发布的文件..."
npm publish --dry-run

echo ""
read -p "确认发布到 npm？(y/n): " confirm

if [[ $confirm != "y" ]]; then
  echo "❌ 已取消发布"
  exit 1
fi

# 发布到 npm
echo "📤 发布到 npm..."
npm publish --access public

if [ $? -ne 0 ]; then
  echo "❌ 发布失败"
  exit 1
fi

echo "✅ 发布成功！"
echo ""

# 推送到 Git
echo "⬆️  推送到 Git..."
git push && git push --tags

if [ $? -ne 0 ]; then
  echo "⚠️  Git 推送失败，但 npm 包已发布"
  exit 1
fi

echo ""
echo "🎉 发布完成！"
echo ""
echo "📊 查看包信息:"
echo "   https://www.npmjs.com/package/qdleader-mcp"
echo ""
echo "📥 用户可以通过以下方式使用:"
echo '   npx -y qdleader-mcp'
echo ""
echo "🔗 或在 MCP 配置中添加:"
echo '   {
     "mcpServers": {
       "qdleader": {
         "command": "npx",
         "args": ["-y", "qdleader-mcp"]
       }
     }
   }'
echo ""
echo "✨ 完成！"

