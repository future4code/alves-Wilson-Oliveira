# `Projeto`
Projeto Lama


# `Descrição`
O Projeto Projeto EstanteVirtual foi desenvolvido como uma atividade dentro do curso Full-Stack Web Developer da Labenu, o qual consiste na elaboração de uma API que retorna dados conforme as requisições enviadas. Trata-se de uma sistema para administração e registro de resultados para algumas competições.

- ## User (usuário)

- id em formato string e gerado pela própria aplicação

- name em formato string

- email em formato string

- password: senha hasheada em formato string


## Competition 

- 'name' em formato string deve ser unico e representa o nome da competição.

- 'limitDate' representa da data de encerramento da competição.


## Result

- 'id' em formato string, gerado pela própria aplicação.

- 'name' em formato string, representa o npme do competidor.

- 'competition' em formato string, representa o npme da competição disputada.

- 'value' em formato number, representa o desempenho do atleta.

- 'unity' em formato string, representa a medida referente a 'value'.



A documentação da API pode ser acessada [aqui](https://documenter.getpostman.com/view/21555870/2s83ziNNyP).


# `Modo de usar`
As requisições que podem ser feitas são: 

- Cadastrar usuário, o usuário  precisa informar: o e-mail, nome a sua senha para realizar o cadastro. A senha tem uma regra: ela deve conter, no mínimo, 6 caracteres.

- Login: basta informar o email e a senha corretamente que o usuário poderá se logar na aplicação. Os endpoints de login e cadastro devem retornar um token.

- Criar competição, a partir do token de autenticação fornecido no login, pode criar uma nova competição fornecendo o nome da competição e a data do encerramento.

- Mostrar todos as competições, o usuário pode ver todos as competições e suas datas de encerramento .

- Registrar resultado , a partir do token de autenticação fornecido no login, o usuário pode registrar de um resultado em uma competição, a competição já deve existir e a data de encerramento deve ser maior que a data atual.

- Mostrar todos os resultados de uma competição, o usuário pode ver todos os resultados de uma competição e o status da competição, os competidores são mostrados em ordem de classificação .

- deletar um resultado, a partir do token de autenticação fornecido no login, o usuário pode deletar um resultado em uma competição.


# `Instalando e rodando o projeto via clone`
Fazer o clone do projeto:
- git clone link-do-repositório

Instalar as dependências:
- npm install

Rodar o Migrations:
- npm run migrations

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
CREATE TABLE IF NOT EXISTS ${UserDatabase.TABLE_USERS}(
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL UNIQUE,
            password VARCHAR(255) NOT NULL
        );
```

``` sql 
CREATE TABLE IF NOT EXISTS ${CompetitionDataBase.TABLE_COMPETITION}(
            competition VARCHAR (255)  PRIMARY KEY,
            limit_date DATE NOT NULL
        );
```

``` sql 
CREATE TABLE IF NOT EXISTS ${CompetitionDataBase.TABLE_RESULT}(
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR (255) NOT NULL,
            value FLOAT4 NOT NULL,
            unity VARCHAR(255) NOT NULL,
            competition VARCHAR(255) NOT NULL,
            FOREIGN KEY (competition)REFERENCES ${CompetitionDataBase.TABLE_COMPETITION}(competition)
        );
```

# `Autor`

Wilson Santos De Oliveira </br>
<a href="https://www.linkedin.com/in/wilson-santos-de-oliveira-5b1919116/"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"></a> <a href="https://github.com/wilsonsantos1992"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"></a>