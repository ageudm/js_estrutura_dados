//using selectors inside the element
// traversing the dom
const doc = document; //objecto document

/*
const btns = d.querySelectorAll('.question-btn');

//criar o acordion usando o metodo toggle
btns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        const acordion = e.currentTarget.parentElement.parentElement;
        acordion.classList.toggle('show-text')
        
    })
})

*/


const questions = doc.querySelectorAll('.question');

questions.forEach(function(question) {
    const btn = question.querySelector('.question-btn');
    btn.addEventListener('click', function() {
        questions.forEach(function(item) {
            if (item !== question) {
                item.classList.remove('show-text')
            }
        });

        question.classList.toggle('show-text')
    })
})

