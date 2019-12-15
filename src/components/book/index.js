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
      itemScope
      itemType="http://schema.org/Book"
    >
      {!isLoading && bookData && (
        <>
          <img
            className={s.cover}
            src={bookData.volumeInfo.imageLinks.large || `../data/covers/${googleBookId}.png`}
            alt="Book cover"
            itemProp="illustration"
          />
          <div className={s.content}>
            <h2 itemProp="name" className={s.title}> {bookData.volumeInfo.title} </h2>
            <h3 className={s.subTitle}> {bookData.volumeInfo.subtitle} </h3>
            <div className={`${s.descriptionWrapper} textCropEffect`}>
              <div
                className={s.description}
                itemProp="about"
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
                  <div key={author} itemProp="author" className={s.author}>
                    {author}
                  </div>
                );
              })}
            </div>
            <time itemProp="datePublished" dateTime={bookData.volumeInfo.publishedDate}> {bookData.volumeInfo.publishedDate} </time>
            {/* In some cases the page count is too high - like one million pages. It's error on side of Google Books API */}
            {bookData.volumeInfo.pageCount && bookData.volumeInfo.pageCount < 10000 && (
              <div className={s.pageCount}>
                <img className={s.pagesIcon} src={pages} alt="Pages:"/>
                <span itemProp="numPages"> {bookData.volumeInfo.pageCount} </span>
              </div>
            )}
            {bookData.saleInfo.retailPrice && (
              <div className={s.sale} itemProp="offers" itemScope itemType="http://schema.org/Offer">
                <span className={s.currencyCode} itemProp="priceCurrency">
                  {getSymbolFromCurrency(bookData.saleInfo.retailPrice.currencyCode)}
                </span>&nbsp;
                <span itemProp="price">{Math.round(bookData.saleInfo.retailPrice.amount)}</span>
              </div>
            )}
          </div>
          {/* Additional scheme data */}
          <meta itemProp="publisher" content={bookData.volumeInfo.publisher} />
          <meta itemProp="language" content={bookData.volumeInfo.language} />
          {bookData.volumeInfo.categories && bookData.volumeInfo.categories.map(category => {
            return (
              <meta key={category} itemProp="keywords" content={category} />
            );
          })}
        </>
      )}
    </a>
  );
}

export default Books;
