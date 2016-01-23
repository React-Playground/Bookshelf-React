export function selectBook(book) {
  //selected book is an ActionCreator it need to return an action,
  //an object wit a type property.
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}


