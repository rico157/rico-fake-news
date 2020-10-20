import React from 'react';
import './App.css';
import Articles from './pages/Articles';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import { Router } from '@reach/router';
import Article from './pages/Article';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Articles path="/" />
        <Article path="/articles/:article_id" />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
