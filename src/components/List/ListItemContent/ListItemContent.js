import React from 'react';
import { ListItemContent as CustomListItemContent } from './styled';
import { propTypes, defaultProps } from './props';

export const ListItemContent = ({ children, ...rest }) => {
  return <CustomListItemContent {...rest}>{children}</CustomListItemContent>;
};

ListItemContent.propTypes = propTypes;
ListItemContent.defaultProps = defaultProps;
