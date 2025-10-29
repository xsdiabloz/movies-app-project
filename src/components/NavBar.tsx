import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <div>
        <Link to="/">Movie App</Link>
      </div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/favorite">Favorite Movies</Link>
      </div>
    </nav>
  );
}
