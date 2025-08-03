# 前端代码练习项目（HTML + CSS + TypeScript）

一个用于练习原生前端技术的 Demo 合集项目，**不使用任何框架**，专注于基础逻辑训练。

## 📁 项目结构
```
web-code-practice/
├── demos/               # 每个练习 Demo 独立存放
├── css/                 # 全局样式
├── index.html           # 主页导航
├── tsconfig.json        # TypeScript 配置
├── .eslintrc.json       # ESLint 配置
├── .prettierrc          # 代码格式化配置
└── package.json         # 脚本与依赖
```

## 🧰 使用此项目
- 在 /demos 下新建文件夹，如 02-todo-list/
- 添加 index.html, style.css, script.ts, README.md
- 在 index.html（主页）中添加链接

## ⚙️ 开发命令

```bash
# 1. 安装依赖
pnpm install

# 2. 启动开发服务器（自动刷新）
npm start

# 3. 监听 TypeScript 编译
npm run watch

# 4. 格式化代码
npm run format

# 5. 检查代码规范
npm run lint

# 6.调试
使用 .vscode/launch.json 配置进行调试
或
使用 浏览器开发者工具
```