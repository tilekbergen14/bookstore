import React, { useState } from "react";
import booksData from "./books";

const BookStoreContext = React.createContext();

export const ContextProvider = (props) => {
  const [bookIds, setBookIds] = useState([]);
  const [books, setBooks] = useState(booksData);
  const addToCard = (id) => {
    if (bookIds.includes(id)) {
      setBookIds(bookIds.filter((book) => book !== id));
    } else {
      setBookIds([...bookIds, id]);
    }
  };
  const children = props.children;
  const pathname = props.location && props.location.pathname;
  const onSearch = (e) => {
    const searchResults = booksData.filter((book) =>
      book.title.toLowerCase().includes(e)
    );
    setBooks(searchResults);
  };
  return (
    <BookStoreContext.Provider
      value={{ books, bookIds, pathname, addToCard, onSearch }}
    >
      {children}
    </BookStoreContext.Provider>
  );
};

export default BookStoreContext;
