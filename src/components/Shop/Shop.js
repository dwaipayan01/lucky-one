import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Show from '../Show/Show';
import "./Shop.css";

const Shop = () => {
    const [shoes, SetShoes] = useState([]);
    const [cart, SetCart] = useState([]);
    useEffect(() => {
        fetch("data.json")
            .then(response => response.json())
            .then(data => SetShoes(data));
    }, []);
    const addToCart = (shoe) => {
        // console.log(shoe)
        const newCart = [...cart, shoe];
        SetCart(newCart);
        console.log(newCart);


    }

    return (
        <div className='cart'>
            <div className="cart-details">
                {
                    shoes.map(shoe => <Product shoe={shoe} addToCart={addToCart}></Product>)
                }
            </div>
            <div className="cart-section">
                <h2>Selected shoe</h2>
                {
                    cart.map(item => <Show item={item}></Show>)
                }

                <button className='btn-1'>Choose 1 for me</button>
                <button className='btn-2'>Choose again</button>



            </div>
        </div>
    );
};

export default Shop;