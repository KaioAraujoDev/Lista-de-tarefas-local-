const buttonOpenTask = document.querySelector('.buttonOpenTask');
const buttonHideTask = document.querySelector('.buttonHideTask');

const modalList = document.querySelector('.boxList');
const body = document.querySelector('.boxMain');


buttonOpenTask.addEventListener('click',()=>{
    body.style.marginRight = "20vw";
    modalList.classList.remove('hideModal');
    modalList.classList.add('showModal');
});

buttonHideTask.addEventListener('click',()=>{
    modalList.classList.remove('showModal');
    modalList.classList.add('hideModal');
    body.style.marginRight = "0";
});

