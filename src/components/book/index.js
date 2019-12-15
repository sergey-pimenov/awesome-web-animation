import React from 'react';
import PropTypes from 'prop-types';
import useFetch from 'react-fetch-hook';
import Book from './book';

function Container({ googleBookId }) {
  const { isLoading, data: bookData } = useFetch(
    `https://www.googleapis.com/books/v1/volumes/${googleBookId}?key=${process.env.GOOGLE_KEY}`,
  );

  // const { isLoading, data } = useFetch(
  //   `https://www.googleapis.com/books/v1/volumes/${googleBookId}`,
  // );

  return !isLoading && <Book bookData={bookData} googleBookId={googleBookId}/>;
}

Container.propTypes = {
  googleBookId: PropTypes.string.isRequired,
};

export default Container;
