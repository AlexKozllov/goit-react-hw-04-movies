import React, { useEffect, useState } from "react";
import { getMovieCredits } from "../../../../services/getData";
import { CastItems } from "./styleCast";

const Cast = ({ match }) => {
  // console.log("props", props);
  const [casts, setCasts] = useState([]);
  useEffect(() => {
    getMovieCredits(match.params.moviesId).then((data) => setCasts([...data]));
  }, []);
  // console.log(casts);
  return (
    <CastItems>
      {casts &&
        casts.map((item) => (
          <li key={item.id}>
            <h4>{item.name}</h4>
            <img
              className="castPhoto"
              src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`}
            />
            <p>{item.character}</p>
          </li>
        ))}
    </CastItems>
  );
};

export default Cast;
// setCasts([...data]
