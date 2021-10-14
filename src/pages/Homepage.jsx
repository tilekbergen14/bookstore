import React, { useContext } from "react";
import Card from "../components/Card";
import Context from "../Context";
import SearchBar from "../components/SearchBar";

export default function Homepage() {
  const { books } = useContext(Context);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <SearchBar />
      <div style={{ width: "100%", display: "flex", flexWrap: "wrap" }}>
        {books.map((book) => {
          return <Card key={book.id} book={book} />;
        })}
      </div>
    </div>
  );
}
