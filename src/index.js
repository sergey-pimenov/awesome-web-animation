import React from 'react';
import reactDOM from 'react-dom';
import './index.css';

const App = ({title}) => {
  return (
    <h1> {title} </h1>
  );
};

reactDOM.render(<App title='New app...' />, document.getElementById('app'));