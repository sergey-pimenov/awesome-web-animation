import React from 'react';
import PropTypes from 'prop-types';
import s from './category.css';
import Item from '../item';
import Book from '../book';
import GuiTool from '../guiTool';

function Category({ name, categoryData, listType, titleColor }) {
  return (
    <section className={`${s.category} ${s[listType]}`} itemType="https://schema.org/ItemList" itemScope>
      <h2 style={{ color: titleColor, }} className={s.title} id={name} itemProp="name">
        {name}
      </h2>
      <ul className={s.items}>
        {categoryData.map(item => {
          return (
            <li
              key={item.repo || item.googleBookId || item.name}
              className={s.itemWrapper}
              itemProp="itemListElement"
            >
              {listType === 'defaultCards' && (
                <Item repo={item.repo} bundleData={item.bundleData} />
              )}
              {listType === 'bookCards' && <Book googleBookId={item.googleBookId} />}
              {listType === 'guiCards' && <GuiTool guiToolData={item} />}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

Category.propTypes = {
  name: PropTypes.string.isRequired,
  listType: PropTypes.string.isRequired,
  titleColor: PropTypes.string.isRequired,
}

export default Category;
