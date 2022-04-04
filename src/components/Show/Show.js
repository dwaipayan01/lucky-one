import React from 'react';
import "./Show.css"

const Show = (props) => {
    const { name, id, picture, price } = props.item;
    return (
        <div>
            <div className='Show-details'>
                <img src={picture} alt="" />
                <h4>{name}</h4>

            </div>


        </div>


    );
};

export default Show;