/**
 * 配置常量
 */

// 透明边框大小
export const transparentSize = 10;

// 确认框默认配置
export const defaultConfig = {
  // 确认框文本
  confirmText: 'yes',
  cancelText: 'no',
  // 确认框宽度
  width: 100,
  // 确认框内边距
  padding: 10,
  // 确认框位置
  defaultPlacement: 'top'
};

// 位置映射配置
export const placementConfig = {
  top: { x: -50, y: -100, before: { bottom: -5, left: 47 } },
  left: { x: -100, y: -50, before: { bottom: 47, right: -5 } },
  right: { x: 0, y: -50, before: { bottom: 47, left: -5 } },
  bottom: { x: -50, y: 0, before: { top: -5, left: 47 } }
};

// 位置修饰符配置
export const cornerMoveConfig = {
  start: {
    vertical: { left: 23, x: -25 },
    horizontal: { bottom: 70, y: -25 }
  },
  end: {
    vertical: { left: 70, x: -75 },
    horizontal: { bottom: 23, y: -75 }
  }
};