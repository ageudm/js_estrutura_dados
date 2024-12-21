// Este aplicativo demostara a tecnica para criar um contador com botões que difinem o valor maximo ou minimo a ser apresentado na tela

// selecção dos elementos a serem amanipulados
let count = 0;
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');


// usando o metodo foreach para navegar entre os elementos da lista de btns e atribuir um evento
btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const styles = e.currentTarget.classList;

        // Aumentar o valor
        if (styles.contains('decrease')) {
            count--;
        } else if (styles.contains('increase')) {
            count++;
        } else {
            count = 0;
        }

        // mudar a cor do valor emfunção do estado
        if (count > 0) {
            value.style.color = 'green';
        } else if (count < 0) {
            value.style.color = 'red';
        } else {
            value.style.color = '#222'
        }

        // Mudar o valor na tela
        value.textContent = count;
    })
});


// Elemntos de estudo
// forEach()
// Event (e) object
// if and else if
// textContent





// console.log(btns);