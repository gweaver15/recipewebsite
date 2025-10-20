import React, { useState } from 'react';

// Sample recipe data
const recipes = [
  {
    id: 1,
    title: "Chocolate Chip Cookies",
    description: "Classic homemade cookies",
    ingredients: ["2 cups flour", "1 cup butter", "1/2 cup brown sugar", "1/2 cup white sugar", "2 eggs", "1 tsp vanilla", "1 tsp baking soda", "1 cup chocolate chips"],
    instructions: "1. Preheat oven to 375°F. 2. Mix dry ingredients. 3. Cream butter and sugars. 4. Add eggs and vanilla. 5. Combine wet and dry ingredients. 6. Fold in chocolate chips. 7. Bake for 9-11 minutes."
  },
  {
    id: 2,
    title: "Spaghetti Carbonara",
    description: "Creamy Italian pasta dish",
    ingredients: ["1 lb spaghetti", "4 eggs", "1 cup parmesan cheese", "4 oz pancetta", "2 cloves garlic", "Black pepper", "Salt"],
    instructions: "1. Cook pasta according to package directions. 2. Cook pancetta until crispy. 3. Whisk eggs with parmesan. 4. Toss hot pasta with pancetta. 5. Add egg mixture off heat. 6. Season with pepper."
  },
  {
    id: 3,
    title: "Chicken Stir Fry",
    description: "Quick and healthy dinner",
    ingredients: ["1 lb chicken breast", "2 cups mixed vegetables", "2 tbsp soy sauce", "1 tbsp olive oil", "1 tsp garlic", "1 tsp ginger", "Rice for serving"],
    instructions: "1. Heat oil in wok. 2. Cook chicken until done. 3. Add vegetables and stir fry. 4. Add soy sauce, garlic, and ginger. 5. Serve over rice."
  }
];

// Individual recipe component that can expand/collapse
function RecipeCard({ recipe }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="recipe-card">
      <div 
        className="recipe-header" 
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h3>{recipe.title}</h3>
        <p>{recipe.description}</p>
        <span className="expand-icon">{isExpanded ? '−' : '+'}</span>
      </div>
      
      {isExpanded && (
        <div className="recipe-details">
          <div className="ingredients">
            <h4>Ingredients:</h4>
            <ul>
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
          <div className="instructions">
            <h4>Instructions:</h4>
            <p>{recipe.instructions}</p>
          </div>
        </div>
      )}
    </div>
  );
}

// Main app component
function App() {
  return (
    <div className="app">
      <header>
        <h1 className="masthead">Welcome to the Recipe Website</h1>
        <p>Discover delicious recipes and cooking tips!</p>
      </header>
      
      <main className="recipe-list">
        <h2>Recipe Collection</h2>
        {recipes.map(recipe => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </main>
    </div>
  );
}

export default App;