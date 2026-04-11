function toggleDarkMode() {
    document.body.classList.toggle("dark");
}

function submitFeedback(event) {
    event.preventDefault();
    document.getElementById("message").innerText = "Feedback submitted successfully!";
}
