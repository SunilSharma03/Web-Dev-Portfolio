const recipes = {
    happy: [
        {
            title: "Colorful Summer Salad",
            description: "A bright and cheerful salad that'll maintain your good mood!",
            ingredients: [
                "Mixed salad greens",
                "Cherry tomatoes",
                "Cucumber",
                "Yellow bell pepper",
                "Avocado",
                "Pomegranate seeds",
                "Citrus vinaigrette"
            ],
            instructions: [
                "Wash and dry all vegetables",
                "Chop vegetables into bite-sized pieces",
                "Combine all ingredients in a large bowl",
                "Drizzle with citrus vinaigrette",
                "Toss and serve immediately"
            ]
        },
        // Add more happy recipes here
    ],
    sad: [
        {
            title: "Comforting Mac and Cheese",
            description: "A warm, creamy comfort food to lift your spirits.",
            ingredients: [
                "Macaroni pasta",
                "Cheddar cheese",
                "Butter",
                "Milk",
                "Flour",
                "Breadcrumbs",
                "Salt and pepper"
            ],
            instructions: [
                "Cook macaroni according to package instructions",
                "Make a roux with butter and flour",
                "Add milk and cheese to make sauce",
                "Combine with pasta",
                "Top with breadcrumbs and bake until golden"
            ]
        },
        // Add more sad recipes here
    ],
    stressed: [
        {
            title: "Calming Chamomile Cookies",
            description: "Relaxing cookies with stress-reducing ingredients.",
            ingredients: [
                "Flour",
                "Butter",
                "Sugar",
                "Chamomile tea (ground)",
                "Honey",
                "Vanilla extract",
                "Lavender (optional)"
            ],
            instructions: [
                "Cream butter and sugar",
                "Mix in honey and vanilla",
                "Add flour and ground chamomile",
                "Form cookies and bake at 350°F",
                "Let cool and enjoy with tea"
            ]
        },
        // Add more stressed recipes here
    ],
    energetic: [
        {
            title: "Power Smoothie Bowl",
            description: "A nutrient-packed bowl to maintain your energy!",
            ingredients: [
                "Frozen berries",
                "Banana",
                "Greek yogurt",
                "Honey",
                "Granola",
                "Chia seeds",
                "Fresh fruit for topping"
            ],
            instructions: [
                "Blend frozen berries, banana, and yogurt",
                "Pour into a bowl",
                "Top with granola and fresh fruit",
                "Sprinkle with chia seeds",
                "Serve immediately"
            ]
        },
        // Add more energetic recipes here
    ],
    tired: [
        {
            title: "Energy-Boosting Breakfast Toast",
            description: "A quick and energizing breakfast to wake you up.",
            ingredients: [
                "Whole grain bread",
                "Avocado",
                "Eggs",
                "Cherry tomatoes",
                "Coffee or tea",
                "Red pepper flakes",
                "Salt and pepper"
            ],
            instructions: [
                "Toast the bread until golden",
                "Mash avocado and spread on toast",
                "Fry or poach eggs",
                "Place eggs on avocado toast",
                "Top with tomatoes and seasonings"
            ]
        },
        // Add more tired recipes here
    ]
};

let currentMood = null;

document.querySelectorAll('.mood-btn').forEach(button => {
    button.addEventListener('click', () => {
        currentMood = button.dataset.mood;
        showRandomRecipe();
    });
});

document.getElementById('new-recipe-btn').addEventListener('click', showRandomRecipe);

function showRandomRecipe() {
    if (!currentMood) return;
    
    const moodRecipes = recipes[currentMood];
    const randomRecipe = moodRecipes[Math.floor(Math.random() * moodRecipes.length)];
    
    document.querySelector('.recipe-container').style.display = 'block';
    document.getElementById('recipe-title').textContent = randomRecipe.title;
    document.getElementById('recipe-description').textContent = randomRecipe.description;
    
    const ingredientsList = document.getElementById('recipe-ingredients');
    ingredientsList.innerHTML = '';
    randomRecipe.ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.textContent = ingredient;
        ingredientsList.appendChild(li);
    });
    
    const instructionsList = document.getElementById('recipe-instructions');
    instructionsList.innerHTML = '';
    randomRecipe.instructions.forEach(instruction => {
        const li = document.createElement('li');
        li.textContent = instruction;
        instructionsList.appendChild(li);
    });
}