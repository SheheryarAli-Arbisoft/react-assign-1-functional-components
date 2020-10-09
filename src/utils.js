import React, { Fragment } from 'react';

/* eslint-disable react/jsx-filename-extension, react/jsx-fragments */

// Get formatted video time
export const getFormattedTime = dateString => {
  const time = new Date(dateString);
  const currentTime = Date.now();

  const duration = currentTime - time;

  /* eslint-disable react/jsx-one-expression-per-line */

  // Returning the duration in years
  let result = Math.floor(duration / (1000 * 60 * 60 * 24 * 365));
  if (result > 0) {
    return (
      <Fragment>
        <i className='fas fa-clock' />{' '}
        {`${result} year${result > 1 ? 's' : ''} ago`}
      </Fragment>
    );
  }

  // Returning the duration in months
  result = Math.floor(duration / (1000 * 60 * 60 * 24 * 30));
  if (result > 0) {
    return (
      <Fragment>
        <i className='fas fa-clock' />{' '}
        {`${result} month${result > 1 ? 's' : ''} ago`}
      </Fragment>
    );
  }

  // Returning the duration in days
  result = Math.floor(duration / (1000 * 60 * 60 * 24));
  if (result > 0) {
    return (
      <Fragment>
        <i className='fas fa-clock' />{' '}
        {`${result} day${result > 1 ? 's' : ''} ago`}
      </Fragment>
    );
  }

  // Returning the duration in minutes
  result = Math.floor(duration / (1000 * 60 * 60));

  return (
    <Fragment>
      <i className='fas fa-clock' />{' '}
      {`${result} minute${result > 1 ? 's' : ''} ago`}
    </Fragment>
  );
};
