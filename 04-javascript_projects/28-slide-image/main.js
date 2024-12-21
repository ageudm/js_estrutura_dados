/*--------------------------------/
    VARIAVEIS E CONFIGURAÇÃO
/--------------------------------*/

const track = document.querySelector('.carrocel-track');
const dotsNav = document.querySelector('.carrocel-nav');
const prevButton = document.querySelector('.left');
const nextButton = document.querySelector('.right');

const slides = Array.from(track.children);
const dots = Array.from(dotsNav.children);

/*--------------------------------/
LARGURA E PISICIONAMENTO DO SLIDE
/--------------------------------*/

// Pegar a largura do slide
const slideWidth = slides[0].getBoundingClientRect().width;

// posicionar o slide
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px'
}; slides.forEach(setSlidePosition);


/*--------------------------------/
MOVER O SLIDE
/--------------------------------*/

const moveSlide =(track, curentSlide, targetSlide) => {
    const amountToMove = targetSlide.style.left;
    track.style.transform = `translateX(-${amountToMove})`;
    curentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}


/*--------------------------------/
ANIMATE DOTS
/--------------------------------*/
const animateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-dot-slide');
    targetDot.classList.add('current-dot-slide');
}


const hiddeArrowControl = (slides, prevButton, nextButton, targetIndex) => {
    if(targetIndex === 0) {
        prevButton.classList.add('is-hiden');
        nextButton.classList.remove('is-hiden')
    } else if (targetIndex === slides.length - 1) {
        prevButton.classList.remove('is-hiden');
        nextButton.classList.add('is-hiden')
    } else {
        prevButton.classList.remove('is-hiden');
        nextButton.classList.remove('is-hiden')
    }
}

/*--------------------------------/
EVENTOS DE CLICK PARA NEXT SLIDE E PREV SLIDE
/--------------------------------*/

prevButton.addEventListener('click', () => {
    const curentSlide = track.querySelector('.current-slide');
    const prevSlide = curentSlide.previousElementSibling;
    const currentDot = dotsNav.querySelector('.current-dot-slide');
    const nextDot = currentDot.previousElementSibling;
    const nextIndex = slides.findIndex(slide => slide === prevSlide)

    moveSlide(track, curentSlide, prevSlide)
    animateDots(currentDot, nextDot)
    hiddeArrowControl(slides, prevButton, nextButton, nextIndex);
})


nextButton.addEventListener('click', () => {
    const curentSlide = track.querySelector('.current-slide');
    const nextSlide = curentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector('.current-dot-slide');
    const nextDot = currentDot.nextElementSibling;
    const prevIndex = slides.findIndex(slide => slide === nextSlide)

    moveSlide(track, curentSlide, nextSlide)
    animateDots(currentDot, nextDot)
    hiddeArrowControl(slides, prevButton, nextButton, prevIndex);
})


/*--------------------------------/
MOVER O SLIDE COM OS DOTD
/--------------------------------*/
dotsNav.addEventListener('click', e => {
    const targetDot = e.target.closest('button');
    
    if(!targetDot) return;

    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotsNav.querySelector('.current-dot-slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];

    moveSlide(track, currentSlide, targetSlide);
    animateDots(currentDot, targetDot)
    hiddeArrowControl(slides, prevButton, nextButton, targetIndex);

});