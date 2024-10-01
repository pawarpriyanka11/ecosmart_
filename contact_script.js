document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Basic validation (you can enhance this as needed)
    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return;
    }

    // Simulate sending the message (you can replace this with an actual API call)
    setTimeout(() => {
        document.getElementById('responseMessage').innerText = "Thank you for your message, " + name + "!";
        document.getElementById('contactForm').reset(); // Reset the form fields
    }, 1000);
});
