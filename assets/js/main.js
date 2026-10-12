/* Find all slides in the carousel */
/* знайдемо всі слайди з класом .slide */
const slides = document.querySelectorAll(".slide");

//console.log(slides);

/* Find the previous and next buttons */
/* знайдемо кнопки керування */
const prevButton = document.querySelector(".arrow-prev");
const nextButton = document.querySelector(".arrow-next");

/* Find the container where pagination dots will be added */
/* знайдемо контейнер з пагинацією, куди ми додамо точки */
const pagination = document.querySelector(".pagination");

/* Store the index of the currently visible slide */
/* наш перший слайд має індекс 0  */
let currentIndex = 0;

/* Create one pagination dot for every slide */
/* створимо одну точку пагінації для кожного слайду */
slides.forEach((slide, index) => {
    // Create a new button element
    // створили одну точку
    const dot = document.createElement("button");

    // add class to dot
    // додали класс до точки
    dot.classList.add("dot");

    // add attribute to dot
    dot.setAttribute("aria-label", `Go to slide ${index + 1}`);

    // add active to  first dot if index = 0
    // якщо індекс дорівнює 0. зробили точку активною , тобто перший слайд
    if (index === 0) {
        dot.classList.add("active");
    }

    //when dot clicked show next or prev slide
    //коли натиснули на точку показали відповідний слайд, для цього створимо фукцію і передамо туди індекс
    dot.addEventListener("click", () => {
        showSlide(index);
    });

    //to pagination container add all dots
    //до контейнеру з пагінацією додамо усі точки
    pagination.appendChild(dot);
});

/* Get all pagination dots after creating them */
/* знайдемо усі точки пагінації після створення */
const dots = document.querySelectorAll(".dot");

/* Function responsible for changing the active slide */
/* створимо фукцію, що буде керувати активним слайдом */
function showSlide(index) {
    // Remove the active class from every slide and dot
    // видаляємо класс active з усіх точок та слайдів
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    dots.forEach((dot) => {
        dot.classList.remove("active");
    });

    // Save the index of the slide we want to display
    // зберігаємо індейс слайду, який хочемо відобразити
    currentIndex = index;

    // Add the active class to the selected slide
    // лише слайд з таким індексом робим активним
    slides[currentIndex].classList.add("active");

    // Highlight the matching pagination dot
    // лише відповідну точку ми підсвітимо
    dots[currentIndex].classList.add("active");
}

/* Show the next slide when the next button is clicked */
/* покажемо наступний слайд по кліку на кнопку */
nextButton.addEventListener("click", () => {
    // next index
    // порахуємо індейс наступного слайду
    let nextIndex = currentIndex + 1;

    // If we reach the last slide, return to the first
    // якщо індекс наступного слайду останній, ми візьмемо перший слайд з індексом 0
    if (nextIndex >= slides.length) {
        nextIndex = 0;
    }

    //display next slide
    //покажемо наступний слайд
    showSlide(nextIndex);
});

/* Show the prev slide when the prev button is clicked */
/* покажемо попередній слайд по кліку на кнопку */
prevButton.addEventListener("click", () => {
    // prev index
    // порахуємо індейс попереднього слайду
    let prevIndex = currentIndex - 1;

    // If we reach the first slide, we go to the last
    // якщо індекс поперднього слайду перший, ми візьмемо останній слайд
    if (prevIndex < 0) {
        prevIndex = slides.length - 1;
    }

    //display next slide
    //покажемо наступний слайд
    showSlide(prevIndex);
});

/* Automatically switch to the next slide every 1 second */
/* автоматично перемикаємо слайди кожну секунду */
setInterval(() => {
    let nextIndex = currentIndex + 1;

    if (nextIndex >= slides.length) {
        nextIndex = 0;
    }

    showSlide(nextIndex);
}, 100000);
