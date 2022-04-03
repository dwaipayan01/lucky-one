import React from 'react';

const Product = (props) => {
    const { name, id, picture, price } = props.shoe
    return (
        <div>

            <img src={picture} alt="" />


        </div>
    );
};

export default Product;