/* eslint-disable react/no-danger */
import React from 'react';
import useFetch from 'react-fetch-hook';
import getSymbolFromCurrency from 'currency-symbol-map';
import s from './book.css';
import pages from './img/pages.svg';

function Books({ googleBookId }) {
  // const { isLoading, data: bookData } = useFetch(
  //   `https://www.googleapis.com/books/v1/volumes/${googleBookId}?key=${process.env.GOOGLE_KEY}`,
  // );
  const { isLoading, data: bookData } = useFetch(
    `https://www.googleapis.com/books/v1/volumes/${googleBookId}`,
  );

  return (
    <a
      href={[!isLoading && bookData ? bookData.volumeInfo.previewLink : '']}
      className={s.book}
      target="_blank"
      rel="noopener noreferrer"
    >
      {!isLoading && bookData && (
        <>
          <img
            className={s.cover}
            src={bookData.volumeInfo.imageLinks.large || `../data/covers/${googleBookId}.png`}
            alt="Book cover"
          />
          <div className={s.content}>
            <h2 className={s.title}> {bookData.volumeInfo.title} </h2>
            <h3 className={s.subTitle}> {bookData.volumeInfo.subtitle} </h3>
            <div className={s.descriptionWrapper}>
              <div
                className={s.description}
                dangerouslySetInnerHTML={{
                  __html: bookData.volumeInfo.description.replace(/[<]br[^>]*[>]/gi, ''),
                }}
              />
            </div>
          </div>
          <div className={s.info}>
            <div className={s.authors}>
              {bookData.volumeInfo.authors.map(author => {
                return (
                  <div key={author} className={s.author}>
                    {' '}
                    {author}{' '}
                  </div>
                );
              })}
            </div>
            <time> {bookData.volumeInfo.publishedDate} </time>
            <div className={s.pageCount}>
              <img className={s.pagesIcon} src={pages} alt="Pages:"/>
              {bookData.volumeInfo.pageCount}
            </div>
            {bookData.saleInfo.retailPrice && (
              <div className={s.sale}>
                {Math.round(bookData.saleInfo.retailPrice.amount)}
                <span className={s.currencyCode}>
                  {getSymbolFromCurrency(bookData.saleInfo.retailPrice.currencyCode)}
                </span>
              </div>
            )}
          </div>
          {/* 
          <div>
            <div> {bookData.saleInfo.listPrise} {bookData.saleInfo.currencyCode} </div>
            <a href={bookData.accessInfo.webReaderLink} target="_blank" rel="noopener noreferrer">
              Read demo
            </a>
          </div> */}
        </>
      )}
    </a>
  );
}

export default Books;
