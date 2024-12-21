
/**=============================SHOW MOBILE MENU========================== */
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);
    
    toggle.addEventListener('click', () => {
        nav.classList.toggle('show-menu');
        toggle.classList.toggle('show-icon');
    })
    
}; showMenu('nav-toggle', 'nav-menu')

/**=============================SHOW DROPDOWN MENU========================== */
// 1 selecionar todos os item do menu que tem o dropdown
const dropdownItem = document.querySelectorAll('.dropdown-item');

// 2 manipular cada item com o metodo foreach
dropdownItem.forEach((item) => {
    // selecionar os button
    const dropdownButton = item.querySelector('.dropdown-button')
    // atribuir os eventos ao dropdownButton
    dropdownButton.addEventListener('click', () => {
        // selesionar o elemento que contem a classe para feichar apos clicar no proximo dropdown
        const showDropdown = document.querySelector('.show-dropdonw')

        // excução da função toggle
        toggleItem(item);

        // condição para fechar o ietem aberto depois de clicar no outro
        if (showDropdown && showDropdown != item) {
            toggleItem(showDropdown)
        }

    })
});

// 3 criar a função toggleItem
const toggleItem = (item) => {
    const dropdownContainer = item.querySelector('.dropdown-container');

    // criar a coondição pata toggle
    if (item.classList.contains('show-dropdonw')) {
        dropdownContainer.removeAttribute('style');
        item.classList.remove('show-dropdonw');
    } else {
        dropdownContainer.style.height = dropdownContainer.scrollHeight + 'px';
        item.classList.add('show-dropdonw');
    }

};

// remover o dropdown ao diminuri o tamanho
const mediaQuery = matchMedia('(min-width: 765px)'),
    dropdownContainer = document.querySelectorAll('.dropdown-container');

const removeStyle = () => {
    if (mediaQuery.matches) {
        dropdownContainer.forEach((e) => {
            e.removeAttribute('style')
        })

        dropdownContainer.forEach((e) => {
            e.classList.remove('show-dropdonw')
        })
    }
};

addEventListener('resize', removeStyle);
