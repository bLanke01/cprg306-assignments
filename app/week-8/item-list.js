"use client";

import Item from "./item.js";
import { useState } from "react";

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  let filteredItems = [...items];
  filteredItems.sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else {
      return a.category.localeCompare(b.category);
    }
  });

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="flex justify-center w-full mb-8">
        <button
          onClick={() => setSortBy("name")}
          className={`px-4 py-2 rounded ${
            sortBy === "name" ? "bg-blue-500 text-white" : "bg-gray-200"
          } mr-2`}
        >
          Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`px-4 py-2 rounded ${
            sortBy === "category" ? "bg-green-500 text-white" : "bg-gray-200"
          } ml-2`}
        >
          Category
        </button>
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">List of All Items</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <Item
              key={item.id}
              name={item.name}
              quantity={item.quantity}
              category={item.category}
              onSelect={() => onItemSelect(item)} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
