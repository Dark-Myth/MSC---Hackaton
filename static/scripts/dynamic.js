document.addEventListener('DOMContentLoaded', function() {
    const sentences = [
        "It was so oily, I’m pretty sure it doubled as a biodiesel sample. My car is running better now!","-",
        "This dosa was so big, I could have used it as a yoga mat before eating it!","-",
        "The pongal was so sticky, I’m convinced it could glue my broken heart back together.","-",
        "The biriyani was so spicy, I started speaking fluent dragon and almost roasted the waiter with my breath.","-",
        "One bite of the pickle, and I swear I had an out-of-body experience. Spicy? More like a personal vendetta!","-",
        "The layers were so perfect, I felt like I was unwrapping a birthday gift—except it was just more carbs.","-",
        "This dosa was so crispy, I think I heard it scream ‘ouch’ every time I took a bite!","-",
        "Eating this pongal felt like a warm hug from a grandmother who doesn’t hold back on the ghee.","-",
        "The biriyani was so fragrant, my neighbors knocked on my door to ask if I was running a perfume factory.","-",
        "The meals were so generous, even my diet plan packed its bags and left without a goodbye!","-",
    ];

    const sentencesList = document.getElementById('sentences-list');
    sentences.forEach(sentence => {
        const li = document.createElement('li');
        li.textContent = sentence;
        sentencesList.appendChild(li);
    });

    let currentIndex = 0;
    const listItems = sentencesList.getElementsByTagName('li');

    function showNextSentences() {
        // Hide all sentences
        for (let i = 0; i < listItems.length; i++) {
            listItems[i].style.display = 'none';
        }

        // Show the next 5 sentences
        for (let i = 0; i < 9; i++) {
            const index = (currentIndex + i) % listItems.length;
            listItems[index].style.display = 'block';
        }

        // Move to the next sentence
        currentIndex = (currentIndex + 1) % listItems.length;
    }

    // Show the first 5 sentences initially
    showNextSentences();

    // Change sentences every 2 seconds
    setInterval(showNextSentences, 5000);
});