// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {

    // Selecting the buttons and info section
    const learnMoreBtn = document.getElementById('learn-more-btn');
    const infoSection = document.getElementById('info-section');
    const hideInfoBtn = document.getElementById('hide-info-btn');

    // Event listener for the 'Learn More' button
    learnMoreBtn.addEventListener('click', function() {
        infoSection.classList.remove('hidden');  // Show the info section
        learnMoreBtn.style.display = 'none';  // Hide the 'Learn More' button
    });

    // Event listener for the 'Hide Info' button
    hideInfoBtn.addEventListener('click', function() {
        infoSection.classList.add('hidden');  // Hide the info section
        learnMoreBtn.style.display = 'block';  // Show the 'Learn More' button again
    });

});
let slideIndex=0;
showSlides();
function showSlides()
{
   let slides=document.getElementsByClassName("slides");
   for(let i=0;i<slides.length;i++)
   {
    slides[i].style.display="block";
   }
   slideIndex++;
   if(slideIndex >slides.length)
   {
    slideIndex=1;
   }
   slides[slideIndex-1].style.display="block";
   setTimeout(showSlides,3000);
}

// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {

    // Slideshow variables
    let slideIndex = 0;
    const slides = document.getElementsByClassName("slides");
    
    // Function to display the current slide
    function showSlides() {
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  // Hide all slides
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        slides[slideIndex - 1].style.display = "block"; // Display the current slide
        setTimeout(showSlides, 3000); // Change image every 3 seconds
    }

    // Start the slideshow when the page loads
    showSlides();
});
