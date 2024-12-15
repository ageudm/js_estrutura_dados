const tabContainer = document.querySelector('.tabs');
const tablist = document.querySelectorAll('.tabs .tab')
const btnLeft = document.querySelector('.icon-left');
const btnRight = document.querySelector('.icon-right');


let isDragging = false;


// const removeActive = () => {
//     const activeTab = tabContainer.querySelector('.active');
//     activeTab.classList.remove('active')
// };

// tablist.forEach((tab) => {
//     tab.addEventListener('click', () => {
//         removeActive();
//         tab.classList.add('active');
//     });
// })



const drag = (e) => {
    if(!isDragging) return;
    tabContainer.classList.add('dragging')
    tabContainer.scrollLeft -= e.movementX;
    setTimeout(() => toggleControls(), 40)
};


const activeDrag = () => {
    isDragging = true;
    tabContainer.classList.add('dragging')
}


const dragStop = () => {
    isDragging = false;
    tabContainer.classList.remove('dragging');
};

const left = () => {
    tabContainer.scrollLeft -= 200;
    setTimeout(() => toggleControls(), 40)
};

const right = () => {
    tabContainer.scrollLeft += 200;
    setTimeout(() => toggleControls(), 40)
};

const toggleControls = () => {
    let scrollValue = tabContainer.scrollLeft;
    let maxWidth = tabContainer.scrollWidth - tabContainer.clientWidth;

    if (scrollValue > 0) {
       btnLeft.style.display = 'flex';
    } else {
        btnLeft.style.display = 'none';
    }

    if (maxWidth > scrollValue) {
        btnRight.style.display = 'flex'
    } else {
        btnRight.style.display = 'none'

    }
};



btnLeft.addEventListener('click', left);
btnRight.addEventListener('click', right)

tabContainer.addEventListener('mousedown', activeDrag)
tabContainer.addEventListener('mousemove', drag)
tabContainer.addEventListener('mouseup', dragStop)
