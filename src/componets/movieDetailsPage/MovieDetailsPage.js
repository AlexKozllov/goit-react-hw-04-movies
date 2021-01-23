import React, { lazy, Suspense, useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import { Link, Route, Switch } from "react-router-dom";
import { getMovieDetails } from "../../services/getData";
import { mainRoutes } from "../routes/mainRoutes";

import { DetailsPage } from "./styleMoviesDetailsPage";

const MovieDetailsPage = ({ match, history, location }) => {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    getMovieDetails(match.params.moviesId).then((data) =>
      setDetails({ ...data })
    );
  }, []);

  const hendleGoBeak = () => {
    const { state } = location;
    state && state.from && history.push(state.from);
    !state && history.push(mainRoutes.movies);
  };

  return (
    <DetailsPage>
      <button type="button" onClick={hendleGoBeak}>
        Go beak
      </button>
      <div>
        <img
          className="movieImg"
          src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`}
          alt={details.original_title}
        />
        <h3>{details.original_title}</h3>
        <p>
          UserScore
          <span> {details.popularity * 100}</span>%
        </p>
        <h4>Overview</h4>
        <p>{details.overview}</p>
        <h4>Genres</h4>
        <ul>
          {details.genres &&
            details.genres.map((item) => <li key={item.id}>{item.name}</li>)}
        </ul>
      </div>
      <ul>
        <li>
          <Link to={`${match.url}/cast`}>Cast</Link>
        </li>
        <li>
          <Link to={`${match.url}/reviews`}>Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route
            path={`${match.path}/cast`}
            component={lazy(() => import("../cast/Cast"))}
          />
          <Route
            path={`${match.path}/reviews`}
            component={lazy(() => import("../reviews/Reviews.js"))}
          />
        </Switch>
      </Suspense>
    </DetailsPage>
  );
};

export default MovieDetailsPage;
