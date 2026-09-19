import StarRating from "./StarRating.jsx";
import PriceTag from "./PriceTag.jsx";

const ProductCard = ({
  image,
  name,
  price,
  rating,
  inStock,
}) => {
  return (
    <div className="product-card">

      {/* Product image section */}
      <div className="product-image-container">

        <img
          src={image}
          alt={name}
          className={`product-image ${
            !inStock ? "out-of-stock-image" : ""
          }`}
        />

        {/* Show badge only when item is unavailable */}
        {!inStock && (
          <span className="stock-badge">
            Out of Stock
          </span>
        )}
      </div>

      {/* Product information */}
      <div className="product-details">
        <h3>{name}</h3>

        <PriceTag price={price} />

        <StarRating rating={rating} />

        {/* Button changes based on stock */}
        <button
          className="cart-button"
          disabled={!inStock}
        >
          {inStock ? "Add to Cart" : "Unavailable"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;