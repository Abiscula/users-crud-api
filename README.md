# Users CRUD API

Este é um projeto de estudo desenvolvido com Node.js, Express, Docker e MongoDB para gerenciar usuários, seguindo o **Repository Pattern**.

O objetivo principal deste projeto é praticar e implementar os conceitos de criação de APIs RESTful e organização de código utilizando boas práticas de desenvolvimento.

---

## 🚀 Tecnologias e Ferramentas

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [Docker](https://www.docker.com/)
- [MongoDB](https://www.mongodb.com/)

---

## 🛠 Funcionalidades

A API implementa um CRUD completo para a gestão de usuários:

1. **POST** - Adiciona um novo usuário.
2. **GET** - Lista todos os usuários ou busca um usuário específico.
3. **PATCH** - Atualiza os dados de um usuário existente.
4. **Delete** - Remove um usuário do banco de dados.

---
---

## ⚙️ Pré-requisitos

- [Docker](https://www.docker.com/) e [Docker Compose](https://docs.docker.com/compose/) instalados na sua máquina.
- Node.js e npm/yarn (apenas para desenvolvimento local, se necessário).

---

## 🚀 Como executar o projeto

1. Clone o repositório:
   
``` bash
   git clone https://github.com/Abiscula/users-crud-api.git
   cd users-crud-ap
```

2. Configure as variáveis de ambiente:
  * Renomeie o arquivo .env.example para .env e preencha as informações necessárias, incluindo a string de conexão do MongoDB. Por exemplo:

``` bash
  PORT=8000
  MONGODB_URL=mongodb://localhost:27017
  MONGODB_USERNAME=seu_usuario
  MONGODB_PASSWORD=sua_senha
```

3. Suba o container do MongoDB com o Docker:

``` bash
  docker-compose up -d
```

4. Instale as dependências do projeto:

``` bash
  npm install
```

5. Inicie o servidor Node.js:

``` bash
  npm start
```

6. A API estará disponível em: http://localhost:8000.
