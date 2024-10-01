let starsEarned = 0;
const maxStars = 5; // Maximum number of stars
const tasksCompleted = {
    task1: false,
    task2: false,
    task3: false
};

function completeTask(task) {
    if (tasksCompleted[task]) {
        displayMessage("You have already completed this task!");
        return; // Exit if the task is already completed
    }

    // Increment stars only if the maximum has not been reached
    if (starsEarned < maxStars) {
        starsEarned++;
        tasksCompleted[task] = true; // Mark the task as completed
        updateProgressBar();
        displayStars();
        displayMessage("Great job! You've completed the task!");

        // Trigger confetti animation
        triggerConfetti();

        // Check if the stars reached the max
        if (starsEarned === maxStars) {
            document.getElementById('certificate-section').style.display = 'block';
        }
    } else {
        displayMessage("You've reached the maximum stars!");
    }
}

function addTask() {
    const taskName = document.getElementById('task-name').value;
    const taskDescription = document.getElementById('task-description').value;

    // Validate input
    if (!taskName || !taskDescription) {
        displayMessage("Please enter both task name and description.");
        return;
    }

    const taskId = `task${Object.keys(tasksCompleted).length + 1}`;
    tasksCompleted[taskId] = false; // Initialize the task as not completed

    const taskList = document.getElementById('task-list');
    const newTaskDiv = document.createElement('div');
    newTaskDiv.className = 'task';
    newTaskDiv.setAttribute('onclick', `completeTask('${taskId}')`);
    newTaskDiv.innerHTML = `<h3>${taskName}</h3><p>${taskDescription}</p>`;
    taskList.appendChild(newTaskDiv);

    // Clear input fields
    document.getElementById('task-name').value = '';
    document.getElementById('task-description').value = '';

    displayMessage("New task added!");
}

function updateProgressBar() {
    const progressBar = document.getElementById("progress-bar");
    const percentage = (starsEarned / maxStars) * 100;
    progressBar.style.width = percentage + "%";
}

function displayStars() {
    const starContainer = document.getElementById("star-container");
    starContainer.innerHTML = '';
    for (let i = 0; i < starsEarned; i++) {
        const star = document.createElement("span");
        star.classList.add("star");
        star.textContent = "★";
        starContainer.appendChild(star);
    }
}

function displayMessage(message) {
    const rewardMessage = document.getElementById("reward-message");
    rewardMessage.textContent = message;
}

function triggerConfetti() {
    for (let i = 0; i < 100; i++) {
        createConfetti();
    }
}

function createConfetti() {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.backgroundColor = getRandomColor();
    confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
    confetti.style.opacity = Math.random();
    document.body.appendChild(confetti);

    confetti.addEventListener('animationend', () => {
        confetti.remove();
    });
}

function getRandomColor() {
    const colors = ['#f39c12', '#e74c3c', '#3498db', '#9b59b6', '#2ecc71'];
    return colors[Math.floor(Math.random() * colors.length)];
}

function generateCertificate() {
    const userName = document.getElementById('user-name').value;
    if (!userName) {
        alert("Please enter your name to generate the certificate.");
        return;
    }

    // Update the certificate with the user's name
    document.getElementById('certificate-name').textContent = userName;
    document.getElementById('certificate').style.display = 'block';

    // Hide the certificate section
    document.getElementById('certificate-section').style.display = 'none';
}

function downloadCertificate() {
    const certificate = document.getElementById('certificate');
    const certificateClone = certificate.cloneNode(true);
    const pdfWindow = window.open('', '_blank');

    pdfWindow.document.write(`
        <html>
            <head>
                <title>Certificate</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        text-align: center;
                        padding: 20px;
                    }
                    .certificate-content {
                        border: 5px solid #4CAF50;
                        padding: 20px;
                        margin: 20px;
                    }
                </style>
            </head>
            <body>
                ${certificateClone.innerHTML}
            </body>
        </html>
    `);
    pdfWindow.document.close();
    pdfWindow.print(); // Automatically trigger the print dialog
}
