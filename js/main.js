const form = document.querySelector('#form');

form.addEventListener('submit',(evento) =>{
    evento.preventDefault();//Impedir a propagação do evento

    console.log(evento.target.elements['tarefa'].value);
    console.log(evento.target.elements['descricao'].value);
    console.log(evento.target.elements['data'].value);
})