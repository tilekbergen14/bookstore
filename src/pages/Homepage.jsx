import React from "react";
import Card from "../components/Card";
import books from "../books";
export default function Homepage() {
  return (
    <>
      {books.map((book) => {
        return <Card key={book.id} book={book} />;
      })}
    </>
  );
}
