import React from 'react';
import { useSelector } from 'react-redux';
import { selectProducts } from '../store/productsSlice';

const ProductCatalog = () => {
  const products = useSelector(selectProducts); 

  if (!products) return <p>No products available</p>;

  return (
    <div>
      <h2>Product Catalog</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductCatalog;
