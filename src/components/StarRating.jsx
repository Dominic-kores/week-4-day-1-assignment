import { useState } from "react";

const StarRating = ({ rating = 0, maxStars = 5 }) => {
  // Store the selected rating
  const [currentRating, setCurrentRating] = useState(rating);

  // Store the temporary hover rating
  const [hoverRating, setHoverRating] = useState(0);

  // Show hover value if hovering,
  // otherwise show selected rating
  const displayRating = hoverRating || currentRating;

  return (
    <div className="star-rating">
      {Array.from({ length: maxStars }, (_, index) => {
        const starValue = index + 1;

        return (
          <span
            key={starValue}
            className="star"
            onClick={() => setCurrentRating(starValue)}
            onMouseEnter={() => setHoverRating(starValue)}
            onMouseLeave={() => setHoverRating(0)}
          >
            {starValue <= displayRating ? "★" : "☆"}
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;