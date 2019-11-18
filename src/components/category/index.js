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
            <li className={s('item')}>
              <Item
                name={item.name}
                website={item.website}
                repo={item.repo}
                key={item.name}
                stars={item.stargazers_count}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Category;
