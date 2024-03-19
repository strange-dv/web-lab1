import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ cartItems }) => {
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
  return (
    <div className="header">
      <h1>Online Store</h1>
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/">All Products</Link>
          </li>
          <li>
            <Link to="/cart">Cart [{totalQuantity}]</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
