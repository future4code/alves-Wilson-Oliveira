# `Projeto`
IWFS - Cookenu


# `Link`
[Clique aqui!](https://labenu-system-11.herokuapp.com/)


# `Descrição`
O Projeto IWFS - Cookenu foi desenvolvido como uma atividade dentro do curso Full-Stack Web Developer da Labenu, o qual consiste na elaboração de uma API que retorna dados conforme as requisições enviadas. Trata-se de uma ferramenta de cadastro de usuários e receitas que poderam ser acessadas por outros usuarios.

- **singup:** cria um novo usuário.
- **login:** acessa a conta de um usuário.
- **infoUser:** retorna informações do usuário da conta.
- **otherUser:** retorna informações de outro usuário atravéz de seu id.
- **createRecipe:** cria uma nova receita para aquele usuário.
- **followUser:** possibilita o usuário seguir outro perfil.
- **unfollow:** possibilita o usuário deixar de seguir outro perfil.
- **feedUser:** retorna as receitas dos usuarios seguidos.


A documentação da API pode ser acessada [aqui](https://documenter.getpostman.com/view/21555870/2s7YtNnGYR).


# `Modo de usar`
As requisições que podem ser feitas são:  
- Cadastrar usuário, o usuário  precisa informar: o e-mail, nome a sua senha para realizar o cadastro. A senha tem uma regra: ela deve conter, no mínimo, 6 caracteres.

- Login: basta informar o email e a senha corretamente que o usuário poderá se logar na aplicação. Os endpoints de login e cadastro devem retornar um token.

- Informações do próprio perfil, a partir do token de autenticação fornecido no login, pode ver as suas informações não sensíveis salvas no banco (id e email).

- Informações de outro Usuário, é necessário informar o id que deseja obter as informações via path params, o usuário pode ver as  informações não sensíveis salvas no banco (id , name, email).

- Criar receitas, o usuário pode criar uma receita. A receita deve ter os seguintes atributos: título, descrição/modo de preparo.

- Informações da receita, é necessário informar o id que deseja obter as informações via path params, o usuário pode ver as  informações da receita referente aquele id (id da receita, title, description, date).

- Seguir usuário, é necessário informar o id do usuário que deseja seguir.

- Deixar de seguir usuário : é necessário informar o id do usuário que deseja deixar de seguir.

- Feed, retorna as receitas dos usuarios seguidos assim como o nome do usuário que a criou



# `Instalando e rodando o projeto via clone`
Fazer o clone do projeto:
- git clone link-do-repositório

Instalar as dependências:
- npm install

Rodar o projeto:
- npm run start

# `Tecnologias utilizadas`
<div>
<img src="https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white">
<img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white">
<img src="https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white">
<img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge">
<img src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white">
<img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white">
<img src="https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white">
<img src="https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white">
</div>

# `Criação de tabelas :`

``` sql 
CREATE TABLE cookenu_users (
id VARCHAR(255) PRIMARY KEY,
name VARCHAR (255) NOT NULL,
email VARCHAR(255) UNIQUE NOT NULL,
password VARCHAR(255) NOT NULL
);
```

``` sql 
CREATE TABLE cookenu_recipes (
id VARCHAR (255)  PRIMARY KEY,
title VARCHAR(255) NOT NULL,
description VARCHAR(1000) NOT NULL,
date DATE NOT NULL,
user_id VARCHAR(255) NOT NULL,
FOREIGN KEY (user_id) REFERENCES cookenu_users(id)
);
```

``` sql 
CREATE TABLE cookenu_followers (
id_follower VARCHAR(255),
id_followed VARCHAR(255),
PRIMARY KEY (id_follower, id_followed),
FOREIGN KEY (id_follower) REFERENCES cookenu_users(id),
FOREIGN KEY (id_followed) REFERENCES cookenu_users(id)
);
```

# `Autor`

Wilson Santos De Oliveira </br>
<a href="https://www.linkedin.com/in/wilson-santos-de-oliveira-5b1919116/"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"></a> <a href="https://github.com/wilsonsantos1992"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"></a>

