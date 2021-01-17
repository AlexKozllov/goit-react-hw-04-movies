import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTrending } from "../../services/getData";
import MoviesItem from "../moviesItem/MoviesItem";

const Home = ({ match, location }) => {
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
            <MoviesItem key={item.id} itemData={item} location={location} />
          ))}
      </ul>
    </>
  );
};

export default Home;
