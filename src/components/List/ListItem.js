import React from 'react';

import { ListItem as CustomListItem } from './styled';

import { propTypes, defaultProps } from './props';

const ListItem = ({ children, ...rest }) => {
  return <CustomListItem {...rest}>{children}</CustomListItem>;
};

ListItem.propTypes = propTypes;
ListItem.defaultProps = defaultProps;

export default ListItem;
