/* Find all slides in the carousel */
const slides = document.querySelectorAll(".slide");

/* Find the previous and next buttons */
const prevButton = document.querySelector(".arrow-prev");
const nextButton = document.querySelector(".arrow-next");

/* Find the container where pagination dots will be added */
const pagination = document.querySelector(".pagination");

/* Store the index of the currently visible slide */
let currentIndex = 0;

/* Create one pagination dot for every slide */
slides.forEach((slide, index) => {
    // Create a new button element
    const dot = document.createElement("button");

    // Add the CSS class used to style the dot
    dot.classList.add("dot");

    // Add an accessible label for screen readers
    dot.setAttribute("aria-label", `Go to slide ${index + 1}`);

    // Highlight the first dot because the first slide is active
    if (index === 0) {
        dot.classList.add("active");
    }

    // When a dot is clicked, show its corresponding slide
    dot.addEventListener("click", () => {
        showSlide(index);
    });

    // Add the dot to the pagination container
    pagination.appendChild(dot);
});

/* Get all pagination dots after creating them */
const dots = document.querySelectorAll(".dot");

/* Function responsible for changing the active slide */
function showSlide(index) {
    // Remove the active class from every slide and dot
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    dots.forEach((dot) => {
        dot.classList.remove("active");
    });

    // Save the index of the slide we want to display
    currentIndex = index;

    // Add the active class to the selected slide
    slides[currentIndex].classList.add("active");

    // Highlight the matching pagination dot
    dots[currentIndex].classList.add("active");
}

/* Show the next slide when the next button is clicked */
nextButton.addEventListener("click", () => {
    // Move to the next index
    let nextIndex = currentIndex + 1;

    // If we reach the last slide, return to the first
    if (nextIndex >= slides.length) {
        nextIndex = 0;
    }

    // Display the new slide
    showSlide(nextIndex);
});

/* Show the previous slide when the previous button is clicked */
prevButton.addEventListener("click", () => {
    // Move to the previous index
    let prevIndex = currentIndex - 1;

    // If we move before the first slide, go to the last
    if (prevIndex < 0) {
        prevIndex = slides.length - 1;
    }

    // Display the new slide
    showSlide(prevIndex);
});

/* Automatically switch to the next slide every 5 seconds */
setInterval(() => {
    // Calculate the index of the next slide
    let nextIndex = currentIndex + 1;

    // Return to the first slide when we reach the end
    if (nextIndex >= slides.length) {
        nextIndex = 0;
    }

    // Display the next slide with the fade animation
    showSlide(nextIndex);
}, 10000); // 10000 milliseconds = 10 seconds
