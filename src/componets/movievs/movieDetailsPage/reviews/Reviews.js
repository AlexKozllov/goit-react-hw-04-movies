import React, { useEffect, useState } from "react";
import { getMovieReviews } from "../../../../services/getData";

const Reviews = ({ match }) => {
  const [reviewsItems, setReviewsItems] = useState([]);

  useEffect(() => {
    getMovieReviews(match.params.moviesId).then((data) =>
      setReviewsItems([...data])
    );
  }, []);

  return <h2>Reviews</h2>;
};

export default Reviews;
