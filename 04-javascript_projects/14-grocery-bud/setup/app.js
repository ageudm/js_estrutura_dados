// ****** SELECT ITEMS **********
const form = document.querySelector('.grocery-form');
const alert = document.querySelector('.alert');
const grocery = document.getElementById('grocery');
const submit = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');

// edit option
let editElement;
let editFlag = false;
let editID = "";


// ****** FUNCTIONS *****************************************************************************************
// Dcionar item
let addItem = (e) => {
    e.preventDefault();
    const value = grocery.value;
    const id = new Date().getTime().toString();

    // condição para adcionar item na lista

    // if(value !== "" && editFlag === false) {
    //     console.log('add atem to the lidt');
    // }
    // else if(value !== "" && editFlag === true) {
    //     console.log('editing');
    // }
    // else {
    //     console.log('is empyt');
    // }

    // forma simplificada da codição para add item na lista
    if(value && !editFlag) {
        // criar elemento
        createItemList(id, value)
        // add alert success
        diplayAlert('Text adcionado', 'success')
        // show container
        container.classList.add('show-container')
        // add to local storage
        addToLocalStorage(id, value)
        // resetar o formulario
        setBackDefult();    
        
    } else if(value && editFlag) {
        editElement.innerHTML = value;
        diplayAlert('Editado com sucesso', 'success');
        // editar na local storagr
        editLocalStorage(editID, value)
        setBackDefult();
    } else {
        diplayAlert('Adcionar texto', 'danger')
    }
}



// Delectar elemento
deleteItem = (e) => {
    const curentitem = e.currentTarget.parentElement.parentElement;
    list.removeChild(curentitem)
    // selecionar o id do item
    const id = curentitem.dataset.id;
    // condição visual depois de remover todos item
    if(list.children.length === 0) {
        container.classList.remove('show-container');
        localStorage.removeItem("list");
    }

    diplayAlert('Item removido', 'danger')
    setBackDefult();
    // remover o elemento da local sotorage
    removeFromLocalStorage(id);
}

// editar elemento
editItem = (e) => {
    const curentitem = e.currentTarget.parentElement.parentElement;
    editElement = e.currentTarget.parentElement.previousElementSibling;
    // add o texto ao formulario para ser editado
    grocery.value = editElement.innerHTML;
    editFlag = true;
    editID = curentitem.dataset.id;
    submit.textContent = 'Editar'
}

// alert function
const diplayAlert = (text, action) => {
    alert.textContent = text;
    alert.classList.add(`alert-${action}`)

    // remover alert
    setTimeout(() => {
        alert.textContent = "";
        alert.classList.remove(`alert-${action}`)
    }, 1000);
}

// limpar formulario
const setBackDefult = () => {
    grocery.value = "";
    editFlag = false;
    editID = "";
    submit.textContent = 'Submit'
}

// Remover todos os items da lista
const clearAllitems  = () => {
    const item = document.querySelectorAll('.grocery-item');
    if(item.length > 0) {
        item.forEach((item) => {
            list.removeChild(item)
        })
    }

    container.classList.remove('show-container');
    diplayAlert('Lista vasia', 'danger');
    setBackDefult();
    localStorage.removeItem("list")
}

createItemList = (id, value) => {
    // criar alemento
    const element = document.createElement('article')
    element.classList.add('grocery-item')
    // criar um atributo
    const attr = document.createAttribute('data-id')
    attr.value = id
    // add atributo ao elemento
    element.setAttributeNode(attr)
    // add html ao article
    element.innerHTML =
    `<p class="title">${value}</p>
        <div class="btn-container">
          <button type="button" class="edit-btn">
            <i class="fas fa-edit"></i>
          </button>
          <button type="button" class="delete-btn">
            <i class="fas fa-trash"></i>
          </button>
        </div>`;

    // btn deletar item
    const deleteBtn = element.querySelector('.delete-btn')
    deleteBtn.addEventListener('click', deleteItem)
    // btn editar item
    const editbtn = element.querySelector('.edit-btn')
    editbtn.addEventListener('click', editItem)

    // add article na lista
    list.appendChild(element);
}


    // ****** EVENT LISTENERS **********************************************************************************
form.addEventListener('submit', addItem);
clearBtn.addEventListener('click', clearAllitems);


// ****** LOCAL STORAGE ****************************************************************************************
// add item na locala storage
addToLocalStorage = (id, value) => {
    const grocery = {id, value};
    // pegar os dados da local storage
    let items = getLocalStorage();

    // add items
    items.push(grocery);
    localStorage.setItem("list", JSON.stringify(items))

    console.log(items);
}

// remover item na local stoarge
removeFromLocalStorage = (id) => {
    let items = getLocalStorage();

    // filrar item
    items = items.filter((item) => {
        if(item.id !== id) {
            return item;
        }
    });

    localStorage.setItem("list", JSON.stringify(items));
}

// editar conteudo na localaStorage
editLocalStorage = (id, value) => {
    let items = getLocalStorage();
    items = items.map((item) => {
        if(item.id === id) {
            item.value = value;
        }

        return item;
    })

    localStorage.setItem("list", JSON.stringify(items));
}

getLocalStorage = () => {
    const items = localStorage.getItem("list") 
    ? JSON.parse(localStorage.getItem("list"))
    : [];

    return items;
}

// renderizar dados da local storage
setupItems = () => {
    let items = getLocalStorage();

    if(items.length > 0) {
        items.forEach((item) => {
            createItemList(item.id, item.value)
        })

        container.classList.add('show-container')
    }
}

window.addEventListener('DOMContentLoaded', setupItems);

//LOGICA DA LOCAL STORAGE
// localStorage.setItem('pessoa', JSON.stringify([{name: 'ageu'}, {idade: 23}]))
// const pessoa = JSON.parse(localStorage.getItem('pessoa'))
// console.log(pessoa);


// ****** SETUP ITEMS **********


// ===========FAZER TESTE DA LOGICA ========================
// let logicTest1 = Boolean(grocery.value && !editFlag)
// let logicTest2 = Boolean(grocery.value && editFlag)
// console.log(logicTest2);