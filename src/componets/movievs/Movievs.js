import React, { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import { searchMovies } from "../../services/getData";
import getQueryParams from "../../utils/getQueryParams";
import MoviesItem from "../moviesItem/MoviesItem";

import SearchBox from "../searchBox/SearchBox";

const Movievs = ({ history, location }) => {
  const [Movies, setMovies] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const queryParams = getQueryParams(location.search);
    if (queryParams.query) {
      setIsLoading(true);
      searchMovies(queryParams.query)
        .then((data) => setMovies(data))
        .finally(() => setIsLoading(false));
    }
  }, [location.search]);

  const hendleChangeQuery = (query) => {
    history.push({
      ...location,
      search: `query=${query}`,
    });
  };

  return (
    <div>
      <h2>Movievs</h2>
      <SearchBox onSubmit={hendleChangeQuery} />
      {isLoading && <Loader />}
      <ul>
        {Movies &&
          Movies.map((item) => (
            <MoviesItem key={item.id} itemData={item} location={location} />
          ))}
      </ul>
    </div>
  );
};

export default Movievs;
