"use client";

import { useState } from "react";

export default function NewItem() {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce")

    const increment = () => setQuantity(quantity + 1 );
    const decrement = () => setQuantity(quantity - 1 );

    const handleNameChange = (event) => {
        let name = event.target.value;
        name = name.replace(/[^a-zA-Z0-9]/g, "");
        setName(name);
    };


    const handleCategoryChange = (event) => {
        let category = event.target.value;
        setCategory(category);
    };

        
    const handleSubmit = (event) => {
        event.preventDefault();
        let item = { name, quantity, category };
        console.log(item);

        alert("Name: ".concat(name, ", Quantity: ").concat(quantity, ", Category: ").concat(category));
        

        setName("");
        setQuantity(1);
        setCategory("produce");
    };
  
    return (
        <div className="max-w-screen-md w-full mx-auto p-6 bg-white rounded-lg shadow-md flex justify-center space-x-4">
            <form className="m-2" onSubmit={handleSubmit}>
                <label htmlFor="name" className="text-sm font-medium text-black">Name:</label>
                <input 
                type="text" 
                id="name" 
                value={name} 
                onChange={(event) => handleNameChange(event)}
                required
                style={{color: "black" }} 
                className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full border-gray-300 rounded-md" />
                
                <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mt-4">Quantity</label>
                <input
                type="number"
                id="quantity"
                value={quantity}
                style={{color: "black" }} 
                onChange={(event) => setQuantity(event.target.value)}/>
                <div className="flex items-center space-x-2">
                    <button type="button" onClick={increment} disabled={quantity >= 20} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">+</button>
                    <button type="button" onClick={decrement} disabled={quantity <= 1} className="bg-gray-300 hover:bg-gray-400 text-black font-semibold py-2 px-4 rounded">-</button> 

                </div>
                
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mt-4">Category</label>
                <select
                id="category"
                value={category}
                onChange={(event) => handleCategoryChange(event)}
                style={{color:"black"}}
                className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full border-gray-300 rounded-md">
                <option value="produce">Produce</option>
                <option value="Dairy">Dairy</option>
                <option value="Bakery">Bakery</option>
                <option value="Meat">Meat</option>
                <option value="Frozen Foods">Frozen Foods</option>
                <option value="Canned Goods">Canned Goods</option>
                <option value="Dry Goods">Dry Goods</option>
                <option value="Beverages">Beverages</option>
                <option value="Snacks">Snacks</option>
                <option value="Household">Household</option>
                <option value="Other">Other</option>
                </select>

                <input 
                type="submit" value="Add Item" className= "m-2 text-black hover:bg-blue-300" 
                />

            </form>
            
        </div>
     );
}
