
const wrapper = document.querySelector('.wrapper');
const carrocel = document.querySelector('.carrocel');
const controls = document.querySelectorAll('.icon');

const cardWidth = carrocel.querySelector('.card').offsetWidth;
let isDragging = false;
let startX, startScrollLeft;

let carrocelChildren = [...carrocel.children];
let cardPreview = Math.round(carrocel.offsetWidth / cardWidth)

let isAutoPlay = true;
let timeoutId;


carrocelChildren
.slice(-cardPreview)
.reverse()
.forEach((card) => {
    carrocel.insertAdjacentHTML('afterbegin', card.outerHTML)
});

carrocelChildren
.slice(0, cardPreview)
.forEach((card) => {
    carrocel.insertAdjacentHTML('beforeend', card.outerHTML)
})


controls.forEach((control) => {
    control.addEventListener('click', () => {
        carrocel.scrollLeft += control.id == 'left' ? -cardWidth : cardWidth;
    })
});


let dragStart = (e) => {
    isDragging = true;
    carrocel.classList.add('dragging')

    startX = e.pageX;
    startScrollLeft = carrocel.scrollLeft;
}


let dragging = (e) => {
    if(!isDragging) return;
    carrocel.scrollLeft = startScrollLeft - (e.pageX - startX);
}; 


let dragStop = () => {
    isDragging = false;

    carrocel.classList.remove('dragging')
}

let infinitScroll = () => {
    if (carrocel.scrollLeft === 0) {
        carrocel.classList.add('no-transition')
        carrocel.scrollLeft = carrocel.scrollWidth - 2 * carrocel.offsetWidth;
        carrocel.classList.remove('no-transition')
        
    } else if (Math.ceil(carrocel.scrollLeft) === carrocel.scrollWidth - carrocel.offsetWidth) {
        carrocel.classList.add('no-transition')
        carrocel.scrollLeft = carrocel.offsetWidth;
        carrocel.classList.remove('no-transition')
    }
}

let autoPlay = () => {
    if (window.innerWidth < 800 || !isAutoPlay) return;

    timeoutId = setInterval(() => {
        carrocel.scrollLeft += cardWidth;
    }, 2500);
    
}; autoPlay();



carrocel.addEventListener('mousedown', dragStart)
carrocel.addEventListener('mousemove', dragging)
document.addEventListener('mouseup', dragStop)
carrocel.addEventListener('scroll', infinitScroll)
wrapper.addEventListener('mouseenter', () => clearInterval(timeoutId));
wrapper.addEventListener('mouseleave', autoPlay)
