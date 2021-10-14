import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Context from "../Context";

export default function Navbar() {
  const context = useContext(Context);
  const pathname = context.pathname;
  const bookCount = context.bookIds.length;
  return (
    <Box sx={{ flexGrow: 1, marginBottom: 8 }}>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Tilekbergen's Manga Shop
          </Typography>
          <Link to={pathname === "/card" ? "/" : "/card"}>
            <Button
              size="large"
              edge="start"
              variant="contained"
              color="warning"
              aria-label="menu"
              sx={{ mr: 2 }}
              endIcon={
                pathname !== "/card" && (
                  <div className="center">
                    <ShoppingCartIcon />
                    <span className="card-counter-small">{bookCount}</span>
                  </div>
                )
              }
            >
              {pathname === "/card" ? "Back" : "Card"}
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
