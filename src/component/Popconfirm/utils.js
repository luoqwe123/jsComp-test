


/**
 * 判断位置是否为垂直方向
 * @param {string} placement - 位置
 * @returns {boolean} - 是否为垂直方向
 */
export function judgeIsVertical(placement) {
  return !(placement === "left" || placement === "right");
}

/**
 * 解析位置字符串
 * @param {string} placement - 位置字符串 (如 "top-start")
 * @returns {Array} - [位置, 修饰符]
 */
export function parsePlacement(placement) {
  return placement.includes('-') ? placement.split('-') : [placement, null];
}


/**
 * 将样式对象转换为CSS样式字符串
 * @param {Object} styleObj - 样式对象
 * @returns {string} - CSS样式字符串
 */
export function styleObjectToCss(styleObj) {
  return Object.entries(styleObj).map(([key, value]) => {
    return `${key}: ${value};`;
  }).join('\n');
}