import React, { Component } from 'react';
import './App.css';
import Articles from './pages/Articles';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import { Router } from '@reach/router';
import Article from './pages/Article';
import ErrorPage from './pages/ErrorPage';
import Comments from './components/Comments';

export default class App extends Component {
  state = {
    user: ''
  };

  updateUser = (user) => {
    this.setState({ user });
  };
  render() {
    // CHECK USER
    // const { user } = this.state;
    // if (user === '') {
    //   return
    // }
    return (
      <div className="App">
        <Header user={'user'} updateUser={this.updateUser} />

        <Router>
          <Articles path="/" />
          <Article path="/articles/:article_id" />
          <Comments path="/articles/:article_id/comments" user={'user'} />
          <ErrorPage default status="404" msg="Page not found" />
        </Router>
        <Footer />
      </div>
    );
  }
}
