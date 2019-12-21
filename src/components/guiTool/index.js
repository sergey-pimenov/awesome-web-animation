import React from 'react';
import PropTypes from 'prop-types';
import s from './guiTool.css';

function GuiTool({ guiToolData: tool }) {
  return (
    <div className={s.guiTool} itemType="https://schema.org/CreativeWork" itemScope>
      <a
        className={s.link}
        href={tool.link}
        target="_blank"
        rel="noreferrer noopener"
        itemProp="url"
      >
        Link to {tool.name}
      </a>
      <img className={s.cover} src={tool.cover} alt={`Cover of ${tool.name}`} itemProp="image"/>
      <div className={s.content}>
        <h2 className={s.title} itemProp="name"> {tool.name} </h2>
        <p className={s.description} itemProp="about"> {tool.description} </p>
      </div>
    </div>
  );
}

GuiTool.propTypes = {
  guiToolData: PropTypes.shape({
    name: PropTypes.string,
    cover: PropTypes.string,
    description: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};

export default GuiTool;
