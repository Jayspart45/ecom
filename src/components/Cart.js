import React, { useState } from "react";
import data from "../json/Products";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(product) {
    const index = cartItems.findIndex((item) => item.id === product.id);
    if (index === -1) {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    } else {
      const newCartItems = [...cartItems];
      newCartItems[index].quantity += 1;
      setCartItems(newCartItems);
    }
  }

  function removeFromCart(product) {
    const index = cartItems.findIndex((item) => item.id === product.id);
    if (index !== -1) {
      const newCartItems = [...cartItems];
      newCartItems[index].quantity -= 1;
      if (newCartItems[index].quantity === 0) {
        newCartItems.splice(index, 1);
      }
      setCartItems(newCartItems);
    }
  }

  return (
    <div >
      <div className="products">
      <h1 className="text-center display-4">Shopping Cart</h1>

        <div className="row px-5">
         
            {data.map((product) => (
               <div key={product.id} className="col-12 col-sm-4 col-xxl-2 col-xl-3 col">
              <div  className="card mt-2">
                <img className="card-img-top" src={product.image} alt={product.name} />
                <h3 className="display-6" >{product.name}</h3>
                <p >${product.price.toFixed(2)}</p>
                <button className="btn " onClick={() => addToCart(product)}>Add to Cart</button>
              </div>
          </div>

            ))}
        </div>
      </div>
      <div className="cart mx-5">
        <h2 className="display-4">Cart</h2>
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price.toFixed(2)} x {item.quantity}
              <button onClick={() => removeFromCart(item)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Cart;
