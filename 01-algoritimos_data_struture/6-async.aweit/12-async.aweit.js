/**************************************************************************************
  LOGICA DA DECLARAÇÃO DO OBJECTO PROMISSE
***************************************************************************/

function primeirafuncion() {
    return new Promise((result) => {
        setTimeout(() => {
            console.log('Primeira funcção', result());
        }, 2000);
    })
}


/**************************************************************************************
  LOGICA DA DECLARAÇÃO DE UMA FUNÇÃO ASYNC AWAIT
***************************************************************************/
async function segundafunction() {
    console.log('niciar');

    await primeirafuncion()

    console.log('terminar');
}; 

// segundafunction()


/**************************************************************************************
  PRATICA DA FUNÇÃO ASYNC
***************************************************************************/

const data = [
    {
        id: 1,
        nome: 'Ageu Miguel',
        idade: 30,
        cidade: 'Luanda'
    },
    {
        id: 2,
        nome: 'Ageu Miguel',
        idade: 30,
        cidade: 'Luanda'
    }
]


function getUser(id) {
    return fetch(id) //Aqui vai a url de uma API
    .then((data) => data)
    .catch((err) => console.log(err))
}

async function showUser(id) {
    try {
        const user = await getUser(id)
        console.log(user);
        console.log(data[id]);
    } catch (err) {
        console.log('Erro', err);
    }
}; 
showUser(0) 
