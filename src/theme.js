// Main colors
const primaryColor = '#0d73d1';
const secondaryColor = '#39a113';
const infoColor = '#1bacbf';
const dangerColor = '#bf441b';
const defaultColor = '#ededed';

// Hover colors
const primaryHoverColor = '#0b5599';
const secondaryHoverColor = '#246b0a';
const infoHoverColor = '#0c6b78';
const dangerHoverColor = '#802a0e';
const defaultHoverColor = '#c4c4c4';

// Spacing
const spacing = {
  small: '6px',
  normal: '8px',
  large: '10px',
};

// Text size
const textSize = {
  small: '12px',
  normal: '15px',
  large: '18px',
};

export const theme = {
  color: {
    primary: '#276ad6',
    hover: '#1a56b8',
    text: {
      primary: '#000000',
      secondary: '#5a5a5a',
      inverted: '#ffffff',
    },
    card: {
      background: '#ffffff',
      border: '#c9c9c9',
    },
  },

  // Theming options for buttons
  button: {
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
          return spacing.small;
        case 'normal':
          return spacing.normal;
        case 'large':
          return spacing.large;
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
  },

  // Theming options for text
  text: {
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
          return spacing.normal;
        case 'large':
          return spacing.large;
        default:
          return '0';
      }
    },
  },

  spacing: {
    small: '6px',
    default: '8px',
    medium: '10px',
    large: '20px',
    xlarge: '30px',
  },
  size: {
    text: {
      small: '14px',
      default: '16px',
      medium: '18px',
      large: '26px',
      heading: '54px',
    },
  },
  thumbnail: {
    small: {
      width: '120px',
      height: '80px',
    },
    normal: {
      width: '256px',
      height: '150px',
    },
  },
};
