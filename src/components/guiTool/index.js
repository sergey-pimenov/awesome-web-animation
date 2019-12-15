/* eslint-disable react/no-danger */
import React from 'react';
import s from './guiTool.css';

function GuiTool({ guiToolData: tool }) {
  return (
    <a className={s.guiTool} href={tool.link} target="_blank" rel="noreferrer noopener">
      <img className={s.cover} src={tool.cover} alt={`Cover of ${tool.name}`} />
      <h2 className={s.title}> { tool.name } </h2>
      <p className={s.description}> { tool.description } </p>
    </a>
  );
}

export default GuiTool;
