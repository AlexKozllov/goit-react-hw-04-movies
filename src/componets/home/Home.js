import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  getMovieCredits,
  getMovieDetails,
  getTrending,
  searchMovies,
  getMovieReviews,
} from "../../services/getData";

const Home = ({ match }) => {
  const [tranging, setTranging] = useState([]);

  useEffect(() => {
    getTrending()
      .then((data) => setTranging([...data]))
      .catch((error) => console.log(error));
  }, []);
  console.log("match", match);

  return (
    <>
      <h2>Home</h2>
      <ul>
        {tranging &&
          tranging.map((item) => (
            <li key={item.id}>
              <Link to={`movies/${item.id}`}>{item.original_title}</Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Home;
