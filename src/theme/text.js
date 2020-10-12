import {
  headingTextColor,
  primaryTextColor,
  secondaryTextColor,
} from './colors';
import { textSize } from './size';

export const text = {
  getDisplay(variant) {
    switch (variant) {
      case 'heading':
        return 'flex';
      default:
        return 'block';
    }
  },
  getColor(variant) {
    switch (variant) {
      case 'heading':
        return headingTextColor;
      case 'subtitle':
        return secondaryTextColor;
      default:
        return primaryTextColor;
    }
  },
  getSize(variant, small) {
    switch (variant) {
      case 'heading':
        return textSize.heading;
      case 'title':
        return small ? textSize.normal : textSize.title;
      case 'subtitle':
        return small ? textSize.small : textSize.subtitle;
      case 'description':
        return small ? textSize.small : textSize.description;
      default:
        return '0';
    }
  },
  getWeight(variant) {
    switch (variant) {
      case 'heading':
      case 'title':
        return 'bold';
      default:
        return 'none';
    }
  },
};
