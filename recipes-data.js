const recipeDatabase = {
    "Breakfast": {
        "200": [
            { name: "Scrambled Eggs (1 egg)", calories: 155, protein: 13, ingredients: ["eggs", "milk", "butter"], dietaryType: "Vegetarian", image: "img/1.jpeg", sodium: 180 },
            { name: "Yogurt with Berries", calories: 180, protein: 10, ingredients: ["yogurt", "berries"], dietaryType: "Vegetarian", image: "img/2.jpeg", sodium: 80 },
            { name: "Toast with Jam", calories: 210, protein: 5, ingredients: ["bread", "jam"], dietaryType: "Vegan", image: "img/3.jpeg", sodium: 220 },
            { name: "Banana with Nuts", calories: 230, protein: 6, ingredients: ["banana", "nuts"], dietaryType: "Vegan", image: "img/4.jpeg", sodium: 5 },
            { name: "Cottage Cheese with Pineapple", calories: 240, protein: 20, ingredients: ["cottage cheese", "pineapple"], dietaryType: "Vegetarian", image: "img/5.jpeg", sodium: 300 },
            { name: "Protein Shake", calories: 190, protein: 25, ingredients: ["protein powder", "water"], dietaryType: "Vegan", image: "img/6.jpeg", sodium: 120 }
        ],
        "300": [
            { name: "Oatmeal with Almonds", calories: 300, protein: 12, ingredients: ["oats", "almonds", "milk"], dietaryType: "Vegetarian", image: "img/7.jpeg", sodium: 150 },
            { name: "Protein Smoothie", calories: 320, protein: 25, ingredients: ["protein powder", "banana", "spinach", "almond milk"], dietaryType: "Vegan", image: "img/8.jpeg", sodium: 80 },
            { name: "Veggie Omelette", calories: 280, protein: 15, ingredients: ["eggs", "onions", "bell peppers", "cheese"], dietaryType: "Vegetarian", image: "img/9.jpeg", sodium: 250 },
            { name: "Cottage Cheese with Peaches", calories: 310, protein: 28, ingredients: ["cottage cheese", "peaches"], dietaryType: "Vegetarian", image: "img/10.jpeg", sodium: 350 },
            { name: "Scrambled Tofu", calories: 290, protein: 18, ingredients: ["tofu", "turmeric", "onion", "peppers"], dietaryType: "Vegan", image: "img/11.jpeg", sodium: 150 },
            { name: "Sweet Potato Hash", calories: 330, protein: 8, ingredients: ["sweet potato", "onion", "kale"], dietaryType: "Vegan", image: "img/12.jpeg", sodium: 180 }
        ],
        "400": [
            { name: "Avocado Toast with Egg", calories: 410, protein: 15, ingredients: ["avocado", "bread", "egg"], dietaryType: "Vegetarian", image: "img/13.jpeg", sodium: 300 },
            { name: "Breakfast Burrito", calories: 450, protein: 20, ingredients: ["tortilla", "eggs", "sausage", "cheese"], dietaryType: "Non-Vegetarian", image: "img/14.jpeg", sodium: 450 },
            { name: "Pancakes with Maple Syrup", calories: 380, protein: 8, ingredients: ["flour", "eggs", "milk", "syrup"], dietaryType: "Vegetarian", image: "img/15.jpeg", sodium: 280 },
            { name: "Bacon & Egg Sandwich", calories: 420, protein: 22, ingredients: ["bacon", "eggs", "bread"], dietaryType: "Non-Vegetarian", image: "img/16.jpeg", sodium: 550 },
            { name: "Waffles with Fruit", calories: 390, protein: 7, ingredients: ["waffles", "fruit", "whipped cream"], dietaryType: "Vegetarian", image: "img/17.jpeg", sodium: 220 },
            { name: "Frittata with Spinach", calories: 410, protein: 25, ingredients: ["eggs", "spinach", "feta"], dietaryType: "Vegetarian", image: "img/18.jpeg", sodium: 400 }
        ]
    },
    "Lunch": {
        "400": [
            { name: "Chicken Salad", calories: 420, protein: 30, ingredients: ["chicken breast", "lettuce", "tomato"], dietaryType: "Non-Vegetarian", image: "img/19.jpeg", sodium: 320 },
            { name: "Quinoa Bowl with Veggies", calories: 400, protein: 15, ingredients: ["quinoa", "bell peppers", "zucchini", "chickpeas"], dietaryType: "Vegan", image: "img/20.jpeg", sodium: 180 },
            { name: "Lentil Soup", calories: 380, protein: 25, ingredients: ["lentils", "carrots", "celery", "onions"], dietaryType: "Vegan", image: "img/21.jpeg", sodium: 250 },
            { name: "Shrimp Scampi", calories: 450, protein: 35, ingredients: ["shrimp", "pasta", "garlic", "lemon"], dietaryType: "Non-Vegetarian", image: "img/22.jpeg", sodium: 420 },
            { name: "Tuna Salad Sandwich", calories: 430, protein: 28, ingredients: ["tuna", "bread", "mayonnaise", "celery"], dietaryType: "Non-Vegetarian", image: "img/23.jpeg", sodium: 580 },
            { name: "Spinach and Feta Stuffed Chicken Breast", calories: 410, protein: 45, ingredients: ["chicken", "spinach", "feta"], dietaryType: "Non-Vegetarian", image: "img/24.jpeg", sodium: 380 }
        ],
        "500": [
            { name: "Grilled Salmon with Asparagus", calories: 510, protein: 35, ingredients: ["salmon", "asparagus"], dietaryType: "Non-Vegetarian", image: "img/25.jpeg", sodium: 250 },
            { name: "Turkey Wrap with Hummus", calories: 480, protein: 25, ingredients: ["turkey", "tortilla", "hummus"], dietaryType: "Non-Vegetarian", image: "img/26.jpeg", sodium: 450 },
            { name: "Black Bean Burgers", calories: 550, protein: 28, ingredients: ["black beans", "burger buns", "lettuce"], dietaryType: "Vegan", image: "img/27.jpeg", sodium: 400 },
            { name: "Chicken and Rice Bowl", calories: 520, protein: 40, ingredients: ["chicken", "rice", "beans", "corn"], dietaryType: "Non-Vegetarian", image: "img/28.jpeg", sodium: 320 },
            { name: "Beef and Broccoli Stir-fry", calories: 500, protein: 35, ingredients: ["beef", "broccoli", "soy sauce"], dietaryType: "Non-Vegetarian", image: "img/29.jpeg", sodium: 550 },
            { name: "Vegan Pad Thai", calories: 490, protein: 18, ingredients: ["rice noodles", "tofu", "peanuts", "tamarind paste"], dietaryType: "Vegan", image: "img/30.jpeg", sodium: 380 }
        ],
        "600": [
            { name: "Beef & Vegetable Stir-fry", calories: 600, protein: 40, ingredients: ["beef", "vegetables", "soy sauce"], dietaryType: "Non-Vegetarian", image: "img/31.jpeg", sodium: 650 },
            { name: "Pasta with Marinara Sauce", calories: 580, protein: 15, ingredients: ["pasta", "tomato sauce"], dietaryType: "Vegan", image: "img/32.jpeg", sodium: 400 },
            { name: "BBQ Pulled Pork Sandwich", calories: 620, protein: 35, ingredients: ["pork", "bbq sauce", "buns"], dietaryType: "Non-Vegetarian", image: "img/33.jpeg", sodium: 750 },
            { name: "Chicken and Broccoli Alfredo", calories: 650, protein: 45, ingredients: ["chicken", "pasta", "broccoli", "cream"], dietaryType: "Non-Vegetarian", image: "img/34.jpeg", sodium: 580 },
            { name: "Shrimp and Grits", calories: 590, protein: 30, ingredients: ["shrimp", "grits", "cheddar cheese"], dietaryType: "Non-Vegetarian", image: "img/35.jpeg", sodium: 620 },
            { name: "Tofu Katsu Curry", calories: 610, protein: 28, ingredients: ["tofu", "rice", "curry sauce"], dietaryType: "Vegan", image: "img/36.jpeg", sodium: 480 }
        ]
    },
    "Snack": {
        "200": [
            { name: "Apple Slices with Peanut Butter", calories: 190, protein: 6, ingredients: ["apple", "peanut butter"], dietaryType: "Vegan", image: "img/37.jpeg", sodium: 50 },
            { name: "Greek Yogurt", calories: 150, protein: 15, ingredients: ["yogurt"], dietaryType: "Vegetarian", image: "img/38.jpeg", sodium: 60 },
            { name: "Hard-boiled Egg", calories: 78, protein: 6, ingredients: ["egg"], dietaryType: "Vegetarian", image: "img/39.jpeg", sodium: 62 },
            { name: "Handful of Almonds", calories: 160, protein: 6, ingredients: ["almonds"], dietaryType: "Vegan", image: "img/40.jpeg", sodium: 1 },
            { name: "Protein Shake (small)", calories: 120, protein: 15, ingredients: ["protein powder", "milk"], dietaryType: "Vegetarian", image: "img/41.jpeg", sodium: 100 },
            { name: "Rice Cakes with Avocado", calories: 180, protein: 3, ingredients: ["rice cakes", "avocado"], dietaryType: "Vegan", image: "img/42.jpeg", sodium: 90 }
        ],
        "300": [
            { name: "Protein Bar", calories: 250, protein: 20, ingredients: ["protein powder", "oats"], dietaryType: "Vegan", image: "img/43.jpeg", sodium: 180 },
            { name: "Hummus with Pita Bread", calories: 280, protein: 10, ingredients: ["hummus", "pita bread"], dietaryType: "Vegan", image: "img/44.jpeg", sodium: 220 },
            { name: "Cheese and Crackers", calories: 290, protein: 15, ingredients: ["cheese", "crackers"], dietaryType: "Vegetarian", image: "img/45.jpeg", sodium: 300 },
            { name: "Trail Mix", calories: 320, protein: 8, ingredients: ["nuts", "dried fruit", "chocolate"], dietaryType: "Vegan", image: "img/46.jpeg", sodium: 10 },
            { name: "Edamame", calories: 280, protein: 20, ingredients: ["edamame", "salt"], dietaryType: "Vegan", image: "img/47.jpeg", sodium: 250 },
            { name: "Smoothie Bowl", calories: 270, protein: 12, ingredients: ["frozen fruit", "yogurt", "granola"], dietaryType: "Vegetarian", image: "img/48.jpeg", sodium: 90 }
        ]
    },
    "Dinner": {
        "500": [
            { name: "Roasted Chicken Breast with Greens", calories: 550, protein: 40, ingredients: ["chicken breast", "mixed greens"], dietaryType: "Non-Vegetarian", image: "img/49.jpeg", sodium: 320 },
            { name: "Lentil Soup", calories: 480, protein: 25, ingredients: ["lentils", "vegetables"], dietaryType: "Vegan", image: "img/50.jpeg", sodium: 250 },
            { name: "Baked Cod with Roasted Vegetables", calories: 570, protein: 45, ingredients: ["cod", "vegetables"], dietaryType: "Non-Vegetarian", image: "img/51.jpeg", sodium: 280 },
            { name: "Tofu Stir-fry with Brown Rice", calories: 500, protein: 30, ingredients: ["tofu", "broccoli", "soy sauce", "brown rice"], dietaryType: "Vegan", image: "img/52.jpeg", sodium: 450 },
            { name: "Shrimp Tacos", calories: 490, protein: 32, ingredients: ["shrimp", "tortilla", "cabbage", "lime"], dietaryType: "Non-Vegetarian", image: "img/53.jpeg", sodium: 380 },
            { name: "Eggplant Parmesan", calories: 520, protein: 22, ingredients: ["eggplant", "marinara sauce", "mozzarella"], dietaryType: "Vegetarian", image: "img/54.jpeg", sodium: 450 }
        ],
        "600": [
            { name: "Steak with Roasted Potatoes", calories: 600, protein: 50, ingredients: ["steak", "potatoes"], dietaryType: "Non-Vegetarian", image: "img/55.jpeg", sodium: 350 },
            { name: "Spaghetti with Meatballs", calories: 580, protein: 35, ingredients: ["spaghetti", "meatballs", "tomato sauce"], dietaryType: "Non-Vegetarian", image: "img/56.jpeg", sodium: 580 },
            { name: "Chicken and Mushroom Risotto", calories: 620, protein: 25, ingredients: ["chicken", "mushrooms", "rice", "broth"], dietaryType: "Non-Vegetarian", image: "img/57.jpeg", sodium: 420 },
            { name: "Pork Chops with Applesauce", calories: 650, protein: 40, ingredients: ["pork chops", "applesauce"], dietaryType: "Non-Vegetarian", image: "img/58.jpeg", sodium: 300 },
            { name: "Beef Stroganoff", calories: 590, protein: 45, ingredients: ["beef", "mushrooms", "sour cream", "noodles"], dietaryType: "Non-Vegetarian", image: "img/59.jpeg", sodium: 600 },
            { name: "Vegan Chili", calories: 600, protein: 28, ingredients: ["beans", "tomatoes", "chili powder"], dietaryType: "Vegan", image: "img/60.jpeg", sodium: 480 }
        ],
        "700": [
            { name: "Homemade Burger", calories: 680, protein: 35, ingredients: ["ground beef", "buns", "cheese"], dietaryType: "Non-Vegetarian", image: "img/61.jpeg", sodium: 550 },
            { name: "Beef Lasagna", calories: 720, protein: 45, ingredients: ["pasta", "ground beef", "cheese", "tomato sauce"], dietaryType: "Non-Vegetarian", image: "img/62.jpeg", sodium: 650 },
            { name: "Shepherd's Pie", calories: 700, protein: 40, ingredients: ["ground lamb", "potatoes", "peas", "carrots"], dietaryType: "Non-Vegetarian", image: "img/63.jpeg", sodium: 480 },
            { name: "Chicken Pot Pie", calories: 750, protein: 38, ingredients: ["chicken", "pie crust", "vegetables", "cream"], dietaryType: "Non-Vegetarian", image: "img/64.jpeg", sodium: 520 },
            { name: "Fried Chicken and Mac & Cheese", calories: 780, protein: 50, ingredients: ["chicken", "macaroni", "cheese"], dietaryType: "Non-Vegetarian", image: "img/65.jpeg", sodium: 800 },
            { name: "Veggie Burger with Fries", calories: 700, protein: 20, ingredients: ["veggie patty", "buns", "fries", "lettuce"], dietaryType: "Vegan", image: "img/66.jpeg", sodium: 550 }
        ]
    }
};