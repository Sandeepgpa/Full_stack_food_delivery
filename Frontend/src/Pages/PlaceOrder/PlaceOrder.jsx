import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => {

  const {getTotalCartAmount} = useContext(StoreContext);

  return (
    <form className='place-order'>
      <div className="plac-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-filds">
          <input type="text" placeholder='first Name' />
          <input type="text" placeholder='Last Name' />
        </div>
        <input type="text" placeholder='Email address' />
        <input type="text" placeholder='Street' />
        <div className="multi-filds">
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State' />
        </div>
        <div className="multi-filds">
          <input type="text" placeholder='Pin Code' />
          <input type="text" placeholder='Country' />
        </div>
        <input type="text" placeholder='Phone' />
      </div>

      <div className="place-order-right">
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
              <p>₹{getTotalCartAmount()===0?0:45}</p>
            </div>
            <hr />
            <div className="cart-totle-detials">
              <b>Total</b>
              <b>₹{getTotalCartAmount()===0?0:getTotalCartAmount() + 45}</b>
            </div>
          </div>
          <button>PROCEED TO PAYMENT</button>
        </div>

      </div>

    </form>
  )
}

export default PlaceOrder