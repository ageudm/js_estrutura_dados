
// Metodo para selecionar um elemento
function $(selector) {
    const selectElem = document.querySelector(`${selector}`);
    if (selectElem) {
      return selectElem;
    }

    throw new Error(
      `Ops, "${selector}" Este selector não exite`
    );
}


// Metodo para selecioar varios elementos
function $$(selector) {
    const selectElem = document.querySelectorAll(`${selector}`);
    if (selectElem) {
      return selectElem;
    }

    throw new Error(
      `Ops, "${selector}" Este selector não exite`
    );
}


$$('.acordion-item').forEach((acordion) => {
  acordion.querySelector('.acordion-header').addEventListener('click', () => {
    $$('.acordion-item').forEach((item) => {
      if(item !== acordion) {
        item.classList.remove('open')
      }
    });
    acordion.classList.toggle('open')
  })
})