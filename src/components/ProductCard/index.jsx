import React, { useContext } from "react";
import propTypes from "prop-types";
import "./Productcard.css";
import formatMoney from "../../utils/formatMoney";
import AppContext from "../../context/AppContext";

ProductCard.propTypes = {
  data: propTypes.shape({}),
}.isRequired;

export default function ProductCard({ data }) {
  const { title, thumbnail, price } = data;

  const { cartItens, setCartItens } = useContext(AppContext);

  const handleAddCart = () => {
    setCartItens([...cartItens, data]);
  };

  return (
    <div className="card">
      <img
        src={thumbnail.replace(/\w\.jpg/gi, "W.jpg")}
        alt={title}
        className="img-fluid"
        loading="lazy"
      />

      <div className="card-info">
        <p>{title}</p>
        <p>{formatMoney(price)}</p>
        <button onClick={handleAddCart}>Add +</button>
      </div>
    </div>
  );
}
