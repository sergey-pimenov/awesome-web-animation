import React from 'react';
import reactDOM from 'react-dom';
import Header from './header';
import './index.css';

function App() {
  return <Header/>;
}

reactDOM.render(<App />, document.getElementById('app'));
