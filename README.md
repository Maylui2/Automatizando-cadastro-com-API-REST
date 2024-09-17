# 🐾 API RESTful de Cadastro de Cães

Este projeto implementa uma API RESTful utilizando Node.js e Express para realizar operações CRUD básicas. A API está conectada a um banco de dados MongoDB através do Mongoose, permitindo a modelagem e manipulação de dados com schemas.

## 🚀 Funcionalidades

- **Cadastro de Cães:** Permite o registro de cães com as seguintes informações:
  - Nome 🐶
  - Tutor 👤
  - Raça 🐕
  - Sexo 🚻
  - Cor do pelo 🎨

- **Consulta por ID:** Endpoint para consultar um cão específico através de seu ID. 🔍

- **Remoção de Cães:** Endpoint para remover um cão do sistema usando seu ID. 🗑️

## 🧪 Testes

- **Testes com Cypress:** Testes automatizados foram criados para validar cada endpoint da API, com foco nas operações CRUD. 🔧

- **Validação de Erros com Postman:** Utilizamos Postman para validar o tratamento de erros e garantir que a API lida adequadamente com entradas incorretas e outros cenários de falha. 📬

## 🛠️ Ferramentas Utilizadas

- **Git Bash:** Utilizado para validar a operação da porta do Mongoose (porta 5000) e outras operações relacionadas ao desenvolvimento. 💻
- **Nodemon:** Utilizado para reiniciar automaticamente a aplicação Node.js durante o desenvolvimento, facilitando o processo de desenvolvimento e testes contínuos. 🔄

## ⚙️ Tecnologias Utilizadas

- **Node.js** e **Express** para desenvolvimento da API
- **MongoDB** com **Mongoose** para gerenciamento de dados
- **Cypress** para testes automatizados
- **Postman** para validação de erros e testes manuais

  ## 📁 Estrutura de Pastas

📦 cypress  
 ┣ 📂 downloads  
 ┣ 📂 e2e  
 ┃ ┗ 📜 dogs.cy.js  
 ┣ 📂 fixtures  
 ┃ ┗ 📜 example.json  
 ┗ 📂 support  
   ┣ 📜 commands.js  
   ┗ 📜 e2e.js  
📦 models  
 ┗ 📜 Dog.js  
📦 node_modules  
📦 routes  
 ┗ 📜 dogs.js  
📜 cypress.config.js  
📜 package-lock.json  
📜 package.json  
📜 server.js

