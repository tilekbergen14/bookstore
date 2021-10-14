import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Context from "../Context";

export default function MediaCard({ book }) {
  const { addToCard, bookIds } = useContext(Context);
  const bookExists = bookIds.includes(book.id);
  return (
    <Card
      sx={{ maxWidth: 345, marginRight: 1, marginLeft: 1, marginBottom: 4 }}
    >
      <CardMedia
        component="img"
        height="250"
        image={book.img}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {book.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {book.description}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button variant="contained" color="warning" size="small">
          {book.price}T
        </Button>
        <Button
          onClick={() => addToCard(book.id)}
          variant="contained"
          color={bookExists ? "success" : "info"}
          size="small"
        >
          {bookExists ? "Remove from card" : "Add to card"}
        </Button>
      </CardActions>
    </Card>
  );
}
