// Carousel functionality
const track = document.getElementById("track");
const slides = document.querySelectorAll(".carousel-track img");
const totalSlides = slides.length;
const dotsContainer = document.getElementById("dots");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

let currentIndex = 0;

// Create dots dynamically
slides.forEach((_, index) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    if (index === 0) dot.classList.add("active");
    dot.addEventListener("click", () => goToSlide(index));
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

function updateCarousel() {
    track.style.transform = `translateX(${-currentIndex * 1428}px)`;
    dots.forEach(dot => dot.classList.remove("active"));
    dots[currentIndex].classList.add("active");
}

function goToSlide(index) {
    currentIndex = index;
    updateCarousel();
    resetAutoplay();
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
    resetAutoplay();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateCarousel();
    resetAutoplay();
}

// Event listeners
nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", prevSlide);

// Auto-slide functionality
let autoplayInterval = setInterval(nextSlide, 3000);

function resetAutoplay() {
    clearInterval(autoplayInterval);
    autoplayInterval = setInterval(nextSlide, 3000);
}

// Ensure the track width is large enough for all images
track.style.width = `${totalSlides * 1428}px`;

// FAQ Accordion functionality
const allQuestions = document.querySelectorAll('.ques');

allQuestions.forEach(question => {
    question.addEventListener('click', function() {
        // Remove active class from all questions except the clicked one
        allQuestions.forEach(q => {
            if (q !== question) {
                q.classList.remove('active');
            }
        });
        
        // Toggle active class on clicked question
        this.classList.toggle('active');
    });
});

function toggleFAQ(element) {
    let answer = element.nextElementSibling;
    let arrow = element.querySelector('.arrow');

    if (answer.style.display === "block") {
        answer.style.display = "none";
        arrow.style.transform = "rotate(0deg)";
    } else {
        answer.style.display = "block";
        arrow.style.transform = "rotate(180deg)";
    }
}


