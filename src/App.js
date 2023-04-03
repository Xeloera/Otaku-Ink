import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductGrid from './components/ProductGrid';
import { fetchTestMessage } from './api/testApi';

function App() {
    const [message, setMessage] = useState('');

    const testApi = async () => {
        const data = await fetchTestMessage();
        setMessage(data.message);
    };

    return (
        <div className="App">
            <Header />
            <main className="App-main">
                <h2>{message}</h2>
                <button onClick={testApi}>Test API</button>
                <ProductGrid />
            </main>
            <Footer />
        </div>
    );
}

export default App;
