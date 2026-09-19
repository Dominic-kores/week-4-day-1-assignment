const PriceTag = ({
  price,
  currency = "KES",
  discount = 0,
}) => {
  // Format a number with commas
  const formatPrice = (amount) => {
    return amount.toLocaleString();
  };

  // If there is a discount
  if (discount > 0) {
    const discountedPrice = Math.round(
      price - (price * discount) / 100
    );

    return (
      <div className="price-tag">
        <span className="discounted-price">
          {currency} {formatPrice(discountedPrice)}
        </span>

        <span className="original-price">
          {currency} {formatPrice(price)}
        </span>

        <span className="discount">
          (-{discount}%)
        </span>
      </div>
    );
  }

  // Normal price
  return (
    <div className="price-tag">
      <span className="normal-price">
        {currency} {formatPrice(price)}
      </span>
    </div>
  );
};

export default PriceTag;