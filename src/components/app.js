import React from 'react';
import { Component } from 'react';

import BookList from '../containers/books-list.js';



export default class App extends Component {
  render() {
    return (
      <div className="">
        <BookList />
      </div>
      
    );
  }
}
