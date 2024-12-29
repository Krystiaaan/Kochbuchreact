import { useEffect, useState } from 'react'
import recipesData from "../../data/recipes.json";
import { Recipe } from '../interface/recipe';

const RandomRecipe = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [randomRecipe, setRandomRecipe] = useState<Recipe | null>(null);

  useEffect(() => {
    setRecipes(recipesData.recipes);
  }, []);

  console.log(recipesData.recipes);

  useEffect(() => {
    if (recipes.length > 0) {
      const randomIndex = Math.floor(Math.random() * recipes.length);
      setRandomRecipe(recipes[randomIndex]);
    }
  }, [recipes]);

  return (
    <div className="text-center mt-5 mb-5">
      <p className="text-xl font-medium mb-5">Today's Recipe:</p>
      <div className="w-2/6 h-2/6 bg-white p-4 rounded-xl mx-auto border-4 border-[#424242]">
        {randomRecipe ? (
          <div className="p-4">
            <h2 className="text-xl">{randomRecipe.title}</h2>
            <h3>Ingredients:</h3>
            <ul className="mb-5">
              {randomRecipe.ingredients.map((ingredient: string, index: number) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <h3>Instructions:</h3>
            <ol className="mb-2">
              {randomRecipe.instructions.map((step: string, index: number) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default RandomRecipe;

