// Show a random meme when button is clicked
function showMeme() {
    const memeContainer = document.getElementById("meme-container");
    const memes = [
        "https://i.pinimg.com/originals/59/fb/f4/59fbf48f6780d4cd24c3f1b96d35a1f6.jpg",
        "https://i.pinimg.com/originals/24/6b/27/246b270f7f4ffb37cde7952a1edfae12.jpg",
        "https://i.pinimg.com/originals/7f/c8/1b/7fc81b8a5f4f3e1f387ddc102edb0359.jpg"
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
