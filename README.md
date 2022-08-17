<h1>Pizzaiola</h1>

![Isso é uma imagem](https://i.imgur.com/hJ8WSIe.png)

O Trabalho apresentado neste repositório foi baseado no seguinte desafio da empresa AmbulnzLLC: https://github.com/AmbulnzLLC/fullstack-challenge/tree/master/backend

Com o programa rodando seguindo as instruções abaixo, é possivel acessar a documentação da aplicação pelo Swagger através da rota: http://localhost:3333/api-docs/. Nela também é possível realizar testes com o banco de dados.

A seguir descreveremos o processo modelagem, implementação, restrições aplicadas e desafios encontrados, e em seguida listaremos os requisitos com sua respectivas formas de instalação e os testes para execução do trabalho.

## Modelagem

Recursos disponíveis para acesso via API:
* **Sauces**
* **Meats**
* **Crusts**
* **Sizes**
* **Orders**

### Métodos
Requisições para a API devem seguir os padrões:
| Método | Descrição |
|---|---|
| `GET` | Retorna informações de um ou mais registros. |
| `POST` | Utilizado para criar um novo registro. |
| `IMPORT` | Cria diversos registros de vez utilizando um arquivo csv. |

### Respostas

| Código | Descrição |
|---|---|
| `200` | Requisição executada com sucesso (success).|
| `201` | Requisição executada com sucesso (success).|
| `401` | Dados de acesso inválidos.|
| `500` | Falha na execução.|

## Restrições do Banco de Dados

* Nome do cliente não pode ser igual ao nome de nenhum cliente de pedidos já registrados.
* Todos os quatro atributos da pizza (sauce, meat, crust e size) devem constar no banco de dados como items disponíveis para serem pedidos.
* Todos os quatro atributos da pizza devem estar preenchidos.
* Ao cadastrar um atributo da pizza, não é possível cadastrar itens repetidos nos cardápio.

## Requisitos

* **NodeJs version 14.17.1 **
* **Yarn version 1.22.10**

É recomendado baixar o Yarn através do pacote de gerenciamento npm, que vem junto do NodeJs. Uma vez que você tenha o npm instalado, você pode escrever o seguinte comando apra instalar e atualizar o Yarn:

```
npm install --global yarn
```
Uma vez instaldo, você pode testar se está tudo certo e verificar a versão com o comando:

```
yarn --version
```
* **Insomnia**

Para instalar o Insomnia basta acessar o link e seguir as recomendações: https://insomnia.rest/download

* **Docker**

Para instalar o Docker basta acessar o link e seguir as recomendações: https://www.docker.com/products/docker-desktop/

* **Beekeeper Community Edition**

Ferramenta opcional para visualizar a estrutura do banco de dados e suas instâncias. Para instalar o Beekeeper basta acessar o link e seguir as recomendações: https://www.beekeeperstudio.io/get

* **Modelo .env.local**

Para evitar inconsistências mantendo as credenciais todas no arquivo .env.local na estrutura que segue:
```
REACT_APP_DOCKER_USER=docker
REACT_APP_DOCKER_PASSWORD=trab1
REACT_APP_DOCKER_DB=trab1
REACT_APP_DOCKER_CONTAINER_NAME=database_trab1
```

## Testagem

1. Clone a API deste repositório e abra a aplicação na IDE de sua preferência, recomendamos Visual Studio Code.

2. Abra o terminal já com o caminho correto da aplicação e dê o seguinte comando para instalar o node_modules, que trará as dependências:

```
yarn
```

3. Agora para rodar a aplicação, digite o seguinte comando e aguarda até que a mensagem "Server is running bro!" apareça:

```
docker-compose up
```

4. Abra outro terminal e dê o seguinte comando para carregar as migrations:

```
yarn typeorm migration:run
```

5. Abra o Insomnia e carregue o arquivo que está na pasta importInsomnia na raiz, para dentro do Insomnia. Para importar o arquivo, deve-se clicar no botão mostrado na imagem abaixo. Favor verificar se o Insomnia está no modo Debug:

![Isso é uma imagem](https://i.imgur.com/aUg4pWR.png)

6. Para cada uma das pastas entre em import<Nome-da-Instância> e clique em Send para alimentar o banco de dados com os arquivos csv. O importOrders deve necessariamente ser o último a ser importado.

7. Agora, serão realizados os testes. Ao terminar de realizar um dos teste deve-se parar a execução da aplicação do docker e rodar o seguinte comando:

```
docker-compose down
```

Para realizar o próximo teste os passos 3, 4 e 6 devem ser repetidos.

### Teste 1: Enviar o seguinte comando JSON em postOrder (copiar e colar) e clicar em Send:
```
{
    "clientName" : "Joao Paulo",
    "sauce":"branco",
    "meat": "camarao",
    "crust": "cheddar",
    "size": "pequena"
}
```
Este teste deve funcionar pois segue as seguintes regras de negócio:
* Nome do cliente não é igual ao nome de nenhum cliente de pedidos já registrados.
* Todos os quatro atributos da pizza (sauce, meat, crust e size) constam no banco de dados como items disponíveis.
* Todos os quatro atributos da pizza estão preenchidos.

### Teste 2: Enviar o seguinte comando JSON em postOrder (copiar e colar) e clicar em Send:
```
{
    "clientName" : "Jose Ferreira",
    "sauce":"branco",
    "meat": "camarao",
    "crust": "cheddar",
    "size": "pequena"
}
```
Este teste gera erro pois este nome registrado pelo post já foi registrado anteriormente pelo import.

### Teste 3: Enviar o seguinte comando JSON em postOrder (copiar e colar) e clicar em Send:
```
{
    "clientName" : "Marcos",
    "sauce":"unknown sauce",
    "meat": "camarao",
    "crust": "cheddar",
    "size": "pequena"
}
```
Este teste gera erro pois a sauce pedida não está cadastrada no banco de dados.

### Teste 4: Enviar o seguinte comando JSON em postOrder (copiar e colar) e clicar em Send:
```
{
    "clientName" : "Luis",
    "sauce":"tomate",
    "meat": "unknown meat",
    "crust": "cheddar",
    "size": "pequena"
}
```
Este teste gera erro pois a meat pedida não está cadastrada no banco de dados.

### Teste 5: Enviar o seguinte comando JSON em postOrder (copiar e colar) e clicar em Send:
```
{
    "clientName" : "Carla",
    "sauce":"tomate",
    "meat": "camarao",
    "crust": "unknown crust",
    "size": "pequena"
}
```
Este teste gera erro pois a crust pedida não está cadastrada no banco de dados.

### Teste 6: Enviar o seguinte comando JSON em postOrder (copiar e colar) e clicar em Send:
```
{
    "clientName" : "Margarida",
    "sauce":"tomate",
    "meat": "camarao",
    "crust": "cheddar",
    "size": "unknown size"
}
```
Este teste gera erro pois o size pedida não está cadastrado no banco de dados.

### Teste 7: Enviar o seguinte comando JSON em postOrder (copiar e colar) e clicar em Send:
```
{
    "clientName" : "Claudio",
    "sauce":"tomate",
    "meat": "camarao",
    "crust": "cheddar"
}
```
Este teste gera erro pois a ausência de um atributo torna o pedido inválido (aplica-se a qualquer atributo faltante).

### Teste 8: Dar post em todos os atributos (postSauce, postMeat, postCrust e postSize) pelo comando JSON já presente no Insomnia. E para testar que nossa aplicação pode atualizar os dados com novos produtos, escreva a seguinte order em postOrder que utilizada todos os produtos novos cadastrados:

```
{
    "clientName" : "Marcos Paulo",
    "sauce":"tomate caseiro",
    "meat": "calabresa",
    "crust": "requeijao",
    "size": "brotinho"
}
```
