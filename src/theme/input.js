import { textSize } from './size';
import { fieldSpacing } from './spacing';

export const input = {
  getSize(size) {
    switch (size) {
      case 'normal':
        return textSize.normal;
      case 'large':
        return textSize.large;
      default:
        return '0';
    }
  },
  getSpacing(size) {
    switch (size) {
      case 'normal':
        return fieldSpacing.normal;
      case 'large':
        return fieldSpacing.large;
      default:
        return '0';
    }
  },
};
