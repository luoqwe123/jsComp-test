import { transparentSize, placementConfig, cornerMoveConfig } from "./config.js";



/**
 * 设置确认框边框样式
 * @param {Object} beforeStyle - 伪元素样式对象
 * @param {string} placement - 位置
 * @param {boolean} isVertical - 是否为垂直方向
 */
export function setConfirmBeforeBorderStyle(beforeforeStyle,oConfirmBeforePosition ,placement, isVertical) {
  const config = placementConfig[placement];
  if (!config) return;
  // 设置透明边框
  if (isVertical) {
    beforeforeStyle['border-left'] = `${transparentSize / 2}px solid transparent`;
    beforeforeStyle['border-top'] = `${transparentSize}px solid transparent`;
    beforeforeStyle['border-right'] = `${transparentSize / 2}px solid transparent`;
    beforeforeStyle['border-bottom'] = `${transparentSize}px solid transparent`;
  } else {
    beforeforeStyle['border-left'] = `${transparentSize}px solid transparent`;
    beforeforeStyle['border-top'] = `${transparentSize / 2}px solid transparent`;
    beforeforeStyle['border-right'] = `${transparentSize}px solid transparent`;
    beforeforeStyle['border-bottom'] = `${transparentSize / 2}px solid transparent`;
  }
  
  // 设置实际边框
  beforeforeStyle[`border-${placement}`] = `${transparentSize}px solid white`;
   // 设置伪元素位置
  if (config.before) {
    Object.entries(config.before).forEach(([key, value]) => {
      oConfirmBeforePosition[key] = value;
    });
  }
}

/**
 * 获取确认框样式
 * @param {string} position - 位置
 * @param {Object} transform - 变换对象
 * @param {Object} beforePosition - 伪元素位置对象
 * @param {Object} style - 样式对象
 * @param {Object} beforeStyle - 伪元素样式对象
 * @param {Object} btnInfo - 按钮信息
 * @param {boolean} isVertical - 是否为垂直方向
 */
export function getConfirmStyle(placement, transform, style, btnInfo) {
  
  // 应用位置配置
  const config = placementConfig[placement];
  if (!config) return;
  
  // 设置变换属性
  transform.x = config.x;
  transform.y = config.y;
  
  // 设置位置样式
  switch (placement) {
    case "top":
      style.top = `${btnInfo.top}px`;
      style.left = `${btnInfo.left + btnInfo.btnWidth / 2}px`;
      break;
    case "left":
      style.top = `${btnInfo.top + btnInfo.btnHeight / 2}px`;
      style.left = `${btnInfo.left}px`;
      break;
    case "right":
      style.top = `${btnInfo.top + btnInfo.btnHeight / 2}px`;
      style.left = `${btnInfo.left + btnInfo.btnWidth}px`;
      break;
    case "bottom":
      style.top = `${btnInfo.top + btnInfo.btnHeight}px`;
      style.left = `${btnInfo.left + btnInfo.btnWidth / 2}px`;
      break;
  }
  
 
}

/**
 * 应用位置修饰符
 * @param {string} modifier - 修饰符 (start/end)
 * @param {Object} transform - 变换对象
 * @param {Object} beforePosition - 伪元素位置对象
 * @param {boolean} isVertical - 是否为垂直方向
 */
export function applyPlacementModifier(modifier, transform, beforePosition, isVertical) {
  if (!modifier) return;
  
  const config = cornerMoveConfig[modifier];
  if (!config) return;
  
  const dirConfig = isVertical ? config.vertical : config.horizontal;
  
  // 应用配置
  Object.entries(dirConfig).forEach(([key, value]) => {
    if (key === 'x' || key === 'y') {
      transform[key] = value;
    } else {
      beforePosition[key] = value;
    }
  });
}