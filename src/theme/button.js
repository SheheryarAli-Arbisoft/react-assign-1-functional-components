import {
  primaryColor,
  secondaryColor,
  infoColor,
  dangerColor,
  defaultColor,
  primaryHoverColor,
  secondaryHoverColor,
  infoHoverColor,
  dangerHoverColor,
  defaultHoverColor,
} from './colors';
import { fieldSpacing } from './spacing';
import { textSize } from './size';

export const button = {
  getBackgroundColor(variant) {
    switch (variant) {
      case 'primary':
        return primaryColor;
      case 'secondary':
        return secondaryColor;
      case 'info':
        return infoColor;
      case 'danger':
        return dangerColor;
      default:
        return defaultColor;
    }
  },
  getHoverColor(variant) {
    switch (variant) {
      case 'primary':
        return primaryHoverColor;
      case 'secondary':
        return secondaryHoverColor;
      case 'info':
        return infoHoverColor;
      case 'danger':
        return dangerHoverColor;
      default:
        return defaultHoverColor;
    }
  },
  getTextColor(variant) {
    switch (variant) {
      case 'primary':
      case 'secondary':
      case 'info':
      case 'danger':
        return '#ffffff';
      default:
        return '#000000';
    }
  },
  getSpacing(size) {
    switch (size) {
      case 'small':
        return fieldSpacing.small;
      case 'normal':
        return fieldSpacing.normal;
      case 'large':
        return fieldSpacing.large;
      default:
        return '0';
    }
  },
  getTextSize(size) {
    switch (size) {
      case 'small':
        return textSize.small;
      case 'normal':
        return textSize.normal;
      case 'large':
        return textSize.large;
      default:
        return '0';
    }
  },
};
