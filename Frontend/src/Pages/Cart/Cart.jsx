import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from "react-router-dom";

const Cart = () => {

  const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Totle</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((itme, index) => {
          if (cartItems[itme._id] > 0) {
            return (
              <>
                <div className="cart-items-title cart-items-item">
                  <img src={itme.image} alt="" />
                  <p>{itme.name}</p>
                  <p>₹{itme.price}</p>
                  <p>{cartItems[itme._id]}</p>
                  <p>₹{itme.price * cartItems[itme._id]}</p>
                  <p onClick={() => removeFromCart(itme._id)} className='cross'>x</p>
                </div>
                <hr />
              </>


            )
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totle</h2>
          <div>
            <div className="cart-totle-detials">
              <p>Subtotal</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-totle-detials">
              <p>Delivery fee</p>
              <p>₹{getTotalCartAmount() === 0?0:45}</p>
            </div>
            <hr />
            <div className="cart-totle-detials">
              <b>Total</b>
              <b>₹{getTotalCartAmount()===0?0:getTotalCartAmount() + 45}</b>
            </div>
          </div>
          <button onClick={() => navigate("/order")}>PROCEED TO CHECKOUT</button>
        </div>
      </div>
    </div>
  )
}

export default Cart