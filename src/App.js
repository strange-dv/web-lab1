import React, { useState } from 'react';
import './App.css';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';
import Header from './components/Header';
import Footer from './components/Footer';

const productsData = [
  { id: 1, name: 'Product 1', price: 10 },
  { id: 2, name: 'Product 2', price: 20 },
  { id: 3, name: 'Product 3', price: 30 },
];

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    let cartItem = cartItems.find((item) => item.id === product.id);
    if (cartItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : item
        )
      );
      return;
    }
    setCartItems([...cartItems, { ...product, quantity: 1 }]);
  };

  const removeFromCart = (productToRemove) => {
    let cartItem = cartItems.find((item) => item.id === productToRemove.id);
    if (cartItem.quantity > 1) {
      setCartItems(
        cartItems.map((item) =>
          item.id === productToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : item
        )
      );
      return;
    }
    setCartItems(cartItems.filter((item) => item.id !== productToRemove.id));
  };

  return (
    <div>
      <Header />
      <ProductList products={productsData} addToCart={addToCart} />
      <ShoppingCart cartItems={cartItems} removeFromCart={removeFromCart} />
      <Footer />
    </div>
  );
};

export default App;
