# User Authentication App

Este repositório contém uma aplicação para cadastrar, visualizar, editar, deletar e buscar usuários em uma plataforma full stack.

## Pré-requisitos

Antes de executar a aplicação, certifique-se de ter as seguintes ferramentas instaladas:

- Yarn
- Docker
- Node.js

## Instalação

Para instalar as dependências do projeto, siga as etapas abaixo:

1. Clone este repositório para o seu ambiente local:
```bash
git clone https://github.com/LeandroDoudement/user-auth.git
```
2. Navegue até o diretório do projeto:
```bash
cd user-auth
```
3. Acesse o diretório de backend:
```bash
cd backend
```
4. Instale as dependências do backend:
```bash
yarn
```
5. Rode o script para subir o banco de dados (Esse script roda os comandos docker-compose up -d e yarn start):
```bash
yarn db-up
```
Agora seu back end está de pé e rodando, vamos fazer o mesmo para o frontend:

1. Retorne para o repositório user-auth:
```bash
...
```
2. Acesse o diretório de frontend:
```bash
cd frontend
```
3. Instale as dependências do frontend:
```bash
yarn
```
4. Inicie o frontend:
```bash
yarn dev
```

Pronto, agora seu frontend e backend estão funcionando, você pode ir para o seu navegador, visitar o http://localhost:3000/ e experimentar a aplicação!
