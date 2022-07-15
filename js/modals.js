const buttonOpenTask = document.querySelector('.buttonOpenTask');
const buttonHideTask = document.querySelector('.buttonHideTask');

const modalList = document.querySelector('.boxList');
const body = document.querySelector('.boxMain');


buttonOpenTask.addEventListener('click',()=>{
    body.style.marginRight = "30vw";
    modalList.classList.add('showModal');
});

buttonHideTask.addEventListener('click',()=>{
    modalList.classList.remove('showModal');
    body.style.marginRight = "0";
});

