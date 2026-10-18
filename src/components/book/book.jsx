/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import getSymbolFromCurrency from 'currency-symbol-map';
import s from './book.module.css';
import pages from './img/pages.svg';

function Book({ book }) {
  const authors = book.authors || [];
  const coverSrc = book.cover ? `/${book.cover.replace(/^\//, '')}` : '';
  const previewLink = book.previewLink || `https://books.google.com/books?id=${book.googleBookId}`;
  const description = (book.description || '').replace(/[<]br[^>]*[>]/gi, '');

  return (
    <div className={s.book} itemScope itemType="http://schema.org/Book" data-testid="book-card">
      <a
        href={previewLink}
        className={s.link}
        target="_blank"
        rel="noopener noreferrer"
        itemProp="url"
      >
        Link to {book.title}
      </a>
      {coverSrc && <img className={s.cover} src={coverSrc} alt={book.title || 'Book cover'} itemProp="illustration" />}
      <div className={s.content}>
        <h3 itemProp="name" className={s.title}>
          {book.title}
        </h3>
        {book.subtitle && <p className={s.subTitle}>{book.subtitle}</p>}
        {description && (
          <div className={`${s.descriptionWrapper} textCropEffect`}>
            <div
              className={s.description}
              itemProp="about"
              dangerouslySetInnerHTML={{
                __html: description,
              }}
            />
          </div>
        )}
      </div>
      <div className={s.info}>
        <div className={s.authors}>
          {authors.map(author => (
            <div key={author} itemProp="author" className={s.author}>
              {author}
            </div>
          ))}
        </div>
        {book.publishedDate && (
          <time itemProp="datePublished" dateTime={book.publishedDate}>
            {book.publishedDate}
          </time>
        )}
        {book.pageCount && book.pageCount < 10000 && (
          <div className={s.pageCount}>
            <img className={s.pagesIcon} src={pages} alt="Pages:" />
            <span itemProp="numPages">{book.pageCount}</span>
          </div>
        )}
        {book.retailPrice && (
          <div className={s.sale} itemProp="offers" itemScope itemType="http://schema.org/Offer">
            <span className={s.currencyCode} itemProp="priceCurrency">
              {getSymbolFromCurrency(book.retailPrice.currencyCode)}
            </span>
            &nbsp;
            <span itemProp="price">{Math.round(book.retailPrice.amount)}</span>
          </div>
        )}
      </div>
      {book.publisher && <meta itemProp="publisher" content={book.publisher} />}
      {book.language && <meta itemProp="language" content={book.language} />}
      {book.categories &&
        book.categories.map(category => (
          <meta key={category} itemProp="keywords" content={category} />
        ))}
    </div>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    googleBookId: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    description: PropTypes.string,
    previewLink: PropTypes.string,
    cover: PropTypes.string,
    pageCount: PropTypes.number,
    publisher: PropTypes.string,
    language: PropTypes.string,
    categories: PropTypes.arrayOf(PropTypes.string),
    authors: PropTypes.arrayOf(PropTypes.string),
    publishedDate: PropTypes.string,
    retailPrice: PropTypes.shape({
      currencyCode: PropTypes.string,
      amount: PropTypes.number,
    }),
  }).isRequired,
};

export default Book;
