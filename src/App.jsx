import React, { useState } from 'react';

// Sample recipe data organized by categories
const recipesByCategory = {
  "Bread and Rolls": [
    {
      id: 1,
      title: "Crescent Rolls",
      ingredients: ["1/2 cup milk*", "1/2 cup water*", "1/3 cup butter*", "1 egg", "1/4 cup sugar", "1 tsp. salt", "3 3/4 cups flour", "1 pack yeast"],
      instructions: "* Warm these ingrdients to 110F 1. Throw all ingredients into bread machine. Wet then dry ingredients. 2. Cyle on dough setting. 3. Knead and divide in half. 4. Roll each half into 12 in circle. 5. Cut circle into eights and roll. (Use a pizza cutter) 6. Roll each into crescent and let rise. 7. Bake @ 400°F for 10-15 minutes."
    },
    {
      id: 4,
      title: "Deep Dish Pizza",
      ingredients: ["1 1/4 cup warm water", "1 tsp yeast", "1 tsp salt", "2 cups bread flour", "1 cup flour"],
      instructions: "1. Proof water and yeast (5 min). 2. Add salt. 3. Add flour one cup at a time with mixer on low. 4. At a higher speed, mix for 5-7 min. 5.Bake at 450°F for 17 minutes. Makes 2."
    }
  ],
  "Side Dishes": [
    {
      id: 2,
      title: "Spaghetti Carbonara",
      ingredients: ["1 lb spaghetti", "4 eggs", "1 cup parmesan cheese", "4 oz pancetta", "2 cloves garlic", "Black pepper", "Salt"],
      instructions: "1. Cook pasta according to package directions. 2. Cook pancetta until crispy. 3. Whisk eggs with parmesan. 4. Toss hot pasta with pancetta. 5. Add egg mixture off heat. 6. Season with pepper."
    },
    {
      id: 3,
      title: "Chicken Stir Fry",

      ingredients: ["1 lb chicken breast", "2 cups mixed vegetables", "2 tbsp soy sauce", "1 tbsp olive oil", "1 tsp garlic", "1 tsp ginger", "Rice for serving"],
      instructions: "1. Heat oil in wok. 2. Cook chicken until done. 3. Add vegetables and stir fry. 4. Add soy sauce, garlic, and ginger. 5. Serve over rice."
    },
    {
      id: 5,
      title: "Beef Tacos",
      ingredients: ["1 lb ground beef", "1 packet taco seasoning", "8 taco shells", "1 cup lettuce", "1 cup cheese", "2 tomatoes", "Sour cream", "Salsa"],
      instructions: "1. Brown ground beef in skillet. 2. Add taco seasoning and water. 3. Simmer 10 minutes. 4. Warm taco shells. 5. Fill shells with beef and toppings."
    }
  ],
  "Vegetables": [
    {
      id: 6,
      title: "Spinach Artichoke Dip",
      ingredients: ["1 cup spinach", "1 cup artichoke hearts", "8 oz cream cheese", "1/2 cup mayonnaise", "1/2 cup sour cream", "1 cup parmesan cheese", "2 cloves garlic"],
      instructions: "1. Preheat oven to 375°F. 2. Mix all ingredients in baking dish. 3. Bake 25-30 minutes until bubbly. 4. Serve hot with chips or bread."
    },
    {
      id: 7,
      title: "Buffalo Chicken Wings",
      ingredients: ["2 lbs chicken wings", "1/2 cup hot sauce", "1/4 cup butter", "1 tbsp vinegar", "1/4 tsp garlic powder", "Salt", "Pepper"],
      instructions: "1. Bake wings at 400°F for 45 minutes. 2. Mix hot sauce, butter, vinegar, and spices. 3. Toss cooked wings in sauce. 4. Serve with celery and ranch."
    }
  ],
    "Vegetables": [
    {
      id: 6,
      title: "Spinach Artichoke Dip",
      ingredients: ["1 cup spinach", "1 cup artichoke hearts", "8 oz cream cheese", "1/2 cup mayonnaise", "1/2 cup sour cream", "1 cup parmesan cheese", "2 cloves garlic"],
      instructions: "1. Preheat oven to 375°F. 2. Mix all ingredients in baking dish. 3. Bake 25-30 minutes until bubbly. 4. Serve hot with chips or bread."
    },
    {
      id: 7,
      title: "Buffalo Chicken Wings",
      ingredients: ["2 lbs chicken wings", "1/2 cup hot sauce", "1/4 cup butter", "1 tbsp vinegar", "1/4 tsp garlic powder", "Salt", "Pepper"],
      instructions: "1. Bake wings at 400°F for 45 minutes. 2. Mix hot sauce, butter, vinegar, and spices. 3. Toss cooked wings in sauce. 4. Serve with celery and ranch."
    }
  ],
    "Vegetables": [
    {
      id: 6,
      title: "Spinach Artichoke Dip",
      ingredients: ["1 cup spinach", "1 cup artichoke hearts", "8 oz cream cheese", "1/2 cup mayonnaise", "1/2 cup sour cream", "1 cup parmesan cheese", "2 cloves garlic"],
      instructions: "1. Preheat oven to 375°F. 2. Mix all ingredients in baking dish. 3. Bake 25-30 minutes until bubbly. 4. Serve hot with chips or bread."
    },
    {
      id: 7,
      title: "Buffalo Chicken Wings",
      ingredients: ["2 lbs chicken wings", "1/2 cup hot sauce", "1/4 cup butter", "1 tbsp vinegar", "1/4 tsp garlic powder", "Salt", "Pepper"],
      instructions: "1. Bake wings at 400°F for 45 minutes. 2. Mix hot sauce, butter, vinegar, and spices. 3. Toss cooked wings in sauce. 4. Serve with celery and ranch."
    }
  ],
    "Vegetables": [
    {
      id: 6,
      title: "Spinach Artichoke Dip",
      ingredients: ["1 cup spinach", "1 cup artichoke hearts", "8 oz cream cheese", "1/2 cup mayonnaise", "1/2 cup sour cream", "1 cup parmesan cheese", "2 cloves garlic"],
      instructions: "1. Preheat oven to 375°F. 2. Mix all ingredients in baking dish. 3. Bake 25-30 minutes until bubbly. 4. Serve hot with chips or bread."
    },
    {
      id: 7,
      title: "Buffalo Chicken Wings",
      ingredients: ["2 lbs chicken wings", "1/2 cup hot sauce", "1/4 cup butter", "1 tbsp vinegar", "1/4 tsp garlic powder", "Salt", "Pepper"],
      instructions: "1. Bake wings at 400°F for 45 minutes. 2. Mix hot sauce, butter, vinegar, and spices. 3. Toss cooked wings in sauce. 4. Serve with celery and ranch."
    }
  ]
};

// Category component that can expand/collapse
function CategorySection({ categoryName, recipes }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="category-section">
      <div 
        className="category-header" 
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h2>{categoryName}</h2>
        <span className="category-count">({recipes.length} recipes)</span>
        <span className="expand-icon">{isExpanded ? '−' : '+'}</span>
      </div>
      
      {isExpanded && (
        <div className="category-recipes">
          {recipes.map(recipe => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  );
}

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
        {Object.entries(recipesByCategory).map(([categoryName, recipes]) => (
          <CategorySection 
            key={categoryName} 
            categoryName={categoryName} 
            recipes={recipes} 
          />
        ))}
      </main>
    </div>
  );
}

export default App;