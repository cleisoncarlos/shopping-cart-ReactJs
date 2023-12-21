import React from "react";
import "./Header.css";
import SearchBar from "../SearchBar";
import ButtomCart from "../ButtomCart";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div>
          <SearchBar />
        </div>

        <div>
          <ButtomCart />
        </div>
      </div>
    </header>
  );
}
