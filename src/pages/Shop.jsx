import React from "react";
import useFetch from "../customs/useFetch";
import Product from "../components/Product";
const Shop = () => {
  const { data } = useFetch("https://dummyjson.com/products");
  // data && console.log(data);
  return (
    <div className="flex justify-center w-[90%] p-4 mx-auto">
      <div className="flex flex-wrap gap-6 w-[80%] ">
        {data &&
          data.products.map((product) => {
            return <Product product={product} key={product.id} />;
          })}
      </div>
    </div>
  );
};

export default Shop;
