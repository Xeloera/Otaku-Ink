<<<<<<< HEAD
import React, { useState, useEffect } from 'react';

function ProductPage({ match }) {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        async function fetchProduct() {
            // Replace this URL with the actual API endpoint to fetch the product data.
            const response = await fetch(`/api/products/${match.params.id}`);
            const data = await response.json();
            setProduct(data);
        }
        fetchProduct();
    }, [match.params.id]);

    return (
        <div>
            {product ? (
                <div>
                    <h1>{product.name}</h1>
                    <p>{product.description}</p>
                    <p>Price: ${product.price}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default ProductPage;
=======
import React, { useState, useEffect } from 'react';

function ProductPage({ match }) {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        async function fetchProduct() {
            // Replace this URL with the actual API endpoint to fetch the product data.
            const response = await fetch(`/api/products/${match.params.id}`);
            const data = await response.json();
            setProduct(data);
        }
        fetchProduct();
    }, [match.params.id]);

    return (
        <div>
            {product ? (
                <div>
                    <h1>{product.name}</h1>
                    <p>{product.description}</p>
                    <p>Price: ${product.price}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default ProductPage;
>>>>>>> 148fc85ac026670d152848494297ee279187cf7e
