#!/bin/bash

echo "🧪 QDLeader MCP 包测试脚本"
echo "=========================="
echo ""

# 检查 dist 目录
echo "1️⃣ 检查构建文件..."
if [ ! -d "dist" ]; then
  echo "❌ dist 目录不存在，请先运行: npm run build"
  exit 1
fi

if [ ! -f "dist/index.js" ]; then
  echo "❌ dist/index.js 不存在"
  exit 1
fi

echo "✅ 构建文件存在"
echo ""

# 检查 shebang
echo "2️⃣ 检查 shebang..."
first_line=$(head -n 1 dist/index.js)
if [[ $first_line == "#!/usr/bin/env node" ]]; then
  echo "✅ shebang 正确"
else
  echo "⚠️  shebang 可能不正确: $first_line"
fi
echo ""

# 检查包大小
echo "3️⃣ 检查包大小..."
npm pack --dry-run > /dev/null 2>&1
if [ $? -eq 0 ]; then
  size=$(npm pack --dry-run 2>&1 | grep "package size" | awk '{print $4" "$5}')
  echo "✅ 包大小: $size"
else
  echo "❌ 无法检查包大小"
fi
echo ""

# 检查 package.json 关键字段
echo "4️⃣ 检查 package.json..."
required_fields=("name" "version" "description" "main" "bin" "author" "license")
for field in "${required_fields[@]}"; do
  value=$(node -p "require('./package.json').$field" 2>/dev/null)
  if [ "$value" != "undefined" ] && [ -n "$value" ]; then
    echo "✅ $field: $value"
  else
    echo "❌ $field 缺失或为空"
  fi
done
echo ""

# 检查依赖
echo "5️⃣ 检查依赖..."
if [ -d "node_modules" ]; then
  echo "✅ node_modules 存在"
  
  # 检查关键依赖
  if [ -d "node_modules/@modelcontextprotocol" ]; then
    echo "✅ MCP SDK 已安装"
  else
    echo "❌ MCP SDK 未安装"
  fi
  
  if [ -d "node_modules/glob" ]; then
    echo "✅ glob 已安装"
  else
    echo "❌ glob 未安装"
  fi
else
  echo "⚠️  node_modules 不存在，运行: npm install"
fi
echo ""

# 检查文档文件
echo "6️⃣ 检查文档文件..."
doc_files=("README.md" "LICENSE" "CHANGELOG.md" "package.json")
for file in "${doc_files[@]}"; do
  if [ -f "$file" ]; then
    echo "✅ $file"
  else
    echo "❌ $file 缺失"
  fi
done
echo ""

# 检查配置文件
echo "7️⃣ 检查配置文件..."
config_files=(".npmignore" ".gitignore" "tsconfig.json")
for file in "${config_files[@]}"; do
  if [ -f "$file" ]; then
    echo "✅ $file"
  else
    echo "⚠️  $file 缺失"
  fi
done
echo ""

# 模拟发布检查
echo "8️⃣ 模拟发布检查..."
echo "将要发布的文件："
npm publish --dry-run 2>&1 | grep "npm notice" | grep -v "Tarball Contents" | grep -v "Tarball Details" | head -5
echo ""

# 检查包名是否可用（可选）
echo "9️⃣ 检查包名是否可用..."
package_name=$(node -p "require('./package.json').name")
npm view $package_name version > /dev/null 2>&1
if [ $? -eq 0 ]; then
  current_version=$(npm view $package_name version)
  echo "⚠️  包 '$package_name' 已存在，当前版本: $current_version"
  echo "   你的版本: $(node -p "require('./package.json').version")"
  echo "   如需更新，请确保版本号大于当前版本"
else
  echo "✅ 包名 '$package_name' 可用"
fi
echo ""

# 总结
echo "================================"
echo "🎉 测试完成！"
echo ""
echo "📝 下一步："
echo "   1. 如果所有检查都通过，可以发布了"
echo "   2. 运行: npm login"
echo "   3. 运行: ./publish.sh"
echo ""
echo "📖 详细指南: 查看 PUBLISH.md"
echo "================================"

