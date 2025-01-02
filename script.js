// Show a random meme when button is clicked
function showMeme() {
    const memeContainer = document.getElementById("meme-container");
    const memes = [
        "https://plaky.com/blog/wp-content/uploads/2023/08/Intro.jpg",
        "https://economistwritingeveryday.com/wp-content/uploads/2024/02/goog.jpg",
        "https://i.pinimg.com/736x/77/55/b8/7755b824c260a2b5ed23a115cf19f8cb.jpg"
    ];

    // Choose a random meme
    const randomMeme = memes[Math.floor(Math.random() * memes.length)];

    // Display the meme
    memeContainer.innerHTML = `<img src="${randomMeme}" alt="Random Meme" class="meme-image">`;
}

// Form submission (just for fun, no actual sending)
function submitForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        alert(`Thank you for reaching out, ${name}! Your message: "${message}" will be processed soon. (Just kidding, it's all memes here!)`);
    } else {
        alert("Please fill out all fields before submitting.");
    }
}
