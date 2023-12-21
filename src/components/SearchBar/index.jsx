import React, { useState, useContext } from "react";
import "./SearchBar.css";

import { IoSearch } from "react-icons/io5";
import fetchProducts from "../../api/fetchProducts";
import AppContext from "../../context/AppContext";

export default function SearchBar() {
  //const [products, setProducts] = useState([]);
  const { setProducts, setLoading } = useContext(AppContext);
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = async (event) => {
    event.preventDefault();
    setLoading(true);
    const products = await fetchProducts(searchValue);
    setProducts(products);
    // depois de carregar loading retorna pra falso
    setLoading(false);
    //apos consulta limpa o campo de busca
    setSearchValue("");
  };

  return (
    <>
      <form onSubmit={handleSearch}>
        <input
          value={searchValue}
          onChange={({ target }) => setSearchValue(target.value)}
          type="search"
          className="search_input"
          placeholder="Buscar produto"
          required
        />

        <button type="submit" className="search_button">
          <IoSearch />
        </button>
      </form>
    </>
  );
}
