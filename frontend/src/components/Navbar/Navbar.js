import React from "react";
import { Stack, Button } from "@mui/material";
import { Link } from "react-router-dom";

import "./Navbar.scss";

function Navbar() {
  const [isLoggedIn, setisLoggedIn] = React.useState(false);
  return (
    <Stack direction="row" className="navbar" justifyContent="space-between">
      <img src="/menon-logo.png" alt="logo" />
      <Stack direction="row" spacing={2} alignItems="center">
        <Link to="dashboard">Dashboard</Link>
        <Link to="orders">Orders</Link>
        <Link to="customers">Customers</Link>
        <Link to="products">Products</Link>
        <Link to="reports">Reports</Link>
        <Button>
          {isLoggedIn ? (
            <Link to="Logout">Logout</Link>
          ) : (
            <Link to="Logout">Sign in</Link>
          )}
        </Button>
      </Stack>
    </Stack>
  );
}

export default Navbar;
