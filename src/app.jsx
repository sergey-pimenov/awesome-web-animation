import React from 'react';
import GithubCorner from './components/githubCorner';
import Header from './components/header';
import Navigation from './components/navigation';
import Category from './components/category';
import Footer from './components/footer';
import categories from './config/categories';
import s from './app.module.css';
import './index.css';

function App() {
  return (
    <div className={s.app} data-testid="app">
      <GithubCorner />
      <Header />
      <Navigation categories={categories} />
      <main className={s.categories} data-testid="catalog">
        {categories.map(category => (
          <Category
            key={category.id}
            id={category.id}
            items={category.items}
            listType={category.listType}
            titleColor={category.titleColor}
          />
        ))}
      </main>
      <Footer />
    </div>
  );
}

export default App;
