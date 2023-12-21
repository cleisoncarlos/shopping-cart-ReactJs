import React, { useContext } from "react";
import "./Cart.css";
import CartItem from "../CartItem";
import AppContext from "../../context/AppContext";
import formatMoney from "../../utils/formatMoney";

export default function Cart() {
  const { cartItens } = useContext(AppContext);

  const totalPrice = cartItens.reduce((acc, item) => {
    return item.price + acc;
  }, 0);

  return (
    <div className="cart">
      <div className="cart-itens">
        {cartItens.map((cartItem) => (
          <CartItem key={cartItem.id} data={cartItem} />
        ))}
      </div>
      <div className="cart-resumo">
        <p>Resumo do carrinho:</p>
        <h2>{formatMoney(totalPrice)}</h2>
      </div>
    </div>
  );
}
