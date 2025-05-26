#!/bin/bash

# 检查是否提供了文件夹名称作为参数
if [ $# -eq 0 ]; then
    echo "错误：请提供至少一个文件夹名称"
    echo "用法：$0 folder1 folder2 folder3 ..."
    exit 1
fi

# 检查是否安装了 pnpm
if ! command -v pnpm &> /dev/null; then
    echo "错误：未找到 pnpm，请先安装 pnpm（npm install -g pnpm）"
    exit 1
fi

# 循环遍历所有传入的文件夹名称
for folder in "$@"; do
    echo "正在创建并初始化文件夹: $folder"

    # 创建文件夹（如果不存在）
    mkdir -p "$folder"

    # 进入文件夹
    cd "$folder" || { echo "无法进入文件夹 $folder"; exit 1; }

    # 初始化 pnpm 项目
    pnpm init

    # 创建 index.js 文件
    echo "// Entry point for $folder" > index.js

    # 创建 README.md 文件
    echo "# $folder" > README.md
    echo "" >> README.md
    echo "This is the $folder project." >> README.md

    # 返回根目录
    cd .. || { echo "无法返回根目录"; exit 1; }
done

echo "所有文件夹已创建并初始化完成！"
echo "你可以使用 'code .' 在 VSCode 中打开项目"


## 使用： 在终端输入   chmod +x setup-projects.sh  ./setup-projects.sh frontend backend api  能够创建 frontend backend api  文件