"use client";

import { useState, useEffect } from "react";

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [sortBy, setSortBy] = useState("name");

  function fetchMealIdeas(ingredient) {
    return fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch meal ideas");
        }
        return response.json();
      })
      .then((data) => data.meals || [])
      .catch((error) => {
        console.error("Error fetching meal ideas:", error);
        return [];
      });
  }

  function loadMealIdeas() {
    if (!ingredient) return;
    fetchMealIdeas(ingredient).then((fetchedMeals) => {
      setMeals(fetchedMeals);
    });
  }

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  let sortedMeals = [...meals];
  sortedMeals.sort((a, b) => {
    if (sortBy === "name") {
      return a.strMeal.localeCompare(b.strMeal);
    } else {
      return a.idMeal.localeCompare(b.idMeal);
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
          onClick={() => setSortBy("id")}
          className={`px-4 py-2 rounded ${
            sortBy === "id" ? "bg-green-500 text-white" : "bg-gray-200"
          } ml-2`}
        >
          ID
        </button>
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Meal Ideas for "{ingredient}"</h2>
        {sortedMeals.length === 0 ? (
          <p>No meal ideas has been found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedMeals.map((meal) => (
              <div
                key={meal.idMeal}
                className="p-4 border rounded shadow hover:shadow-lg transition"
              >
                <img
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  className="w-full h-32 object-cover mb-4"
                />
                <h3 className="text-lg font-semibold">{meal.strMeal}</h3>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
