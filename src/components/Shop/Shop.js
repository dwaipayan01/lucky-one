import React from 'react';

const Shop = (props) => {
    const { name, id, picture, price } = props.shoe;
    return (
        <div>
            <h1>name : {name}</h1>
        </div>
    );
};

export default Shop;