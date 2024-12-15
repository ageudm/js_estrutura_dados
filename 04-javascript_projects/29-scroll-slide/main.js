const slideContainer = document.querySelector('.gallery');
const nextButton = document.querySelector('.arrow-right')
const prevButton = document.querySelector('.arrow-left')


slideContainer.addEventListener('wheel', (evt) => {
    evt.preventDefault()
    slideContainer.style.scrollBehavior = 'auto';
    slideContainer.scrollLeft += evt.deltaY;
})

const itemWidth = document.querySelector('.gallery img').getBoundingClientRect().right;
console.log(itemWidth);

nextButton.addEventListener('click', () => {
    slideContainer.style.scrollBehavior = 'smooth'
    slideContainer.scrollLeft += itemWidth;
})

prevButton.addEventListener('click', () => {
    slideContainer.style.scrollBehavior = 'smooth'
    slideContainer.scrollLeft -= itemWidth;
})