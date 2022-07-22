const form = document.getElementById('form');
const lista = document.getElementById('lista');
const itens = JSON.parse(localStorage.getItem('item')) || [];


//Impedindo que o usuário coloque uma data anterior a data atual
function validandoData() {
    const time = Date.now()//Pegando a quantidade de milisegundos da data atual
    const date = new Date(time);//Instanciando uma nova data passando os milisegundos da data atual 
    const dataAtual = date.toISOString().slice(0, 10);
    const campoData = document.querySelector('#data');
    campoData.min = dataAtual;
}
validandoData();

//Convertendo para data no modelo brasileiro

function formatarData(data) {
    return data.split('-').reverse().join('/');
}

//Adicionando itens na lista da página 

function listar() {

    lista.innerHTML = '';

    for (let count = lista.childElementCount; count < itens.length; count++) {

        const dataFormatada = formatarData(itens[count].data);
        const novoItem = document.createElement('li');
        novoItem.classList.add('item');

        novoItem.innerHTML = `
        <div class='header'>
            <input type='checkbox' class="checkbox" id="checkTask${count}"/>
            <label for="checkTask${count}">
                <h2 class='titleItemList'>${itens[count].tarefa}</h2>
                <div class="settings">
                    <button class="buttonSettings" data-buttonSettings><i><img class="iconSettings"
                    src="assets/three-dots.svg" alt=""></i></button>
                    <nav class="editItem hide" data-editItem>
                        <ul>
                            <li>
                                <button class="buttonSettings" data-editButton>
                                    <i><img class="iconSettings" src="assets/pencil-square.svg" alt="Editar"></i>
                                    Editar tarefa
                                </button>
                            </li>
                            <li>
                                <button class="buttonSettings" data-removeButton>
                                    <i><img class="iconSettings" src="assets/trash-fill.svg" alt="Remover"></i>
                                    Remover tarefa
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </label>
        </div>
            <div class="stateList ${itens[count].concluido === false ? 'stateInProgress' : 'stateConcluded'}">
                <p>${itens[count].concluido === false ? 'Em progresso' : 'Concluído'}</p>
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


//Evento submit , buscando dados do formulário para criação do elemento
form.addEventListener('submit', (evento) => {

    evento.preventDefault();//Impedir a propagação do evento

    const tarefa = evento.target.elements['tarefa'];
    const descricao = evento.target.elements['descricao'];
    const data = evento.target.elements['data'];

    createItem(tarefa.value, descricao.value, data.value);

    tarefa.value = "";
    descricao.value = "";
    data.value = "";

    exibirModalConcluido();

    listar();
    verificandoBotoes();


})

//Adicionando item no localStorage

function createItem(tarefa, descricao, data) {

    const item = {
        "tarefa": tarefa,
        "descricao": descricao,
        "data": data,
        "concluido": false,
    }

    itens.push(item)
    localStorage.setItem('item', JSON.stringify(itens))
}


//verificando se existe algum item da lista 

if (itens.length !== 0) {
    listar()
    verificandoBotoes();
} else {
    lista.innerHTML = `
    <section class="semItem">
        <p>
            Nenhum valor encontrado
        </p>
    </section>
    `;
}



