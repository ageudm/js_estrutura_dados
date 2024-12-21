//Book class
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}




// UI Class

class Ui {
    static displayBooks() {
        // const StoradBooks = [
        //     {
        //         title: 'Vitoria',
        //         author: 'Ageu Migule',
        //         isbn: '11111'
                
        //     },
        //     {
        //         title: 'Vitoria',
        //         author: 'Ageu Migule',
        //         isbn: '11111'
                
        //     }
        // ];

        const books = Store.getBooks();
        books.forEach((book) => {
            Ui.addBookList(book)
        })
    }

    static addBookList(book) {
        const list = document.querySelector('#book-list');
        const row = document.createElement('tr')
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><button class="btn btn-delete btn-primary">x</button></td>
        `;

        list.appendChild(row);


    }

    static deleteBook(el) {
        if(el.classList.contains('btn-delete')) {
            el.parentElement.parentElement.remove()
            Ui.showAlert('Livro removido', 'removed')
        }
    }

    static showAlert(message, className) {
        const alertDiv = document.createElement(   'div')
        alertDiv.className = `shwo-alert ${className}`
        alertDiv.appendChild(document.createTextNode(message))

        //const container = document.querySelector('container')
        const form = document.querySelector('.form-book')

        form.prepend(alertDiv)

        setTimeout(() => {
            alertDiv.remove()
        }, 2000);
    }

    static clearForm() {
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';
        document.querySelector('#title').focus();
    }
}

// Storage Class
class Store {
    static getBooks() {
        let books;

        if(localStorage.getItem('books') === null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'))
        }

        return books;
    }

    static addBook(book) {
        const books = Store.getBooks();
        books.push(book)
        localStorage.setItem('books', JSON.stringify(books))
    }

    static removeBook(isbn) {
        const books = Store.getBooks();
        books.forEach((book, index) => {
            if(book.isbn === isbn) {
                books.splice(index, 1)
            }
        });

        localStorage.setItem('books', JSON.stringify(books))
    }

}



// Event Display Books
document.addEventListener('DOMContentLoaded', Ui.displayBooks)

// Event Add Books
document.querySelector('.form-book').addEventListener('submit', (e) => {
    e.preventDefault();

    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;

    if(title === '' || author === '' || isbn === '') {
       Ui.showAlert('Porfavor insira algun texto', 'notText')
    } else {
        const book = new Book(title, author, isbn);

        Ui.addBookList(book);

        Store.addBook(book);

        Ui.showAlert('Livro adcinado', 'adcionado')
    
        Ui.clearForm();
    }


}) 

// Event Remove Books
document.querySelector('.book-list').addEventListener('click', (e) => {
    Ui.deleteBook(e.target)

    Store.removeBook(e.target.parentElement.previousElementSibling.textContent)
})

