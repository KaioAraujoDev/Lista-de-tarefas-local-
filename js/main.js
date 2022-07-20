const form = document.getElementById('form');
const lista = document.getElementById('lista');
const itens = JSON.parse(localStorage.getItem('item')) || [];

console.log(lista.length);

function listar(){

    for(let count = lista.childElementCount; count < itens.length;count++){
        function formatarData(data){
            return data.split('-').reverse().join('/');
        }
    
        const dataFormatada = formatarData(itens[count].data);
        const novoItem = document.createElement('li');
        novoItem.classList.add('item');
    
        novoItem.innerHTML = `
        <div class='header'>
            <h2 class='titleItemList'>${itens[count].tarefa}</h2>
            <div class="settings">
                <button class="buttonSettings" data-buttonSettings><i><img class="iconSettings"
                src="assets/three-dots.svg" alt=""></i></button>
                <nav class="editItem hide" data-editItem>
                    <ul>
                        <li>
                            <button class="buttonSettings">
                                <i><img class="iconSettings" src="assets/pencil-square.svg" alt="Editar"></i>
                                Editar tarefa
                            </button>
    
                        </li>
                        <li>
                            <button class="buttonSettings">
                                <i><img class="iconSettings" src="assets/trash-fill.svg" alt="Remover"></i>
                                Remover tarefa
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
            <div class="stateList">
                <p>Em progresso</p>
            </div>
            <div class="boxItem">
                <p class="contentItem">
                    ${itens[count].descricao}
                </p>
            </div>
        <p class="dataList">Prazo: ${dataFormatada}</p>
        `;
    
        lista.appendChild(novoItem);
    }

}

listar();

form.addEventListener('submit', (evento) => {
    evento.preventDefault();//Impedir a propagação do evento

    const tarefa = evento.target.elements['tarefa'];
    const descricao = evento.target.elements['descricao'];
    const data = evento.target.elements['data'];

    createItem(tarefa.value,descricao.value,data.value);

    tarefa.value= "";
    descricao.value = "";
    data.value = "";

    listar();
})

function createItem(tarefa, descricao, data) {

    const item = {
        "tarefa" : tarefa,
        "descricao": descricao,
        "data" : data,
    }

    itens.push(item)
    localStorage.setItem('item',JSON.stringify(itens))
}