const form = document.getElementById('form');
const lista = document.getElementById('lista');
const itens = [];

form.addEventListener('submit', (evento) => {
    evento.preventDefault();//Impedir a propagação do evento

    const tarefa = evento.target.elements['tarefa'];
    const descricao = evento.target.elements['descricao'];
    const data = evento.target.elements['data'];

    createItem(tarefa.value,descricao.value,data.value);

    tarefa.value= "";
    descricao.value = "";
    data.value = "";

})

function createItem(tarefa, descricao, data) {

    function formatarData(data){
        return data.split('-').reverse().join('/');
    }

    const dataFormatada = formatarData(data);
    const novoItem = document.createElement('li');
    novoItem.classList.add('item');

    novoItem.innerHTML = `
    <div class='header'>
        <h2 class='titleItemList'>${tarefa}</h2>
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
                ${descricao}
            </p>
        </div>
    <p class="dataList">Prazo: ${dataFormatada}</p>
    `;

    lista.appendChild(novoItem);

    const item = {
        "tarefa" : tarefa,
        "descricao": descricao,
        "data" :dataFormatada,
    }

    itens.push(item)
    localStorage.setItem('item',JSON.stringify(itens))
}