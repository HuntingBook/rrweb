# RRWeb React Kit 开发指南

## 1. 环境準備
- **Node.js**: 建议 v16+
- **npm**: 建议 v8+
- **TypeScript**: 4.x+

## 2. 项目初始化
```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

## 3. 开发规范
### 3.1 目录结构
- `src/hooks`: 存放核心逻辑隔离，严禁直接在 Hook 中编写 UI。
- `src/components`: 存放通用组件。
- `src/App.tsx`: 演示项目，用于开发调试。

### 3.2 类型定义
所有新增的功能必须提供完整的 TypeScript 定义，并导出至 `src/types` 或相应的模块中。

### 3.3 状态管理
- 使用 React 内置的 `useState` 和 `useRef`。
- 对于 `rrweb` 实例，必须使用 `useRef` 维护以避免不必要的重绘和内存泄漏。

## 4. 构建与发布
### 4.1 构建项目
```bash
npm run build
```
构建产物将放在 `dist` 目录下，包含 ESM 和 UMD 格式。

### 4.2 Linter
确保在提交前运行 Lint 检查（如适用）。目前项目使用 Vite 内置的检查机制。
