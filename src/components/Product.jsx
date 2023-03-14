import React, {useState} from "react";
import { CartContext } from "../context/Context";

const Product = ({ product }) => {
  const {state, dispatch} = CartContext();
  const [cartItem, setToCartItem] = useState([])

  const handleAddToCart=(prod)=>{
    dispatch({
      type: 'addToCart',
      payload: prod,
    })
    
  }
  return (
    <div className="flex justify-center ">
      <div className="flex flex-col items-center justify-evenly border border-gray-500 w-[300px] 
      h-[300px] p-2 shadow-black shadow-md rounded-md ">
        <div className="text-xl">{product.title}</div>
        <div className="border border-gray-400 hover:rounded-md ">
          <img
            src={product.thumbnail}
            alt=""
            className="w-[200px] h-[180px]  hover:scale-90 "
          />
        </div>

        <div className="border border-gray-200 flex justify-around items-center w-full ">
          <p>${product.price}</p>
          <button className="text-lg cursor-pointer hover:scale-90 "  
          onClick={()=>handleAddToCart(product)} >
            addToCart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
