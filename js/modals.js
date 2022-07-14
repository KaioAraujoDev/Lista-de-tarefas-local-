const button = document.querySelector('.buttonTask');
const modalList = document.querySelector('.boxList');


button.addEventListener('click', transicao);

const classesModalList  = modalList.classList;


function transicao() {
    classesModalList.contains('showModal') ? hide() : show(); 
    classesModalList.contains('showModal') || classesModalList.contains('hideModal') ? false : classesModalList.add('showModal')

}

function hide() {
    classesModalList.remove('showModal');
    classesModalList.add('hideModal');
}

function show() {
    if(classesModalList.contains('hideModal')){
        classesModalList.remove('hideModal');
    }else{
         classesModalList.add('showModal');
    }
    
}