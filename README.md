<h1>Pizzaiola</h1>

### O Trabalho apresentado neste repositório foi baseado no seguinte desafio da empresa AmbulnzLLC: https://github.com/AmbulnzLLC/fullstack-challenge/tree/master/backend

Recursos disponíveis para acesso via API:
* **Sauces**
* **Meats**
* **Crusts**
* **Sizes**
* **Orders**

## Métodos
Requisições para a API devem seguir os padrões:
| Método | Descrição |
|---|---|
| `GET` | Retorna informações de um ou mais registros. |
| `POST` | Utilizado para criar um novo registro. |
| `IMPORT` | Cria diversos registros de vez utilizando um arquivo csv. |

## Respostas

| Código | Descrição |
|---|---|
| `200` | Requisição executada com sucesso (success).|
| `201` | Requisição executada com sucesso (success).|
| `401` | Dados de acesso inválidos.|
| `500` | Falha na execução.|

## Requisitos

* **NodeJs**
* **Yarn**

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

5. Abra o Insomnia e carregue o arquivo que está na pasta importInsomnia na raiz, para dentro do Insomnia

