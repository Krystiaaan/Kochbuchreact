import React, { useState, useEffect } from "react";
import recipesData from "../../data/recipes.json";
import { Recipe } from "../interface/recipe";

const recipePage = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    setRecipes(recipesData.recipes);
  }, []);
  console.log(recipes);
  return (
    <div className="p-4">
      <p className="text-center text-xl font-medium mb-5">Our Recipes:</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe, index) => (
          <div
            key={index}
            className=" bg-white p-4 rounded-xl mx-auto border-4 border-[#424242]"
          >
            <h3>{recipe.title}</h3>
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover rounded-t-xl mb-4"
            />
            <p className="text-sm mb-2">Ingredients:</p>
            <ul className="list-disc pl-5">
              {recipe.ingredients.map((ingredient, i) => (
                <li key={i} className="text-sm">
                  {ingredient}
                </li>
              ))}
            </ul>
            <p className="text-sm mb-2">Instructions:</p>
            <ol className="list-decimal pl-5">
              {recipe.instructions.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </div>
  );
};

export default recipePage;
