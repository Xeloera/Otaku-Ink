import React from 'react';
import '../styles.css';

const Product = ({ imageSrc, title, price }) => {
    return (
        <div className="product">
            <img src={imageSrc} alt={title} />
            <h3>{title}</h3>
            <p>${price}</p>
        </div>
    );
};

export default Product;
