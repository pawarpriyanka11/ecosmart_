document.addEventListener('DOMContentLoaded', () => {
    const resourceLinks = document.querySelectorAll('.resource-link');

    resourceLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent the default link behavior
            const url = link.getAttribute('data-url'); // Get the URL from the data attribute
            window.open(url, '_blank'); // Open the URL in a new tab
        });
    });
});
