import React from 'react';
import "./Product.css";
import { BsFillCartFill } from 'react-icons/bs';

const Product = (props) => {
    const { name, id, picture, price } = props.shoe;
    return (
        <div className='cart-image'>
            <img src={picture} alt="" />
            <h4 className='product-name'>name :{name}</h4>
            <div className='shoe-info'>
                <p>price:${price}</p>
                <p>id:{id}</p>

            </div>
            <button onClick={() => props.addToCart(props.shoe)} className='cart-button'>
                <p>Add to cart<BsFillCartFill className='icon'></BsFillCartFill></p>
            </button>
        </div>
    );
};

export default Product;