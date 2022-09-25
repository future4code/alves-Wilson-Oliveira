# `Projeto`
Projeto Labook



# `Descrição`
O Projeto Projeto Labook foi desenvolvido como uma atividade dentro do curso Full-Stack Web Developer da Labenu, o qual consiste na elaboração de uma API que retorna dados conforme as requisições enviadas. Trata-se de uma rede social com o objetivo de compartilhar livros.

- ## User (usuário)

- id em formato string e gerado pela própria aplicação

- name em formato string

- email em formato string

- password: senha hasheada em formato string

- role: enum “NORMAL” ou “ADMIN”

## Post (publicação)

- id em formato string e gerado pela própria aplicação

- content em formato string representando o conteúdo em texto do post

- user_id em formato string e representando o id de quem criou o post

- likes em formato number iniciando em 0

A documentação da API pode ser acessada [aqui](https://documenter.getpostman.com/view/21555870/2s83S6dB27).


# `Modo de usar`
As requisições que podem ser feitas são: 

- Cadastrar usuário, o usuário  precisa informar: o e-mail, nome a sua senha para realizar o cadastro. A senha tem uma regra: ela deve conter, no mínimo, 6 caracteres.

- Login: basta informar o email e a senha corretamente que o usuário poderá se logar na aplicação. Os endpoints de login e cadastro devem retornar um token.

- Criar post, a partir do token de autenticação fornecido no login, pode criar um novo post fornecendo somente o conteudo.

- Mostrar todos os post, a partir do token de autenticação fornecido no login, o usuário pode ver todas as publicações e seus numeros de like .

- Deletar post , a partir do token de autenticação fornecido no login, o usuário pode deletar uma postagem, caso o usuario seja comum, só podera deletar suas próprias postagens, se for ADMIN podera deletar qualquer postagem.

- Dar like, a partir do token de autenticação fornecido no login, o usuario pode dar like em post, informando por params o id da postagem

- apagar like, a partir do token de autenticação fornecido no login, o usuario pode apagar o like que deu  em um post, informando por params o id da postagem



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
CREATE TABLE labook_users (
id VARCHAR(255) PRIMARY KEY,
name VARCHAR (255) NOT NULL,
email VARCHAR(255) UNIQUE NOT NULL,
password VARCHAR(255) NOT NULL,
role ENUM ("NORMAL","ADMIN") NOT NULL DEFAULT "NORMAL"
);
```

``` sql 
CREATE TABLE Labook_Posts(
id VARCHAR (255)  PRIMARY KEY,
content VARCHAR(255) NOT NULL,
user_id varchar (255),
FOREIGN KEY (user_id) REFERENCES labook_users(id)
);
```

``` sql 
CREATE TABLE Labook_Likes (
id VARCHAR(255) PRIMARY KEY,
user_id VARCHAR(255),
post_id VARCHAR(255),
FOREIGN KEY (user_id) REFERENCES labook_users(id),
FOREIGN KEY (post_id) REFERENCES labook_posts(id)
);
```

# `Autor`

Wilson Santos De Oliveira </br>
<a href="https://www.linkedin.com/in/wilson-santos-de-oliveira-5b1919116/"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"></a> <a href="https://github.com/wilsonsantos1992"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"></a>
