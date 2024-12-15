const inputBox = document.querySelector('.input-box');
const listContainer = document.querySelector('.list-container');
const form = document.querySelector('#form')


//render
function render() {
    if (inputBox.value === '') {
        alert('add texto')
    } else {
        const li = document.createElement('li')
        li.innerHTML = inputBox.value
        listContainer.appendChild(li)

        const btnDelete = document.createElement('span')
        btnDelete.innerHTML = '\u00d7';
        li.appendChild(btnDelete)
    }

    inputBox.value = '';

    saveData();

}

//tarefa concluida
function cheked(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('cheked')
    }
    
    saveData()
}

//deletar tarefa
function removeTask(e) {
    if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
    }

    saveData()
}

//salvar os dados na local storage
function saveData() {
    localStorage.setItem('data', listContainer.innerHTML)
}

//renderisadr os dados da local storage
function showData() {
    listContainer.innerHTML = localStorage.getItem('data')
}; showData();


//Eventos

listContainer.addEventListener('click', function stats(e) {
    cheked(e)
    removeTask(e)
}, false)

form.addEventListener('submit', function addTask(e) {
    e.preventDefault();
    render()
});


