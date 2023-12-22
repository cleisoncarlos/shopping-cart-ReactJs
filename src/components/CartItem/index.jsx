import React, { useContext } from "react";
import "./CartItem.css";
import { BsCartDash } from "react-icons/bs";
import formatMoney from "../../utils/formatMoney";
import AppContext from "../../context/AppContext";

export default function CartItem({ data }) {
  const { cartItens, setCartItens } = useContext(AppContext);
  const { id, thumbnail, title, price } = data;

  const handleRemoveItem = () => {
    const updateItens = cartItens.filter((item) => item.id != id);
    setCartItens(updateItens);
  };

  return (
    <div className="cart-item">
      <div>
        <img src={thumbnail} alt={title} className="cart-item-product" />
      </div>

      <div className="cart-item-content">
        <p>{title}</p>
        <p>{formatMoney(price)}</p>

        <button
          type="button"
          className="cart-button"
          onClick={handleRemoveItem}
        >
          <BsCartDash /> REMOVER
        </button>
      </div>
    </div>
  );
}
