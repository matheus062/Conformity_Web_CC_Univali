function serializeDataForm (add, formData) {
    let dataArray = {};

    // Se for opração de adição, obtem o valor do ID
    if (add) {
        let id = parseInt(localStorage.getItem("id_item"));

        if (id) {
            id += 1;
        } else {
            id = 1;
        }
        // O SetItem salva o valor da chave em LocalStorage
        localStorage.setItem("id_item", id);
    }

    $.map(formData, function(n, i){
        // Se for oeração adição, salva no array o valor do ID
        if (add) {
            if (i === 0) {
                // O GetItem obtém o valor da chave em LocalStorage
                dataArray['id'] = localStorage.getItem("id_item");
            }
        }
        // Salva no formato JSON todas as informações inseridas pelo usuário no formato chave/valor
        dataArray[n['name']] = n['value'];
    });
    return dataArray;
}

function loadItems () {
    let items = [];

    // Se o localstorage não estiver vazio
    if (localStorage.getItem("items") !== null) {
        // Obtém todos os registros salvas no localstorege (formato Json)
        items = JSON.parse(localStorage.getItem("items"));
    }
    return items;
}

// Função cadastrar item
$("#store").on("submit", function(e){
    // Bloqueia o envio de requisição
    e.preventDefault();

    // Serializa os dados do formulário
    let formData = $(this).serializeArray();

    // Executa função para converter no formato de JSON
    let dataArray = serializeDataForm(true, formData);

    // Chama função para carregar os itens que estão no LocalStorage
    let items = loadItems();

    // Adiociona o novo elemento
    items.push(dataArray);

    // Salva em formato JSON no LocalStorage
    localStorage.setItem("items", JSON.stringify(items));

    // Apresento uma mensagem para o usuário
    alert("Item Adicionado!");

    // Redireciono o usuário para a tela de listagem
    window.location.href = "intranet.html";
});


// Função para imprimir todos os itens salvos no localstorage dentro do TBODY.
function loadItemsTable() {
    // Chama função para carregar os itens que estão no LocalStorage
    let items = loadItems();

    // Inicializa a variável
    let inspPend = "";
    let inspFina = "";
    let cert = "";

    // Para cada item do Local Storage monta as linhas da tabela
    items.forEach(item => {
        if(item.tipo == "inspecaoPendente"){
            inspPend += `<div class="card text-center">
                            <div class="card-body">
                                <h5 class="card-title">Cliente: ${item.cliente}</h5>
                                <p class="card-text">Armazem: ${item.armazem}</p>
                                <p class="card-text">Produto: ${item.produto}</p>
                                <p class="card-text">Destino: ${item.destino}</p>
                                <p class="card-text">Descrições: ${item.descricoes}</p>
                                <p class="card-text">Data: ${item.data}</p>
                            </div>
                        </div>`;
        }

        if(item.tipo == "inspecaoFinalizada"){
            inspFina += `<div class="card text-center">
                            <div class="card-body">
                                <h5 class="card-title">Cliente: ${item.cliente}</h5>
                                <p class="card-text">Armazem: ${item.armazem}</p>
                                <p class="card-text">Produto: ${item.produto}</p>
                                <p class="card-text">Destino: ${item.destino}</p>
                                <p class="card-text">Descrições: ${item.descricoes}</p>
                                <p class="card-text">Data: ${item.data}</p>
                            </div>
                        </div>`;
        }

        if(item.tipo == "certificado"){
            cert += `<div class="card text-center">
                        <div class="card-body">
                            <h5 class="card-title">Cliente: ${item.cliente}</h5>
                            <p class="card-text">Armazem: ${item.armazem}</p>
                            <p class="card-text">Produto: ${item.produto}</p>
                            <p class="card-text">Destino: ${item.destino}</p>
                            <p class="card-text">Descrições: ${item.descricoes}</p>
                            <p class="card-text">Data: ${item.data}</p>
                        </div>
                    </div>`;
        }
    });

    // Funciona como uma impressãdo do HTML gerado no foreach acima na tag tbody da tabela
    $("#pendentes").html(inspPend);
    $("#finalizadas").html(inspFina);
    $("#certificados").html(cert);
}
