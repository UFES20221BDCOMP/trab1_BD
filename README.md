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

### É recomendado baixar o Yarn através do pacote de gerenciamento npm, que vem junto do NodeJs.
###Uma vez que você tenha o npm instalado, você pode escrever o seguinte comando apra instalar e atualizar o Yarn:

```
npm install --global yarn
```
