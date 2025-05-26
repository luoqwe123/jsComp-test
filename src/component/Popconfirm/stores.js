/**
 * 响应式状态管理模块
 */

/**
 * 创建响应式对象
 * @param {Object} target - 目标对象
 * @param {Object} styleObj - 样式对象
 * @returns {Proxy} - 响应式代理对象
 */
export function reactive(target, styleObj) {
  return new Proxy(target, {
    get(target, prop) {
      return target[prop];
    },
    set(target, prop, value) {
      target[prop] = value;
      updateStyle(target, styleObj, prop);
      return true;
    }
  });
}

/**
 * 根据目标对象更新样式
 * @param {Object} targetObj - 目标对象
 * @param {Object} styleObj - 样式对象
 * @param {string} prop - 属性名
 */
function updateStyle(targetObj, styleObj, prop) {
  switch (targetObj.id) {
    case "oConfirm":
      styleObj.transform = `translateY(${targetObj.y}%) translateX(${targetObj.x}%)`;
      break;
    case "oConfirmBefore":
      styleObj[prop] = `${targetObj[prop]}%`;
      break;
  }
}

