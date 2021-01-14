import React, { useEffect, useState } from "react";
import { getMovieDetails } from "../../../services/getData";

const MovieDetailsPage = ({ match, history }) => {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    getMovieDetails(match.params.moviesId).then((data) =>
      setDetails({ ...data })
    );
  }, []);

  const hendleGoBeak = () => {
    history.push("/");
  };

  return (
    <div>
      <button type="button" onClick={hendleGoBeak}>
        Go beak
      </button>
      <div>
        <img
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
    </div>
  );
};

export default MovieDetailsPage;
