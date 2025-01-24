document.addEventListener('DOMContentLoaded', function() {
    const sentences = [
        "Sentence 1","-",
        "Sentence 2","-",
        "Sentence 3","-",
        "Sentence 4","-",
        "Sentence 5","-",
        "Sentence 6","-",
        "Sentence 7","-",
        "Sentence 8","-",
        "Sentence 9","-",
        "Sentence 10","-",
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
        for (let i = 0; i < 5; i++) {
            const index = (currentIndex + i) % listItems.length;
            listItems[index].style.display = 'block';
        }

        // Move to the next sentence
        currentIndex = (currentIndex + 1) % listItems.length;
    }

    // Show the first 5 sentences initially
    showNextSentences();

    // Change sentences every 2 seconds
    setInterval(showNextSentences, 2000);
});