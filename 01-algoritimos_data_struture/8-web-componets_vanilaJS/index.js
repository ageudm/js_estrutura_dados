
const dados = {
    name: 'Ageu Miguel'
}

// ESTRUTURA BASE PARA CRIAÇÃO DE COMPONET
class FarstComponet extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = `
        <div class="card">
            <h2>${dados.name}</h2>
        </div>`
    }
};

customElements.define('farst-componet', FarstComponet)