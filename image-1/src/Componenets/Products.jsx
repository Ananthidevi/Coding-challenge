import React, { useState, useEffect } from 'react';

function Products() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('Electronics');

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  const filteredProducts = products.filter(product => product.category === category);

  return (
    <div>
      <h2>Products in {category}</h2>
      <ul>
        {filteredProducts.map(Product => (
          <li key={Product.id}>
            {Product.name} - ${Product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Products