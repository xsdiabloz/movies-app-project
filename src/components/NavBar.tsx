import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-slate-900 text-white border-b border-gray-700">
      <div className="text-2xl font-bold">
        <Link to="/">Movie App</Link>
      </div>
      <div className="flex gap-6 text-lg">
        <Link className="hover:text-blue-400 transition" to="/">
          Home
        </Link>
        <Link className="hover:text-blue-400 transition" to="/favorite">
          Favorite Movies
        </Link>
      </div>
    </nav>
  );
}
