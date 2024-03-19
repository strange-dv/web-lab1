import React, { useState } from 'react';
import './App.css';
import ProductList from './components/ProductList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductPage from './components/ProductPage';
import ShoppingCart from './components/ShoppingCart';
import Header from './components/Header';
import Footer from './components/Footer';

const productsData = [
  { id: 1, name: 'Product 1', price: 10, description: 'This is a product.' },
  { id: 2, name: 'Product 2', price: 20, description: 'This is a product.' },
  { id: 3, name: 'Product 3', price: 30, description: 'This is a product.' },
  { id: 4, name: 'Product 4', price: 40, description: 'This is a product.' },
  { id: 5, name: 'Product 5', price: 50, description: 'This is a product.' },
  { id: 6, name: 'Product 6', price: 60, description: 'This is a product.' },
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
    <Router>
      <div className="container">
        <Header cartItems = {cartItems} />
        <Routes>
          <Route exact path="/" element = {<ProductList products={productsData} addToCart={addToCart} />} />
          <Route exact path="/cart" element = {<ShoppingCart cartItems={cartItems} removeFromCart={removeFromCart} />} />
          <Route path="/product/:id" element = {<ProductPage products={productsData} addToCart={addToCart} />} /> 
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
