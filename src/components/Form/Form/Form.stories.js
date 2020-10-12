import React from 'react';
import { Form } from './Form';
import { Input } from '../Input';
import { Button } from '../../Button';
import { theme } from '../../../theme';

export default {
  title: 'Form',
  component: Form,
};

const Template = args => <Form {...args} />;

const defaultArgs = {
  theme,
  children: [
    <Input type='text' placeholder='Search' theme={theme} />,
    <Button variant='primary' theme={theme}>
      Search
    </Button>,
  ],
};

export const Normal = Template.bind({});
Normal.args = {
  ...defaultArgs,
};
