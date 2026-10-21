import React from 'react';
import { CartProvider,useCart } from 'react-use-cart';

function Cart() {
    const {items,updateItemquantity,removeItem,totalItems,totalUniqueItems,cartTotal,emptyCart,isEmpty} = useCart();
  return (
    <div></div>
  )
}

function AllCart() {
  return (
    <CartProvider>
      
      <Cart/>
    </CartProvider>
  )
}

export default AllCart