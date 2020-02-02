/* eslint-disable no-restricted-syntax, guard-for-in */
import React from 'react';
import reactDOM from 'react-dom';
import GithubCorner from './components/githubCorner';
import Header from './components/header';
import Navigation from './components/navigation';
import Category from './components/category';
import Footer from './components/footer';
import itemsData from '../data/items.yaml';
import booksData from '../data/books.yaml';
import guiToolsData from '../data/gui.yaml';
import s from './index.css';

function App() {
  return (
    <div className={s.app}>
      <GithubCorner />
      <Header />
      <Navigation />
      <div className={s.categories}>
        <Category
          name="Books"
          categoryData={booksData.all}
          listType="bookCards"
          titleColor="#e970aa"
        />
        <Category
          name="SVG"
          categoryData={itemsData.svg}
          listType="defaultCards"
          titleColor="#ad8abf"
        />
        <Category
          name="Common"
          categoryData={itemsData.common}
          listType="defaultCards"
          titleColor="#72a2cf"
        />
        <Category
          name="CSS"
          categoryData={itemsData.css}
          listType="defaultCards"
          titleColor="#3fc3bf"
        />
        <Category
          name="Canvas"
          categoryData={itemsData.canvas}
          listType="defaultCards"
          titleColor="#67bc97"
        />
        <Category
          name="Scroll"
          categoryData={itemsData.scroll}
          listType="defaultCards"
          titleColor="#80b97e"
        />
        <Category
          name="Text"
          categoryData={itemsData.text}
          listType="defaultCards"
          titleColor="#acb253"
        />
        <Category
          name="React"
          categoryData={itemsData.react}
          listType="defaultCards"
          titleColor="#ebc20d"
        />
        <Category
          name="GUI"
          categoryData={guiToolsData.all}
          listType="guiCards"
          titleColor="#ffae13"
        />
      </div>
      <Footer />
    </div>
  );
}

reactDOM.render(<App />, document.getElementById('appWrapper'));
