"use client";

import { useState } from "react";

export default function NewItem() {
    const [quantity, setQuantity] = useState(1);

    const increment = () => setQuantity(quantity + 1 );
    const decrement = () => setQuantity(quantity - 1 );

    return (
        <div className="max-w-md w-full mx-auto p-6 bg-gray-100 rounded-lg shadow-md overflow-hidden flex justify-center space-x-4">        
            <p className="text-xl font-semibold text-black mt-4 text-center">Quantity: {quantity}</p>
            <button onClick={increment} disabled={quantity >= 20} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Add</button>
            <button onClick={decrement} disabled={quantity <= 1} className="bg-gray-300 hover:bg-gray-400 text-black font-semibold py-2 px-4 rounded">Delete</button>
        </div>
     );
}