// Objecto navbar
function Navbar ({toggleMenu, toggleIcon, navMenu}) {
    this.toggleMenu = toggleMenu;
    this.toggleIcon = toggleIcon;
    this.navMenu = navMenu;

    this.navToggle = () => {
        document.querySelector(`${toggleMenu}`).addEventListener('click', () => {
            const toggleBtn = document.querySelector(`${toggleIcon}`);

            if(toggleBtn.classList.contains('ri-menu-line')) {
                toggleBtn.classList.replace('ri-menu-line', 'ri-close-circle-line')
            } else {
                toggleBtn.classList.replace('ri-close-circle-line', 'ri-menu-line')
            }

            document.querySelector(`${navMenu}`).classList.toggle('open-menu')
        })
    }
};

const navBar = new Navbar({
    toggleMenu: '#toggle-menu',
    toggleIcon: '#toggle-icon',
    navMenu: '#nav-menu'
}).navToggle();

