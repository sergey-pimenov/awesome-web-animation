import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import s from './cardStatus.module.css';

export function CardSkeleton({ variant }) {
  return (
    <div
      className={classNames(s.skeleton, s[variant])}
      data-testid="card-skeleton"
      aria-hidden="true"
    >
      <div className={s.line} />
      <div className={classNames(s.line, s.short)} />
      <div className={classNames(s.line, s.medium)} />
    </div>
  );
}

export function CardError({ message }) {
  return (
    <div className={s.error} data-testid="card-error" role="status">
      {message}
    </div>
  );
}

CardSkeleton.propTypes = {
  variant: PropTypes.oneOf(['item', 'book', 'gui']),
};

CardSkeleton.defaultProps = {
  variant: 'item',
};

CardError.propTypes = {
  message: PropTypes.string.isRequired,
};
