import React from "react";
import PropTypes from "prop-types";

function Review(props) {
  return (
    <>
    <div className="review">
      <h3>{props.rating}</h3>
      <h3>{props.review}</h3>
      <h3>{props.postTime}</h3>
    </div>  
    <hr />
    </>
  )
}

Review.propTypes = {
  rating: PropTypes.number.isRequired,
  review: PropTypes.string
}

export default Review;