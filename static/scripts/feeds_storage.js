var feeds = JSON.parse(localStorage.getItem('feeds')) || [
    {
        username: "@foodlover123",
        profilePic: "",
        imageUrl: "https://th.bing.com/th?id=OIP.9nl2eFOD4SKNC_FIn0bSqQHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
        text: "Just tried this Margherita Pizza and it's amazing! Fresh tomatoes, mozzarella, and basil are a perfect combo. 🍕",
        poisson_ratio: "4.5/5",
        food_name: "Margherita Pizza",
        restaurant_name: "Pizza Place"
    },
    {
        username: "@dessertlover",
        profilePic: "",
        imageUrl: "https://th.bing.com/th?id=OIP.9nl2eFOD4SKNC_FIn0bSqQHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
        text: "This Chocolate Lava Cake is a must-try! Rich and gooey with the perfect molten center. 🍫",
        poisson_ratio: "4.3/5",
        food_name: "Chocolate Lava Cake",
        restaurant_name: "Dessert Haven"
    },
    {
        username: "@sushilover",
        profilePic: "",
        imageUrl: "",
        text: "The freshest Sushi Platter I've had! Salmon, tuna, and avocado rolls. Highly recommend. 🍣",
        poisson_ratio: "4.5/5",
        food_name: "Sushi Platter",
        restaurant_name: "Sushi World"
    }
];

document.addEventListener('newFeed', function(event) {
    feeds.unshift(event.detail); // Insert at the beginning
    localStorage.setItem('feeds', JSON.stringify(feeds));
    console.log(feeds);
});