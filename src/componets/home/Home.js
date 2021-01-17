import React, { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import { getTrending } from "../../services/getData";
import MoviesItem from "../moviesItem/MoviesItem";

const Home = ({ location }) => {
  const [tranging, setTranging] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getTrending()
      .then((data) => setTranging([...data]))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      <h2>Home</h2>
      {isLoading && <Loader />}
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
