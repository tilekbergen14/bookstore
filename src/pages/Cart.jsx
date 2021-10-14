import React, { useContext } from "react";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Context from "../Context";

export default function FolderList() {
  const context = useContext(Context);
  const { bookIds, books } = context;
  const addedBooks = bookIds.map((id) => {
    const book = books.find((book) => book.id === id);
    return book;
  });
  let totalSum = 0;
  addedBooks.map((book) => (totalSum += parseFloat(book.price)));

  return bookIds.length === 0 ? (
    <h4 className="title">
      There is no books selected! Please select books on homepage!
    </h4>
  ) : (
    <List className="list" sx={{ width: "100%", display: "flex" }}>
      <div style={{ flex: 1 }}>
        {addedBooks.map((book) => {
          return (
            <div className="cart" key={book.id}>
              <img className="icon-image" src={book.img} alt={book.title} />
              <div className="item-info flex">
                <div style={{ flex: "1" }}>
                  <h4 className="title">{book.title}</h4>
                  <p className="description">{book.description}</p>
                </div>
                <h4 className="price">
                  {book.price}
                  <span className="tenge-sign"> tenge</span>
                </h4>
              </div>
            </div>
          );
        })}
      </div>
      <div className="total">
        <h4 className="title">About orders</h4>
        <Divider />
        <h5>
          Total items: <strong>{bookIds.length}</strong>
        </h5>
        <h5>
          Total sum: <strong>{totalSum} tenge</strong>
        </h5>
      </div>
    </List>
  );
}
