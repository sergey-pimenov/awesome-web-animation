/* eslint-disable react/no-danger */
import React from 'react';
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
      <h2 className={s.title} itemProp="name"> {tool.name} </h2>
      <p className={s.description} itemProp="about"> {tool.description} </p>
    </div>
  );
}

export default GuiTool;
