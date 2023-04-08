import React from "react";

const Product = (props) => {
  const { name, picture, price, category } = props.product;
  console.log(props);
  return (
    <div className="bg-slate-50 p-6 rounded-lg drop-shadow-lg">
      <img className="rounded-lg drop-shadow-lg" src={picture} alt="" />

      <div className="flex flex-col">
        <div className="my-4 pl-2 space-y-1">
          <h3 className="text-2xl font-bold">{name}</h3>
          <p className="font-semibold">Category: {category}</p>
          <p className="text-xl font-semibold">Price: ${price}</p>
        </div>
        <div className="mt-auto">
          <button className=" bg-sky-300 hover:bg-sky-400 w-full text-xl font-semibold p-2 rounded-lg transition duration-300">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
