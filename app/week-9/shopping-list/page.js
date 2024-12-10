"use client";

import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import itemsData from "./item.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };


  const handleItemSelect = (item) => {
    const cleanedName = item.name
      .split(",")[0] 
      .replace(/[\u{1F300}-\u{1F6FF}|\u{2600}-\u{26FF}]/gu, "") 
      .trim();
    setSelectedItemName(cleanedName);
  };

  return (
    <main className="flex flex-col md:flex-row gap-8 p-4">
      <div className="flex-1">
        <h1 className="text-2xl font-bold mb-4">Shopping List</h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>
      <div className="flex-1">
        <h1 className="text-2xl font-bold mb-4">Meal Ideas</h1>
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
}
