function searchFood() {
    const query = document.getElementById('search').value.toLowerCase();
    const foodItems = document.querySelectorAll('.food-card');
    let found = false;

    foodItems.forEach(item => {
        const foodName = item.getAttribute('data-food').toLowerCase();
        if (foodName.includes(query)) {
            item.style.display = 'block';
            found = true;
        } else {
            item.style.display = 'none';
        }
    });

    const messageElement = document.getElementById('no-results-message');
    if (!found) {
        if (!messageElement) {
            const noResultsMessage = document.createElement('div');
            noResultsMessage.id = 'no-results-message';
            noResultsMessage.textContent = "Oops, not here!!!";
            noResultsMessage.style.textAlign = 'center';
            noResultsMessage.style.marginTop = '20px';
            noResultsMessage.style.color = '#000000';
            document.getElementById('food-list').appendChild(noResultsMessage);
        }
    } else {
        if (messageElement) {
            messageElement.remove();
        }
    }
}

// Data for restaurant cards
const restaurantData = {
    'vada-pav': [
        {
            name: "Vada King",
            rating: "⭐⭐ (2/5)",
            review: "\"The Vada Pav was like chewing on a soggy cardboard with no spice. Zero excitement!\"",
            price: "₹70 (It’s supposed to be spicy, not a soggy disappointment.)"
        },
        {
            name: "Vada World",
            rating: "⭐⭐ (2/5)",
            review: "\"It was so bland, I thought I was eating a potato mush sandwich. Even the chutney seemed tired!\"",
            price: "₹60 (Vada Pav? More like Vada ‘no-flavor’.)"
        },
        {
            name: "The Vada Corner",
            rating: "⭐⭐⭐ (3/5)",
            review: "\"It wasn’t bad, but the vada could have used more crunch and the pav was a bit too soft. Call it a soggy disappointment.\"",
            price: "₹80 (Overhyped for just a potato in a bun.)"
        }
    ],
    'biryani': [
        {
            name: "Malabar Spice",
            rating: "⭐⭐ (2/5)",
            review: "\"The Kerala Biryani tasted like someone boiled the rice and forgot to add spices. Even the chicken felt lost.\"",
            price: "₹500 (You’d expect better from a Malabar specialty, but this was a major miss!)"
        },
        {
            name: "Kerala Kitchen",
            rating: "⭐⭐ (2/5)",
            review: "\"I think the biryani came straight out of a time machine – it was stuck in the 90s without any flavor.\"",
            price: "₹600 (I paid this much for flavorless rice. What a scam!)"
        },
        {
            name: "The Biryani King",
            rating: "⭐⭐⭐ (3/5)",
            review: "\"Not spicy, not aromatic, just… rice with meat. I could’ve made better biryani with a microwave.\"",
            price: "₹700 (Maybe it’s the ‘royal’ price for a bland dish?)"
        }
    ],
    'andhra-meals': [
        {
            name: "Spice Paradise",
            rating: "⭐⭐⭐⭐ (4/5)",
            review: "\"The flavors were bold enough to wake up my ancestors. Just be prepared to sweat buckets while enjoying it!\"",
            price: "₹250 (Totally worth it for the adventure!)"
        },
        {
            name: "Andhra Bhavan",
            rating: "⭐⭐⭐ (3/5)",
            review: "\"The spice level was so intense, I felt like I was on a survival reality show. Delicious, but proceed with caution!\"",
            price: "₹220 (Priced fairly, but you may need a gallon of water on the side.)"
        },
        {
            name: "Fiery Fork",
            rating: "⭐⭐⭐⭐⭐ (5/5)",
            review: "\"This meal was so good, I almost wrote it into my will. The spice balance was perfect, and the portions were generous enough to feed a small army!\"",
            price: "₹300 (A bit pricey, but every bite felt like a celebration!)"
        }
    ],
    'parotta': [
        {
            name: "Parotta Paradise",
            rating: "⭐⭐⭐ (3/5)",
            review: "\"The parotta was so crispy, I thought I was eating a biscuit! But hey, the curry saved the day.\"",
            price: "₹120 (A small price to pay for a crunchy adventure.)"
        },
        {
            name: "South Street Parottas",
            rating: "⭐⭐⭐⭐ (4/5)",
            review: "\"The parotta was soft enough to nap on, and the curry was like a warm hug from a South Indian grandma.\"",
            price: "₹100 (Feels like home, but without the scolding.)"
        },
        {
            name: "The Parotta Hub",
            rating: "⭐⭐⭐ (3/5)",
            review: "\"It’s not just a parotta, it’s an exercise in patience. By the time I tore through it, I was ready for dessert.\"",
            price: "₹80 (Worth it for the workout and the flavor.)"
        }
    ],
    'pongal': [
        {
            name: "South Indian Spice",
            rating: "⭐⭐ (2/5)",
            review: "\"The Pongal was like eating a bowl of mushy rice with zero flavor. Even my taste buds fell asleep!\"",
            price: "₹150 (I think they forgot to add taste. Or spices. Or anything.)"
        },
        {
            name: "Pongal Paradise",
            rating: "⭐⭐ (2/5)",
            review: "\"If blandness was a sport, this Pongal would have taken home the gold medal. The ghee didn’t even want to join the party!\"",
            price: "₹180 (Honestly, my cat could have cooked a better Pongal… and it doesn’t even know how to cook!)"
        },
        {
            name: "The Pongal House",
            rating: "⭐⭐⭐ (3/5)",
            review: "\"It was like eating a pillow with some rice on it. No flavor, just a lot of disappointment. Even the pepper was on vacation.\"",
            price: "₹200 (Sure, I paid, but now I need therapy for this experience.)"
        }
    ],
    'dosa': [
        {
            name: "Dosa Delight",
            rating: "⭐⭐⭐⭐ (4/5)",
            review: "\"This dosa was crispier than my Wi-Fi signal on a good day. Chutneys were like sidekicks who almost stole the show!\"",
            price: "₹200 (Crispy perfection at a slightly crunchy price.)"
        },
        {
            name: "The Dosa Factory",
            rating: "⭐⭐⭐ (3/5)",
            review: "\"The dosa had the personality of a flat tire, but the sambar tried hard to fix it. Points for effort!\"",
            price: "₹180 (Worth it for the sambar’s attempt at heroics.)"
        },
        {
            name: "Dosa World",
            rating: "⭐⭐⭐⭐⭐ (5/5)",
            review: "\"This dosa was so perfect I almost wrote it a love letter. The sambar was like the friend who’s always there to cheer you up!\"",
            price: "₹250 (Expensive, but my taste buds were too happy to care.)"
        }
    ]
};
const foodData = {
    'vada-pav': {
        imgSrc: "https://assets.onecompiler.app/4372822x6/437282fme/Vada-Pav.jpg",
        title: "Vada Pav",
        avgPrice: "₹50",
        goodReview: "\"A crispy and spicy snack that's the perfect street food!\""
    },
    'biryani': {
        imgSrc: "https://assets.onecompiler.app/4372822x6/437282fme/chicken-biriyani-kerala-pin-683x1024.png",
        title: "Biryani",
        avgPrice: "₹300",
        goodReview: "\"Aromatic and flavorful, a true delight!\""
    },
    'andhra-meals': {
        imgSrc: "https://assets.onecompiler.app/4372822x6/4372kr4gp/Andhra%20Meals.jpg",
        title: "Andhra Meals",
        avgPrice: "₹200",
        goodReview: "\"Spicy and delicious, a must-try!\""
    },
    'parotta': {
        imgSrc: "https://assets.onecompiler.app/4372822x6/4372kr4gp/p1.jpg",
        title: "Parotta",
        avgPrice: "₹100",
        goodReview: "\"A flaky and soft bread that pairs perfectly with curry!\""
    },
    'pongal': {
        imgSrc: "https://assets.onecompiler.app/4372822x6/437282fme/pongal.jpeg" ,
        title: "Pongal",
        avgPrice: "₹150",
        goodReview: "\"A comforting and flavorful rice dish!\""
    },
    'dosa': {
        imgSrc: "https://assets.onecompiler.app/4372822x6/4372kr4gp/dosa.jpg",
        title: "Dosa",
        avgPrice: "₹150",
        goodReview: "\"A crispy and savory crepe that's a South Indian classic!\"", 
    }
    // Add more food data as needed

};

function displayTopSection(foodType) {
    const topSection = document.getElementById("top-section");
    const food = foodData[foodType];

    if (food) {
        topSection.innerHTML = `
            <img src="${food.imgSrc}" alt="${food.title}">
            <h1>${food.title}</h1>
            <h3>Average price is ${food.avgPrice}</h3>
            <p class="good-review">${food.goodReview}</p>
        `;
    } else {
        topSection.innerHTML = '<p>Food type not found.</p>';
    }
}

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
    } else {
        restaurantList.innerHTML = '<p>No restaurants found for this food type.</p>';
    }
}