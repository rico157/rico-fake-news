import React from 'react';
import './App.css';
import Articles from './pages/Articles';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import { Router } from '@reach/router';
import Article from './pages/Article';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <div className="App">
      <Header />

      <Router>
        <Articles path="/" />
        <Articles path="/topic/:topic_id" />
        <Article path="/articles/:article_id" />
        <ErrorPage default status="404" msg="Page not found" />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
