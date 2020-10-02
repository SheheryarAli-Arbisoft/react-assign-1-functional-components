import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import Form from '../components/Form';
import Input from '../components/Input';
import Button from '../components/Button';

const SearchForm = ({ history }) => {
  const [description, setDescription] = useState('');

  const onChange = (e) => {
    setDescription(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // Passing the description in the url
    if (description) {
      history.push(`/?q=${description}`);
    }
  };

  return (
    <Fragment>
      <Form onSubmit={onSubmit}>
        <Input
          type='text'
          placeholder='Search'
          name='description'
          value={description}
          onChange={onChange}
        />
        <Button type='submit'>Search</Button>
      </Form>
    </Fragment>
  );
};

SearchForm.propTypes = {
  history: PropTypes.object.isRequired,
};

export default withRouter(SearchForm);
