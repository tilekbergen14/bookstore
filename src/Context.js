import React, { useState } from "react";
import books from "./books";

const BookStoreContext = React.createContext();

export const ContextProvider = (props) => {
  const [bookIds, setBookIds] = useState([]);
  const addToCard = (id) => {
    if (bookIds.includes(id)) {
      setBookIds(bookIds.filter((book) => book !== id));
    } else {
      setBookIds([...bookIds, id]);
    }
  };
  const children = props.children;
  const pathname = props.location && props.location.pathname;
  return (
    <BookStoreContext.Provider value={{ books, bookIds, pathname, addToCard }}>
      {children}
    </BookStoreContext.Provider>
  );
};

export default BookStoreContext;
