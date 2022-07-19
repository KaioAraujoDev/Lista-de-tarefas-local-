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

//Controle de edição de cada item da lista 




form.addEventListener('submit', () => {
const listaButton = document.querySelectorAll('[data-buttonsettings]');   


    listaButton.forEach((element) => {
        element.onclick = function(){exibirNav(element)};
    })

    function exibirNav(item){
        const nav = item.parentNode.children.item(1);
        
        validarNav()
        
        if(nav.classList.contains('hide')){
            nav.classList.remove('hide');
            nav.classList.add('show');
        }else{
            nav.classList.remove('show');
            nav.classList.add('hide');
        }

        
    }
    
    //Função para remover os botões em que já foram clicados
    //Deve ser chamada toda vez que um botão de navegação é mostrado
    function validarNav(){
        const navs = document.querySelectorAll('[data-editItem]');

        navs.forEach((element)=>{
            console.log(element.classList)
            if(element.classList.contains('show')){
                element.classList.remove('show');
                element.classList.add('hide');
            }
        })
    }
})
   

