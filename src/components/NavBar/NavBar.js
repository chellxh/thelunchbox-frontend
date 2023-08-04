import React from 'react';
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      Lunchbox
      <p>
        <Link to="/snacks">All Snaks and Dinks</Link>
      </p>
      <p>
        <Link to="/snacks/new">Add Favorite Snack To The Lunchbox</Link>
      </p>
    </div>
  );
}

export default NavBar