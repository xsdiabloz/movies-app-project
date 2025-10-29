import React from "react";
import { MdFavorite } from "react-icons/md";

export default function MovieCard() {
  function onFavoriteClick() {
    alert("click");
  }

  return (
    <div className="">
      <div>
        <img src="" alt="movie-poster" />
        <div>
          <button onClick={onFavoriteClick}>
            <MdFavorite className="cursor-pointer" />
          </button>
        </div>
      </div>
      <div>
        <h3>title</h3>
        <p>release dates</p>
      </div>
    </div>
  );
}
