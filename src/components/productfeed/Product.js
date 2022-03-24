import React, { useState } from "react";
import "./Product.css";
import StarIcon from "@mui/icons-material/Star";

const MAX__RATING = 5;
const MIN__RATING = 1;
function Product({ title, price, description, category, image }) {
  const [rating] = useState(
    Math.floor(Math.random() * (MAX__RATING - MIN__RATING)) + MIN__RATING
  );
  return (
    <div className="product">
      <small className="category">{category}</small>
      <img src={image} alt={title} />
      <h4>{title}</h4>
      <div>
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon
              className="star__rating"
              style={{ height: "20px" }}
              key={i}
            />
          ))}
      </div>
      <p className="product_description">
        {description.length < 100
          ? `${description}`
          : `${description.substring(0, 150)}...`}
      </p>
      <p className="product_price">${price}</p>
      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
