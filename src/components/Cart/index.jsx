import React, { useContext } from "react";
import "./Cart.css";
import CartItem from "../CartItem";
import AppContext from "../../context/AppContext";
import formatMoney from "../../utils/formatMoney";

export default function Cart() {
  const { cartItens, isCartVisible } = useContext(AppContext);

  const totalPrice = cartItens.reduce((acc, item) => {
    return item.price + acc;
  }, 0);

  // formata objeto para enviar para whatsapp
  let whatsapp = cartItens.map((item) => {
    return {
      title: item.title,
      price: item.price,
    };
  });

  //formata a mensagem
  let mensagem = "";
  for (let i = 0; i < whatsapp.length; i++) {
    let item = whatsapp[i];
    mensagem += `* Produto: ${item.title}, Preço: ${item.price}%0A`;
    if (i !== whatsapp.length - 1) {
      mensagem += "\n"; // Quebra de linha entre os objetos
    }
  }

  return (
    <div className={`cart ${isCartVisible ? "cart-active" : ""} `}>
      <div className="cart-itens">
        {cartItens.map((cartItem) => (
          <CartItem key={cartItem.id} data={cartItem} />
        ))}
      </div>

      <div className="cart-resumo">
        <a
          href={`https://wa.me//5591984784454?text=${mensagem} Valor Total: ${formatMoney(
            totalPrice
          )} `}
        >
          ENVIAR DADOS PARA O WHATSAPP
        </a>

        <p>Resumo do carrinho:</p>
        <h2>{formatMoney(totalPrice)}</h2>
      </div>
    </div>
  );
}
