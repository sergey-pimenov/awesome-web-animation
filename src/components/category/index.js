import React from 'react';
import s from './category.css';
import Item from '../item';

function Category({ categoryData, titleColor }) {
  return (
    <section className={s.category}>
      <h2 style={{ color: titleColor, }} className={s.title} id={categoryData.categoryTitle}>
        {categoryData.categoryTitle}
      </h2>
      <ul className={s.items}>
        {categoryData.list.map(item => {
          return (
            <li key={item.repo} className={s.itemWrapper}>
              <Item repo={item.repo} bundleData={item.bundleData} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Category;
