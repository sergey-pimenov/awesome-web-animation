import React from 'react';
import PropTypes from 'prop-types';
import useFetch from 'react-fetch-hook';
import Book from './book';

function Container({ googleBookId }) {
  // const { isLoading, data: bookData } = useFetch(
  //   `https://www.googleapis.com/books/v1/volumes/${googleBookId}?key=${process.env.GOOGLE_KEY}`,
  // );

  const alreadyAtLocalStorage = localStorage.getItem(googleBookId) && localStorage.getItem(googleBookId) !== 'undefined';
  const bookDataLocalStorage = alreadyAtLocalStorage && JSON.parse(localStorage.getItem(googleBookId));

  const { isLoading, data: bookData } = useFetch(
    `https://www.googleapis.com/books/v1/volumes/${googleBookId}`,
    {
      depends: [!alreadyAtLocalStorage], // users request will not be called until repoData not loaded
    }
  );

  if (!localStorage.getItem(googleBookId) && !isLoading) {
    localStorage.setItem(googleBookId, JSON.stringify(bookData));
  }

  return (!isLoading || alreadyAtLocalStorage) && <Book bookData={bookDataLocalStorage || bookData} googleBookId={googleBookId}/>;
}

Container.propTypes = {
  googleBookId: PropTypes.string.isRequired,
};

export default Container;
