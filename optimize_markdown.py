#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Markdown 文件优化美化脚本
用于批量优化和美化项目中的所有 markdown 文件
"""

import os
import re
import sys
from pathlib import Path


class MarkdownOptimizer:
    """Markdown 文件优化器"""
    
    def __init__(self, root_dir):
        self.root_dir = Path(root_dir)
        self.processed_count = 0
        self.error_count = 0
        
    def find_all_md_files(self):
        """查找所有 markdown 文件"""
        md_files = []
        # 排除某些目录
        exclude_dirs = {'.git', 'node_modules', '.next', 'dist', 'build', '__pycache__'}
        
        for root, dirs, files in os.walk(self.root_dir):
            # 过滤排除的目录
            dirs[:] = [d for d in dirs if d not in exclude_dirs]
            
            for file in files:
                if file.endswith('.md'):
                    md_files.append(Path(root) / file)
        
        return md_files
    
    def optimize_content(self, content, filename):
        """优化 markdown 内容"""
        lines = content.split('\n')
        optimized_lines = []
        
        # 检查是否有一级标题
        has_h1 = any(line.strip().startswith('# ') for line in lines)
        
        # 如果没有一级标题，从文件名生成一个
        if not has_h1 and lines:
            title = self._generate_title_from_filename(filename)
            optimized_lines.append(f'# {title}')
            optimized_lines.append('')
        
        in_code_block = False
        prev_line_empty = False
        code_block_pattern = re.compile(r'^```')
        
        for i, line in enumerate(lines):
            # 检测代码块
            if code_block_pattern.match(line.strip()):
                in_code_block = not in_code_block
                # 优化代码块标识，添加语言标识
                line = self._optimize_code_block_tag(line)
            
            # 去除行尾空格
            line = line.rstrip()
            
            # 优化标题格式
            if not in_code_block and line.strip().startswith('#'):
                line = self._optimize_heading(line)
            
            # 控制连续空行（最多保留一个空行）
            is_empty = len(line.strip()) == 0
            if is_empty:
                if prev_line_empty:
                    continue
                prev_line_empty = True
            else:
                prev_line_empty = False
            
            # 优化列表格式
            if not in_code_block:
                line = self._optimize_list(line)
            
            optimized_lines.append(line)
        
        # 移除开头的空行
        while optimized_lines and not optimized_lines[0].strip():
            optimized_lines.pop(0)
        
        # 确保文件以换行符结尾
        result = '\n'.join(optimized_lines)
        if result and not result.endswith('\n'):
            result += '\n'
        
        return result
    
    def _generate_title_from_filename(self, filename):
        """从文件名生成标题"""
        # 移除文件扩展名
        title = filename.replace('.md', '')
        # 移除编号前缀（如 V001-、S001- 等）
        title = re.sub(r'^[A-Z]+\d+-', '', title)
        # 移除星号标记
        title = title.replace('★', '').strip()
        return title
    
    def _optimize_heading(self, line):
        """优化标题格式"""
        # 确保 # 后面有空格
        match = re.match(r'^(#+)([^#\s].*)', line)
        if match:
            hashes, title = match.groups()
            line = f'{hashes} {title}'
        
        # 移除标题中不必要的空格
        line = re.sub(r'^(#+)\s+', lambda m: m.group(1) + ' ', line)
        
        return line.strip()
    
    def _optimize_code_block_tag(self, line):
        """优化代码块标识"""
        # 如果代码块标识后面没有语言标识，尝试添加常见的
        if line.strip() == '```':
            # 保持原样，让用户自己添加
            return line
        
        # 统一使用小写语言标识
        match = re.match(r'^```(\w+)', line)
        if match:
            lang = match.group(1).lower()
            # 统一某些常见的语言标识
            lang_map = {
                'javascript': 'js',
                'typescript': 'ts',
                'jsx': 'jsx',
                'tsx': 'tsx',
                'vue': 'vue',
                'html': 'html',
                'css': 'css',
                'scss': 'scss',
                'less': 'less',
                'json': 'json',
                'python': 'python',
                'java': 'java',
                'bash': 'bash',
                'shell': 'bash',
                'sh': 'bash',
            }
            lang = lang_map.get(lang, lang)
            return f'```{lang}'
        
        return line
    
    def _optimize_list(self, line):
        """优化列表格式"""
        # 统一无序列表使用 -
        stripped = line.lstrip()
        indent = line[:len(line) - len(stripped)]
        
        # 处理无序列表
        if stripped.startswith('* ') or stripped.startswith('+ '):
            return indent + '- ' + stripped[2:]
        
        # 确保列表项后面有空格
        match = re.match(r'^(\s*)(-|\d+\.|\*|\+)(\S+.*)', line)
        if match:
            indent, marker, content = match.groups()
            return f'{indent}{marker} {content}'
        
        return line
    
    def process_file(self, file_path):
        """处理单个文件"""
        try:
            # 读取文件
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # 优化内容
            optimized_content = self.optimize_content(content, file_path.name)
            
            # 如果内容有变化，写回文件
            if content != optimized_content:
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(optimized_content)
                print(f'✓ 优化: {file_path.relative_to(self.root_dir)}')
                self.processed_count += 1
            
        except Exception as e:
            print(f'✗ 错误: {file_path.relative_to(self.root_dir)} - {str(e)}')
            self.error_count += 1
    
    def run(self):
        """运行优化"""
        print('开始扫描 Markdown 文件...')
        md_files = self.find_all_md_files()
        print(f'找到 {len(md_files)} 个 Markdown 文件\n')
        
        print('开始优化...\n')
        for file_path in md_files:
            self.process_file(file_path)
        
        print(f'\n优化完成！')
        print(f'- 处理文件数: {self.processed_count}')
        print(f'- 错误数: {self.error_count}')
        print(f'- 总文件数: {len(md_files)}')


def main():
    """主函数"""
    # 获取当前脚本所在目录作为项目根目录
    script_dir = Path(__file__).parent
    
    print('=' * 60)
    print('Markdown 文件优化美化工具')
    print('=' * 60)
    print(f'项目目录: {script_dir}\n')
    
    optimizer = MarkdownOptimizer(script_dir)
    optimizer.run()
    
    print('\n' + '=' * 60)


if __name__ == '__main__':
    main()

