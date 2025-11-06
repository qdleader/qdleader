#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Markdown文件优化脚本
优化内容：
1. 统一代码块格式（为没有语言的代码块添加语言标识）
2. 统一空行使用（标题前后、代码块前后）
3. 去除重复标题
4. 改善排版
"""

import os
import re
from pathlib import Path

def detect_code_language(code_content):
    """根据代码内容检测语言"""
    code_lower = code_content.strip().lower()
    
    # JavaScript/TypeScript
    if re.search(r'(function|const|let|var|=>|import|export|console\.|\.js|\.ts)', code_lower):
        return 'js'
    # Python
    if re.search(r'(def |import |print\(|\.py)', code_lower):
        return 'python'
    # Shell/Bash
    if re.search(r'(^#!/bin|sudo |apt-get |brew |npm |git |npm |yarn )', code_lower):
        return 'bash'
    # HTML
    if re.search(r'(<html|<div|<body|<head|<!DOCTYPE)', code_lower):
        return 'html'
    # CSS
    if re.search(r'(^\.|^#|@media|@keyframes|margin|padding|color:)', code_lower):
        return 'css'
    # JSON
    if re.search(r'^\s*[\{\[]', code_content.strip()):
        return 'json'
    # Markdown
    if re.search(r'(^#|^\*|^```|^\|)', code_content.strip()):
        return 'markdown'
    
    return 'js'  # 默认JavaScript

def optimize_code_blocks(content):
    """优化代码块格式"""
    # 匹配所有代码块
    pattern = r'```(\w+)?\n(.*?)```'
    
    def replace_code_block(match):
        lang = match.group(1)
        code = match.group(2)
        
        # 如果没有语言标识，尝试检测
        if not lang:
            lang = detect_code_language(code)
        
        return f'```{lang}\n{code}```'
    
    # 需要处理多行匹配
    lines = content.split('\n')
    result = []
    i = 0
    in_code_block = False
    code_block_lines = []
    code_block_lang = None
    
    while i < len(lines):
        line = lines[i]
        
        # 检测代码块开始
        code_start_match = re.match(r'^```(\w*)$', line)
        if code_start_match:
            if not in_code_block:
                in_code_block = True
                code_block_lang = code_start_match.group(1)
                code_block_lines = [line]
            else:
                # 代码块结束
                code_content = '\n'.join(code_block_lines[1:])
                
                # 如果没有语言标识，尝试检测
                if not code_block_lang:
                    code_block_lang = detect_code_language(code_content)
                
                result.append(f'```{code_block_lang}')
                if code_content:
                    result.append(code_content)
                result.append('```')
                
                in_code_block = False
                code_block_lines = []
                code_block_lang = None
            i += 1
            continue
        
        if in_code_block:
            code_block_lines.append(line)
        else:
            result.append(line)
        
        i += 1
    
    # 处理未闭合的代码块
    if in_code_block:
        code_content = '\n'.join(code_block_lines[1:])
        if not code_block_lang:
            code_block_lang = detect_code_language(code_content)
        result.append(f'```{code_block_lang}')
        if code_content:
            result.append(code_content)
        result.append('```')
    
    return '\n'.join(result)

def ensure_proper_spacing(content):
    """确保标题和代码块前后有适当的空行"""
    lines = content.split('\n')
    result = []
    in_code_block = False
    
    for i, line in enumerate(lines):
        is_title = re.match(r'^#{1,6}\s+', line)
        is_code_block_start = re.match(r'^```', line)
        
        prev_line = result[-1] if result else ''
        next_line = lines[i + 1] if i + 1 < len(lines) else ''
        
        # 检查代码块状态
        if is_code_block_start:
            if not in_code_block:
                in_code_block = True
            else:
                in_code_block = False
        
        # 标题前需要空行（除非是文件开头或上一行是空行）
        if is_title and i > 0:
            if prev_line.strip() and not re.match(r'^#{1,6}\s+', prev_line):
                result.append('')
        
        result.append(line)
        
        # 标题后需要空行（除非下一行是另一个标题、代码块或空行）
        if is_title and next_line:
            if (next_line.strip() and 
                not re.match(r'^#{1,6}\s+', next_line) and 
                not re.match(r'^```', next_line) and
                not next_line.strip() == ''):
                result.append('')
        
        # 代码块结束后需要空行
        if is_code_block_start and in_code_block == False and i > 0:
            # 刚结束代码块
            if next_line and next_line.strip() and not re.match(r'^```', next_line):
                result.append('')
    
    return '\n'.join(result)

def remove_duplicate_titles(content):
    """去除重复的标题"""
    lines = content.split('\n')
    result = []
    seen_titles = set()
    
    for i, line in enumerate(lines):
        title_match = re.match(r'^(#{1,6})\s+(.+)$', line)
        if title_match:
            title_text = title_match.group(2).strip()
            # 如果标题已出现，跳过
            if title_text in seen_titles:
                continue
            seen_titles.add(title_text)
        
        result.append(line)
    
    return '\n'.join(result)

def optimize_markdown_file(file_path):
    """优化单个markdown文件"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # 1. 优化代码块格式
        content = optimize_code_blocks(content)
        
        # 2. 确保适当的空行
        content = ensure_proper_spacing(content)
        
        # 3. 去除重复标题
        content = remove_duplicate_titles(content)
        
        # 4. 清理多余的空行（超过两个连续空行）
        content = re.sub(r'\n{3,}', '\n\n', content)
        
        # 5. 确保文件末尾有一个换行符
        content = content.rstrip() + '\n'
        
        # 如果内容有变化，写入文件
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        
        return False
    except Exception as e:
        print(f"处理文件 {file_path} 时出错: {e}")
        return False

def main():
    """主函数"""
    import sys
    
    # 获取项目根目录
    project_root = Path(__file__).parent
    
    # 如果提供了目录参数，只处理该目录
    if len(sys.argv) > 1:
        target_dir = project_root / sys.argv[1]
        if not target_dir.exists():
            print(f"目录不存在: {target_dir}")
            return
        md_files = list(target_dir.rglob('*.md'))
        print(f"处理目录: {target_dir.relative_to(project_root)}")
    else:
        md_files = list(project_root.rglob('*.md'))
    
    print(f"找到 {len(md_files)} 个Markdown文件")
    
    optimized_count = 0
    for md_file in md_files:
        if optimize_markdown_file(md_file):
            optimized_count += 1
            print(f"已优化: {md_file.relative_to(project_root)}")
    
    print(f"\n完成！共优化了 {optimized_count} 个文件")

if __name__ == '__main__':
    main()

