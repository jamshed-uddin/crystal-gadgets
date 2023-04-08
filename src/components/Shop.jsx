import React from "react";
import { useLoaderData } from "react-router-dom";
import Product from "./Product";

const Shop = () => {
  const products = useLoaderData();
  console.log(products);
  return (
    <div className="grid gap-14 p-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <Product key={product.id} product={product}></Product>
      ))}
    </div>
  );
};

export default Shop;
