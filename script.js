const carousel = document.getElementById('carousel');
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;
let currentIndex = 0;
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

function updateCarousel() {
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Move to the next item
function moveNext() {
  currentIndex = (currentIndex + 1) % totalItems;
  updateCarousel();
}

// Move to the previous item
function movePrev() {
  currentIndex = (currentIndex - 1 + totalItems) % totalItems;
  updateCarousel();
}

// Add click event listeners to the buttons
nextBtn.addEventListener('click', moveNext);
prevBtn.addEventListener('click', movePrev);

// Automatically move the carousel every 3 seconds
setInterval(moveNext, 5000);
