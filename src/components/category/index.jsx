import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Item from '../item';
import Book from '../book';
import GuiTool from '../guiTool';
import getItemKey from '../../utils/getItemKey';
import s from './category.module.css';

function renderCard(listType, item) {
  if (listType === 'bookCards') {
    return <Book book={item} />;
  }

  if (listType === 'guiCards') {
    return <GuiTool guiToolData={item} />;
  }

  return <Item repo={item.repo} bundleData={item.bundleData} />;
}

function Category({ id, items, listType, titleColor }) {
  return (
    <section
      className={classNames(s.category, s[listType])}
      itemType="https://schema.org/ItemList"
      itemScope
      data-testid="category"
      data-category={id}
    >
      <h2 style={{ color: titleColor }} className={s.title} id={id} itemProp="name">
        {id}
      </h2>
      <ul className={s.items}>
        {items.map(item => (
          <li key={getItemKey(item)} className={s.itemWrapper} itemProp="itemListElement">
            {renderCard(listType, item)}
          </li>
        ))}
      </ul>
    </section>
  );
}

Category.propTypes = {
  id: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  listType: PropTypes.oneOf(['defaultCards', 'bookCards', 'guiCards']).isRequired,
  titleColor: PropTypes.string.isRequired,
};

export default Category;
