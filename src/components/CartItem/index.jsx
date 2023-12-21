import React from "react";
import "./CartItem.css";
import { BsCartDash } from "react-icons/bs";
import formatMoney from "../../utils/formatMoney";

export default function CartItem({ data }) {
  const { id, thumbnail, title, price } = data;
  return (
    <div className="cart-item">
      <div>
        <img src={thumbnail} alt={title} className="cart-item-product" />
      </div>

      <div className="cart-item-content">
        <p>{title}</p>
        <p>{formatMoney(price)}</p>

        <button type="button" className="cart-button">
          <BsCartDash /> REMOVER
        </button>
      </div>
    </div>
  );
}
