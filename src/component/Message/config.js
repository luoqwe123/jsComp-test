export const MESSAGE_TYPES = {
  INFO: 'info',
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error',
  PRIMARY: 'primary'
};

// 消息类型对应的颜色
export const TYPE_COLORS = {
  [MESSAGE_TYPES.PRIMARY]: '#409eff',
  [MESSAGE_TYPES.SUCCESS]: '#67c23a',
  [MESSAGE_TYPES.WARNING]: '#e6a23c',
  [MESSAGE_TYPES.ERROR]: '#f56c6c',
  [MESSAGE_TYPES.INFO]: '#909399'
};