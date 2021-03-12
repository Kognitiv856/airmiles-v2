
const uspCards = document.querySelectorAll('.usp__card__desk');
const mobileImage = document.querySelector('.mobile__image');


$(document).ready(function() {
    $("#mobile-slider").owlCarousel({
        items: 1,
        loop: true,
        margin: 20,
        dotsData: true
    });
});



function toggleCard(e) {

    const src = e.currentTarget.dataset.src;
    
    mobileImage.src = null;
    uspCards.forEach(card => card.classList.remove('active'));


    e.currentTarget.classList.add('active');
    mobileImage.src = src;

    }



uspCards.forEach(card => card.addEventListener('click', toggleCard));
uspCards.forEach(card => card.addEventListener('mouseover', toggleCard));


document.querySelector('.card__one').click();




