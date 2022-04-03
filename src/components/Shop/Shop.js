import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import "./Shop.css";

const Shop = () => {
    const [shoes, SetShoes] = useState([]);
    useEffect(() => {
        fetch("data.json")
            .then(response => response.json())
            .then(data => SetShoes(data));
    }, []);

    return (
        <div className='cart'>
            <div className="cart-details">
                {
                    shoes.map(shoe => <Product shoe={shoe}></Product>)
                }
            </div>
            <div className="cart-section">
                <h2>This is cart area</h2>
            </div>
        </div>
    );
};

export default Shop;