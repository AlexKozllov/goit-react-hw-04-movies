import React, { useEffect, useState } from "react";
import { getMovieReviews } from "../../services/getData";

const Reviews = ({ match }) => {
  const [reviewsItems, setReviewsItems] = useState([]);

  useEffect(() => {
    getMovieReviews(match.params.moviesId).then((data) =>
      setReviewsItems([...data])
    );
  }, []);

  return (
    <ul>
      {reviewsItems.length !== 0 ? (
        reviewsItems.map((item) => (
          <li>
            <h4>{item.author}</h4>
            <p>{item.content}</p>
          </li>
        ))
      ) : (
        <p>We don`t have anyrevuews for this movie.</p>
      )}
    </ul>
  );
};

export default Reviews;
