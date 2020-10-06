import React from 'react';

import { List as CustomList } from './styled';

import { propTypes, defaultProps } from './props';

const List = ({ children, ...rest }) => {
  return <CustomList {...rest}>{children}</CustomList>;
};

List.propTypes = propTypes;
List.defaultProps = defaultProps;

export default List;
