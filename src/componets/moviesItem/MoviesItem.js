import React from "react";
import { Link } from "react-router-dom";

const MoviesItem = ({ itemData, location }) => {
  return (
    <li>
      <Link
        to={{ pathname: `movies/${itemData.id}`, state: { from: location } }}
      >
        {itemData.original_title}
      </Link>
    </li>
  );
};

export default MoviesItem;
