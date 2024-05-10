document.addEventListener('DOMContentLoaded', function() {
const slideImg = document.getElementById('slideImg');

const aboutSlideImages = [
    'img/aboutus1.jpeg',
    'img/aboutus2.avif',
    'img/aboutus3.jpeg',
    'img/aboutus4.webp',
]

let i = 0;
setInterval(() => {
    slideImg.src = aboutSlideImages[i];
    i = (i + 1) % aboutSlideImages.length;
}, 3000);

let popup = document.getElementById('popup');

function showPopup() {
    popup.style.display = 'flex';
}

function closePopup() {
    popup.style.display = 'none';
}
localStorage.getItem('popup') !== 'closed' && showPopup();
setTimeout(() => {
    closePopup();
    localStorage.setItem('popup', 'closed');
}, 5000);
});