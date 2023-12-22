import React, { useContext } from "react";
import "./Buttomcart.css";
import { FaShoppingCart } from "react-icons/fa";
import AppContext from "../../context/AppContext";

export default function ButtomCart() {
  const { cartItens, isCartVisible, setIsCartVisible } = useContext(AppContext);

  return (
    <>
      <button type="button" onClick={() => setIsCartVisible(!isCartVisible)}>
        <FaShoppingCart />
        {cartItens.length > 0 && (
          <span className="cart-status">{cartItens.length}</span>
        )}
      </button>
    </>
  );
}
