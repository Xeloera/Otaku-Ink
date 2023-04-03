import React from 'react';
import '../styles.css';

const Header = () => {
    return (
        <header>
            <nav>
                <a href="/">Home</a>
                <a href="/products">Products</a>
                <a href="/cart">Cart</a>
                <a href="/account">Account</a>
            </nav>
        </header>
    );
};

export default Header;
