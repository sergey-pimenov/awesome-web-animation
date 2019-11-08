import React from 'react';
import reactDOM from 'react-dom';
import Header from './header';
import './index.css';

function App() {
  const testVar = 'test content';

  return <Header title={testVar} />;
}

reactDOM.render(<App />, document.getElementById('app'));
