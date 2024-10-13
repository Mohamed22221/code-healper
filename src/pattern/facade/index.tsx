import React from 'react';
import useShopFacade from './ShopFacade';

const Shop: React.FC = () => {
  const { addItemToCart, checkout , total } = useShopFacade();

  return (
<div className="p-6 bg-gray-100 rounded-lg shadow-lg text-center">
  <h1 className="text-2xl font-bold mb-6">Online Shop</h1>

  <button 
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2"
    onClick={() => addItemToCart('product1', 2)}
  >
    Add 2 of Product 1 to Cart
  </button>

  <button 
    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded m-2"
    onClick={() => addItemToCart('product2', 1)}
  >
    Add 1 of Product 2 to Cart
  </button>

  <button 
    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-2"
    onClick={checkout}
  >
    Checkout
  </button>

  <p>Total: {total}</p>
</div>
  );
};

export default Shop;