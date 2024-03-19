import React from 'react';
import { Link } from 'react-router-dom';

const ProductList = ({ products, addToCart }) => {
  return (
    <div>
      <h2>Products</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product">
            <div>
              <h3>{product.name}</h3>
              <p>Price: ${product.price}</p>
              <Link to={`/product/${product.id}`} className="details-link">Details</Link>
            </div>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;

