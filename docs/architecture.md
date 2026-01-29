# RRWeb React Kit 架构设计文档

## 1. 概述
RRWeb React Kit 是一个基于 React 框架的工具包，旨在简化 [rrweb](https://github.com/rrweb-io/rrweb) 在 React 应用中的集成。它提供了易于使用的 Hooks 和封装好的组件，使用户能够轻松实现网页录制与回放功能。

## 2. 核心架构
本项目采用分层架构设计，确保代码的可复用性和可维护性。

### 2.1 基础库层 (RRWeb)
最底层通过直接调用 `rrweb` 核心库实现 DOM 变动的监听（录制）和重构（回放）。

### 2.2 逻辑抽象层 (Hooks)
这一层将 `rrweb` 的副作用操作（如 `rrweb.record` 和 `rrweb.Replayer`）抽象为 React Hooks：
- **`useRecorder`**: 管理录制状态机（空闲、录制中），收集事件序列。
- **`usePlayer`**: 管理播放器状态（播放、暂停、进度、速度），并维护对 `Replayer` 实例的引用。

### 2.3 组件展示层 (Components)
在 Hooks 的基础上，提供了预生成的 UI 组件：
- **`Recorder`**: 提供录制触发界面的基础组件。
- **`Player`**: 封装了 `Replayer` 的容器和基础控制栏。

## 3. 技术栈
- **核心框架**: React 18
- **语言**: TypeScript (严格模式)
- **构建工具**: Vite (支持 Library 模式)
- **录制引擎**: rrweb 2.0.0-alpha.4

## 4. 关键流程
### 4.1 录制流程
1. 用户调用 `startRecording`。
2. `rrweb.record` 初始化，开始监听 DOM 变动。
3. 捕获的事件通过 `emit` 回调实时同步到 React 状态/引用中。
4. 用户调用 `stopRecording`，停止监听，返回完整的事件序列。

### 4.2 回放流程
1. 传入事件序列到 `usePlayer`。
2. `rrweb.Replayer` 解析事件序列并挂载到指定的 `containerRef`。
3. 通过定时器 (`requestAnimationFrame`) 监听播放器进度并同步到 React 状态中。
4. 提供控制接口与 `Replayer` 实例交互（play, pause, seek, setSpeed）。
