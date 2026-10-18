import React from 'react';
import PropTypes from 'prop-types';
import { CardError } from '../cardStatus';
import Book from './book';

function BookContainer({ book }) {
  if (!book || !book.title) {
    return <CardError message="Could not load book" />;
  }

  return <Book book={book} />;
}

BookContainer.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string,
  }).isRequired,
};

export default BookContainer;
