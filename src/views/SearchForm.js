import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Input } from '../components/Form';
import { Button } from '../components/Button';

export const SearchForm = () => {
  const [description, setDescription] = useState('');

  const onChange = e => {
    setDescription(e.target.value);
  };

  const history = useHistory();

  const onSubmit = e => {
    e.preventDefault();

    // Passing the description in the url
    if (description) {
      history.push(`/?q=${description}`);
    }
  };

  return (
    /* eslint-disable react/jsx-filename-extension, react/jsx-fragments */
    <Form onSubmit={onSubmit}>
      <Input
        type='text'
        placeholder='Search'
        name='description'
        value={description}
        onChange={onChange}
      />
      <Button variant='primary' type='submit'>
        Search
      </Button>
    </Form>
  );
};
