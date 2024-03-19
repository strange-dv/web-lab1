import React from 'react';
import { useParams } from 'react-router-dom';

const ProductPage = ({ products, addToCart }) => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      <p>Description: {product.description}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductPage;
