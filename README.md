# Página Institucional Conformity
Trabalho de Ciencias da computação, matéria de Programação WEB.

Nesse presente trabalho foi criada uma página institucional para a empresa Conformtity utilizando a framework Bootstrap. Onde a conexão do banco de dados será feita via JavaScript


## Libs para roda o sistema:
- npm
- Node
# install: [npm i express nodemon cors axios]
- express 
- nodemon
- cors
- axio


## Para inicar o app:
# No terminal ~/conformity-api$ npm start
# retorno esperado =>  " [nodemon] starting `node server.js` "

# Em outra aba do terminal:  ~/conformity-api$ npx lite-sever
# retono esperado => "Logs de atividades de interação do servidor"




## Mapeamento SQL
tables   
->"tarefas" 
    [
        id, 
        nivelUrgencia, 
        titulo, 
        descricao,
        dataTarefa
    ]

-> "inspetores"
    [
        id,
        nome,
        cnpj,
        endereco,
        idCidade, 
        telefone1,
        telefone2,


    ]

-> "inspecoes"
    [
        id,
        status,
        idCliente,
        armazem,
        produto,
        destino,
        descricao,
        dataInspecao,
        dataInclusao

    ]

-> "estados"
    [
        id,
        nome,
        uf
    ] 

-> "cidades" 
    [
        id,
        nome,
        id_estado
    ]


-> "clientes"
    [
        id,
        nome,
        cnpj,
        endereco, 
        idCidade,
        telefone1,
        telefone2,

    ]