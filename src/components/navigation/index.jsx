import React from 'react';
import PropTypes from 'prop-types';
import s from './navigation.module.css';

function Navigation({ categories }) {
  return (
    <nav className={s.navigation} data-testid="navigation" aria-label="Categories">
      {categories.map(category => (
        <a
          key={category.id}
          className={s.item}
          href={`#${category.id}`}
          style={{ color: category.titleColor }}
        >
          {category.navLabel}
        </a>
      ))}
    </nav>
  );
}

Navigation.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      navLabel: PropTypes.string.isRequired,
      titleColor: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Navigation;
