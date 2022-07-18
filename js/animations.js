const buttonOpenTask = document.querySelector('.buttonOpenTask');
const buttonHideTask = document.querySelector('.buttonHideTask');

const modalList = document.querySelector('.boxList');
const body = document.querySelector('.boxMain');


buttonOpenTask.addEventListener('click', () => {
    body.style.marginRight = "20vw";
    modalList.classList.remove('hideModal');
    modalList.classList.add('showModal');
});

buttonHideTask.addEventListener('click', () => {
    modalList.classList.remove('showModal');
    modalList.classList.add('hideModal');
    body.style.marginRight = "0";
});

//Controle de configurações tela de lista 

console.log(lista)
if (lista.children.length >= 1) {
    
    const configItem = document.querySelector('[data-buttonSettings]')
    const listEdit = document.querySelector('[data-editItem]')
    configItem.addEventListener('click', () => {
        if (listEdit.style.display == 'block') {
            listEdit.style.display = 'none';
        } else {
            listEdit.style.display = 'block';
        }

    })
}
