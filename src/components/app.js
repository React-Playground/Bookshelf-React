import React from 'react';
import { Component } from 'react';

import BookList from '../containers/books-list.js';
import BookDetail from '../containers/book-detail.js';



export default class App extends Component {
  render() {
    return (
      <div className="">
        <BookList />
        <BookDetail />
      </div>
    );
  }
}
