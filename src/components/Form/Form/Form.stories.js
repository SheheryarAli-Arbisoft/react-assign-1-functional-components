import React from 'react';
import { Form } from './Form';
import { Input } from '../Input';
import { Button } from '../../Button';

export default {
  title: 'Form',
  component: Form,
};

const Template = args => <Form {...args} />;

const defaultArgs = {
  children: [
    <Input type='text' placeholder='Search' />,
    <Button variant='primary'>Search</Button>,
  ],
};

export const Normal = Template.bind({});
Normal.args = {
  ...defaultArgs,
};
