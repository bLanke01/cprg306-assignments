"use client";

import { useState, useEffect } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import { getItems, addItem } from "../_services/shopping-list-service";
import { useUserAuth } from "../_utils/auth-context";

export default function Page() {
  const { user } = useUserAuth(); 
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  useEffect(() => {
    const loadItems = async () => {
      if (user) {
        const items = await getItems(user.uid);
        setItems(items);
      }
    };

    loadItems();
  }, [user]);

  const handleAddItem = async (newItem) => {
    if (user) {
      const itemId = await addItem(user.uid, newItem); 
      setItems([...items, { id: itemId, ...newItem }]); 
    }
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
