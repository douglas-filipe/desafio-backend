<h1 align="center">
    Desafio Backend - EUNERD
<h1 >

# Indice

- [Sobre](#-sobre)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Rodando o Backend (servidor)](#user-content--rodando-o-backend-servidor)

## 🔖&nbsp; Sobre

Neste desafio foi criado uma api, onde o usuário cadastra os empréstimos e investimentos, e depois é criado uma nova lista para exibir os empréstimos no marketplace.

Documentação da api: https://documenter.getpostman.com/view/16999074/UVkgxz8u

---

## ⚙️ Funcionalidades

- [x] Usuário cadastra empréstimos
- [x] Listagem dos empréstimos
- [x] Usuário cadastra investimentos de acordo com o ID do empréstimo
- [x] Listagem dos investimentos
- [x] Cadastro de empréstimos no marketplace
- [x] Listagens dos itens no marketplace

---

## 🚀 Tecnologias utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias

- NodeJS
- Typescript
- Prisma
- NestJS
- Uuid
- Yup

---

#### 🎲 Rodando o Backend (servidor)

```bash

    # Clonar o repositório
    $ git clone git@github.com:douglas-filipe/desafio-backend.git

    # Entrar no diretório
    $ cd desafio-backend

    # Instalar as dependências
    $ yarn

    # Inicie o docker compose
    docker-compose up -d

    # Rode o comando de migrate para criar as tabelas no banco de dados:
    npx prisma migrate dev

    # Iniciar o projeto
    $ yarn start:dev
```

---

<span align="center">

    Desenvolvido 💜 por Douglas Filipe

<span >
