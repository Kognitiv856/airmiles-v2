
const uspCards = document.querySelectorAll('.usp__card__desk');
const mobileImage = document.querySelector('.mobile__image');
const translatableText = document.querySelectorAll('.translatable');
const translateBtns = document.querySelectorAll('.language-toggle');


$(document).ready(function() {
    $("#mobile-slider").owlCarousel({
        items: 1,
        loop: true,
        margin: 20,
        dotsData: true
    });
});


function changeLanguage(e) {

    translateBtns.forEach(btn => btn.classList.remove('highlight'));

    e.currentTarget.classList.add('highlight');

    translatableText.forEach(textItem => {
        
        const returnLang = languages.find(function(langItem) {
            return langItem.id === textItem.id;
        })

        if (e.currentTarget.id === 'arab') {
            textItem.innerHTML = returnLang.arabicText;
        } else {
            textItem.innerHTML = returnLang.englishText;
        }
    })
}



function toggleCard(e) {
    const src = e.currentTarget.dataset.src;
    mobileImage.src = null;
    uspCards.forEach(card => card.classList.remove('active'));
    e.currentTarget.classList.add('active');
    mobileImage.src = src;
    }



uspCards.forEach(card => card.addEventListener('click', toggleCard));
uspCards.forEach(card => card.addEventListener('mouseover', toggleCard));
translateBtns.forEach(btn => btn.addEventListener('click', changeLanguage));


document.querySelector('.card__one').click();
document.getElementById('eng').click();




