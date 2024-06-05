import React, { useEffect, useState } from 'react';

function ProductView({ productId }) {
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        fetch(`https://your-backend-url/api/products/${productId}`)
            .then(response => response.json())
            .then(data => setProduct(data))
            .catch(error => console.error('Error fetching product:', error));
    }, [productId]);

    const handleAddToCart = () => {
        console.log('Add to cart:', { ...product, quantity });
    };

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden">
            <img src="https://source.unsplash.com/random/?food" alt={product.name} className="w-full h-56 object-cover" />
            <div className="p-4">
                <h1 className="text-2xl font-bold">{product.name}</h1>
                <p className="text-gray-700 mt-2">{product.description}</p>
                <p className="text-gray-900 font-bold mt-2">€{product.price.toFixed(2)}</p>

                <div className="mt-4">
                    <label htmlFor="quantity" className="block text-gray-700">Cantidad:</label>
                    <div className="flex items-center mt-2">
                        <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-l-lg">-</button>
                        <input
                            id="quantity"
                            type="number"
                            value={quantity}
                            onChange={(e) => setQuantity(parseInt(e.target.value))}
                            className="w-12 text-center border border-gray-300 focus:outline-none focus:border-gray-500"
                        />
                        <button onClick={() => setQuantity(quantity + 1)} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-r-lg">+</button>
                    </div>
                </div>

                <button
                    onClick={handleAddToCart}
                    className="mt-4 w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-200"
                >
                    Añadir {quantity} al carrito - €{(product.price * quantity).toFixed(2)}
                </button>
            </div>
        </div>
    );
}

export default ProductView;
