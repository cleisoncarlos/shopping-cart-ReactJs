import React from 'react'
import './Buttomcart.css'
import { FaShoppingCart } from "react-icons/fa";

export default function ButtomCart() {
  return (
    <>
    
    <button>
    <FaShoppingCart />
    <span className='cart-status'>10</span>
        
        </button></>
  )
}
