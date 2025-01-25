// Data for restaurant cards
const restaurantData = {
    'vada-pav': [
        {
            name: "Vada King",
            rating: "⭐⭐ (2/5)",
            review: "\"The Vada Pav was like chewing on a soggy cardboard with no spice. Zero excitement!\"",
            price: "₹70 (It’s supposed to be spicy, not a soggy disappointment.)"
        },
        // ...other restaurant data...
    ],
    'biryani': [
        {
            name: "Malabar Spice",
            rating: "⭐⭐ (2/5)",
            review: "\"The Kerala Biryani tasted like someone boiled the rice and forgot to add spices. Even the chicken felt lost.\"",
            price: "₹500 (You’d expect better from a Malabar specialty, but this was a major miss!)"
        },
        // ...other restaurant data...
    ],
    // ...other food types...
};

// Function to get query parameter value
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Function to create restaurant cards dynamically
function displayRestaurants(foodType) {
    const restaurantList = document.getElementById("restaurant-list");
    restaurantList.innerHTML = ''; // Clear previous content

    const restaurants = restaurantData[foodType];
    if (restaurants) {
        restaurants.forEach(restaurant => {
            const card = document.createElement("div");
            card.classList.add("restaurant-card");

            card.innerHTML = `
                <h3>${restaurant.name}</h3>
                <div class="rating">${restaurant.rating}</div>
                <p class="review">${restaurant.review}</p>
                <div class="price">${restaurant.price}</div>
            `;

            restaurantList.appendChild(card);
        });
    }
}

// Get the food type from the URL and display the corresponding restaurants
const foodType = getQueryParam('food');
if (foodType) {
    displayRestaurants(foodType);
}
