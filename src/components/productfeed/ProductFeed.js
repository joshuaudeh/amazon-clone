import React, { useEffect, useState } from "react";
import Product from "./Product";
import "./ProductFeed.css";

function ProductFeed() {
  const [results, setResults] = useState([]);
  const fetchData = async () => {
    const data = await fetch("https://fakestoreapi.com/products", {
      method: "GET",
      "access-control-allow-origin": "*",
    });
    const response = await data.json();
    setResults(response);
    console.log(response);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="productFeed">
      {results.map((result) => (
        <Product key={result.id} {...result} />
      ))}
    </div>
  );
}

export default ProductFeed;
