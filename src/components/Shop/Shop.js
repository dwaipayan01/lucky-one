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



    }
    const showRandom = () => {
        const arry = [...cart];
        console.log(arry);
        const random = Math.floor(Math.random() * arry.length) + 1;

        let arr = [arry[random]];
        SetCart(arr);

    }
    const deleteItem = () => {
        const previousArry = [...cart];
        previousArry.splice(0, previousArry.length);
        SetCart(previousArry);
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

                <button onClick={showRandom} className='btn-1'>Choose 1 for me</button>
                <button onClick={deleteItem} className='btn-2'>Choose again</button>



            </div>
        </div>
    );
};

export default Shop;