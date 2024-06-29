import React, { useState } from 'react';
import './Shop.css';
import fakeData from '../../fakeData/products.json'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);

    const [cart, setCart] = useState([]);


    // addToCart functionality

    const handleButton = (product) => {
        const newCart = [...cart, product]
        setCart(newCart)
    }


    return (
      <div className="shop-container mt-5 container mx-auto">
        <div className="product-container">
          {products.map((product) => (
            <Product
              handleButton={handleButton}
              product={product}
              key={product.id}
            ></Product>
          ))}
        </div>

        <div className="cart-container">
                <Cart cart={ cart} />
        </div>
      </div>
    );
};

export default Shop;