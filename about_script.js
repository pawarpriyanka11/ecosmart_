// Function to show more information
function showInfo() {
    const infoSection = document.querySelector('.info-section');
    infoSection.classList.remove('hidden');
    infoSection.classList.add('show');
    document.getElementById('learn-more-btn').style.display = 'none';
    document.getElementById('hide-info-btn').style.display = 'inline-block';
}

// Function to hide the information
function hideInfo() {
    const infoSection = document.querySelector('.info-section');
    infoSection.classList.remove('show');
    setTimeout(() => {
        infoSection.classList.add('hidden');
    }, 300);
    document.getElementById('hide-info-btn').style.display = 'none';
    document.getElementById('learn-more-btn').style.display = 'inline-block';
}

// Event listeners for buttons
document.getElementById('learn-more-btn').addEventListener('click', showInfo);
document.getElementById('hide-info-btn').addEventListener('click', hideInfo);

// Slideshow functionality
let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.querySelectorAll('.slides');
    slides.forEach((slide, index) => {
        slide.style.display = index === slideIndex ? 'block' : 'none'; // Show only the current slide
    });
    slideIndex = (slideIndex + 1) % slides.length; // Cycle through slides
    setTimeout(showSlides, 4000); // Change slide every 4 seconds
}
