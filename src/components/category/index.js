import React from 'react';
import classNames from 'classnames/bind';
import styles from './category.css';
import Item from '../item';

function Category({ categoryData, titleColor }) {
  const s = classNames.bind(styles);

  return (
    <section className={s('category')}>
      <h2 style={{ color: titleColor, }} className={s('title')} id={categoryData.categoryTitle}>
        {categoryData.categoryTitle}
      </h2>
      <ul className={s('items')}>
        {categoryData.list.map(item => {
          return (
            <li key={item.repo} className={s('item')}>
              <Item repo={item.repo} bundleData={item.bundleData} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Category;
