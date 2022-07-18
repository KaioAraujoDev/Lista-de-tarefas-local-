const form = document.getElementById('form');
const lista = document.getElementById('lista');


form.addEventListener('submit', (evento) => {
    evento.preventDefault();//Impedir a propagação do evento


    createItem(evento.target.elements['tarefa'].value, evento.target.elements['descricao'].value, evento.target.elements['data'].value);
})

function createItem(tarefa, descricao, data) {
    console.log(tarefa, descricao, data);

    const novoItem = document.createElement('li');
    novoItem.classList.add('item');

    novoItem.innerHTML = `
    <div class='header'>
        <h2 class='titleItemList'>${tarefa}</h2>
        <div class="settings">
            <button class="buttonSettings" data-buttonSettings><i><img class="iconSettings"
            src="assets/three-dots.svg" alt=""></i></button>
            <nav class="editItem" data-editItem>
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
    <p class="dataList">Prazo: ${data}</p>
    `;

    lista.appendChild(novoItem);

    console.log(lista)
}