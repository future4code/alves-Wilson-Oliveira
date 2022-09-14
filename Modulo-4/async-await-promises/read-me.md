# Projeto Lista To-Do

 ## Estrutura de dados

* ### Usuários:
    * Id
    * Name
    * Nickname
    * Email
* ### Taferas:
    * Id
    * Title
    * Description
    * Deadline
    * Status : `"To_Do" || "Doing" || "Done" `
    * Author
    * Assignees

    ___

## Criação de tabelas :

``` sql 
CREATE TABLE to_do_list_user(
id VARCHAR (255) PRIMARY KEY ,
name VARCHAR (255) NOT NULL,
nickname VARCHAR (255) NOT NULL UNIQUE,
email varchar (255) NOT NULL UNIQUE
)
```

``` sql
CREATE TABLE to_do_list_tasks(
id VARCHAR(255) PRIMARY KEY,
title varchar(255) NOT NULL,
description VARCHAR(1024)  DEFAULT ("Sem Descriçâo"),
deadline DATE,
status ENUM("Há fazer" , "Fazendo", "Feito") DEFAULT ("Há fazer"),
author_id VARCHAR(255),
FOREIGN KEY (author_id) REFERENCES to_do_list_user(id)
);

```


```sql

CREATE TABLE to_do_list_assigness(
task_id VARCHAR (255) ,
assigness_id VARCHAR(255),
PRIMARY KEY (task_id, assigness_id),
FOREIGN KEY (task_id) REFERENCES to_do_list_tasks(id),
FOREIGN KEY (assigness_id) REFERENCES to_do_list_user(id)
);

```
___


## Endpoints :

* ### Criar usuario :
    * Metodo POST
    * Path: "/user"
    * Body: 
        * Name (obrigatório)
        * Nickname (obrigatório)
        * Email (obrigatório)

* ### Pegar usuário pelo Id :
    * Metodo GET
    * Path: "/user/:id"
    * Body de resposta : (Retorna um erro se não encontrar)
        * id 
        * nick

* ### Editar usuario :
    * Metodo PUT
    * Path: "/user/edit/:id"
    * Body: 
        * Name (opcional, não pode ser vazio)
        * Nickname (opcional, não pode ser vazio)
        * Email (opcional, não pode ser vazio)

* ### Criar tarefas :
    * Metodo POST
    * Path: "/task"
    * Body: 
        * Title (obrigatório)
        * Deadline (obrigatório, formato `DD/MM/YYYY`)
        * Description 
        * Authorid

  * ### Pegar tarefa pelo Id :
    * Metodo GET
    * Path: "/task/:id"
    * Body: 
        * id
        * Title 
        * Deadline ( formato `DD/MM/YYYY`)
        * Description 
        * Authorid
        * Status
        * Authornickname





Para começar a explicar o nosso sistema vamos falar sobre os usuários. O cadastro deles deve ser simples, pedindo: um nome, um apelido (nickname) e um email

As tarefas são definidas por: título, descrição, data limite até a qual precisa ser feita, status e usuário pedinte (o que criou a tarefa). Existem os usuários responsáveis por uma tarefa, ou seja, aqueles que terão que executa-las. Mais de um usuário pode ser diretamente responsável de mesma tarefa. Os status das tarefas são 3: *to do* ("a fazer"), *doing* ("fazendo") e *done* ("feita").

Dados esses requisitos do sistema, você deve modelar todo o banco de dados (usando MySQL) e implementar o backend. Leia atentamente a lista de endpoints mostrada abaixo antes de começar a modelagem do banco, aí estão descritas todas as informações necessárias para criá-los.

### Endpoints Mínimos

- **1. Criar usuário**
    
    **Método:** POST
    **Path:** `/user`
    
    **Body:**
    
    ```json
    {
    	"name": "Astro Dev",
    	"nickname": "astrodev",
    	"email": "astro@dev.com"
    }
    ```
    
    **Observações**:
    
    - O seu código deve validar se os três campos estão completos (ou seja se não foram enviados ou se não estão vazios) e retornar um erro caso não estejam válidos
    - O seu código deve gerar o id do usuário
    
- **2. Pegar usuário pelo id**
    
    **Método:** GET
    **Path:** `/user/:id`
    
    **Path Param**: é o id do usuário
    
    **Body de Resposta:**
    
    ```json
    {
    	"id": "001",
    	"nickname": "astrodev"
    }
    ```
    
    **Observações**:
    
    - O endpoint deve retornar um erro se não encontrar o usuário
    
- **3. Editar usuário**
    
    **Método:** PUT
    **Path:** `/user/edit/:id`
    
    **Path Param**: é o id do usuário
    
    **Body:**
    
    ```json
    {
    	"name": "Astro Dev",
    	"nickname": "astrodev"
    }
    ```
    
    **Observações**:
    
    - O seu código só deve alterar o que for enviado
    - Se algum valor enviado for vazio, deve retornar um erro
    
- **4. Criar tarefa**
    
    **Método:** POST
    **Path:** `/task`
    
    **Body:**
    
    ```json
    {
    	"title": "Criar banco dos alunos",
    	"description": "Devemos criar o banco dos alunos para o módulo do backend",
    	"limitDate": "04/05/2020",
    	"creatorUserId": "001"
    }
    ```
    
    **Observações**:
    
    - O seu código deve validar se todos os campos não estão vazios,
    - O seu código deve gerar o id da tarefa,
    - A data deve se recebida no formato mostrado acima: `DD/MM/YYYY` e o seu código deve fazer a conversão necessária para salvar no banco
    
- **5. Pegar tarefa pelo id**
    
    **Método:** GET
    **Path:** `/task/:id`
    
    **Path Param**: é o id da tarefa
    
    **Body de Resposta:**
    
    ```json
    {
    	"taskId": "001",
    	"title": "Criar banco dos alunos",
    	"description": "Devemos criar o banco dos alunos para o módulo do backend",
    	"limitDate": "04/05/2020",
    	"status": "to_do",
    	"creatorUserId": "001",
    	"creatorUserNickname": "astrodev"
    }
    ```
    
    **Observações**:
    
    - O endpoint deve retornar um erro se não encontrar a task
    - Perceba que o endpoint retorna informações tanto da tarefa como do usuário criador
    - O seu código deve converter a data recebida do banco para o formato mostrado acima (`DD/MM/YYYY`)

### Desafios

- **6. Pegar todos os usuários**
    
    **Método:** GET
    **Path:** `/user/all`
    
    **Body de Resposta:**
    
    ```json
    {
    	"users": [{
    		"id": "001",
    		"nickname": "astrodev"
    	}]
    }
    ```
    
    **Observações**:
    
    - O endpoint deve retornar um array vazio se não encontrar os resultados
    
- **7. Pegar tarefas criadas por um usuário**
    
    **Método:** GET
    **Path:** `/task?creatorUserId=id`
    
    **Query String:** indica o id do usuário que criou através da chave `creatorUserId`
    
    **Body de Resposta:**
    
    ```json
    {
    	"tasks": [{
    		"taskId": "001",
    		"title": "Criar banco dos alunos",
    		"description": "Devemos criar o banco dos alunos para o módulo do backend",
    		"limitDate": "04/05/2020",
    		"creatorUserId": "001",
    		"status": "to_do",
    		"creatorUserNickname": "astrodev"
    	}]
    }
    ```
    
    **Observações**:
    
    - O seu código deve verificar se foi enviado o `creatorUserId` e devolver um erro específico caso não tenha sido
    - O endpoint deve retornar um array vazio se não encontrar os resultados
    - Perceba que o endpoint retorna informações tanto da tarefa como do usuário criador
    - O seu código deve converter a data recebida do banco para o formato mostrado acima (`DD/MM/YYYY`)
    
- **8. Pesquisar usuário**
    
    **Método:** GET
    **Path:** `/user?query=astro`
    
    **Query String:** indica o termo de busca através da chave `query`
    
    **Body de Resposta:**
    
    ```json
    {
    	"users": [{
    		"id": "001",
    		"nickname": "astrodev",
    	}]
    }
    ```
    
    **Observações**:
    
    - O seu código deve verificar se foi enviado a `query` e devolver um erro específico caso não tenha sido
    - Você deve buscar no banco por usuários cujo apelido ou email contenham a `query` fornecida
    - O endpoint deve retornar um array vazio se não encontrar os resultados
    
- **9. Atribuir um usuário responsável a uma tarefa**
    
    **Método:** POST
    **Path:** `/task/responsible`
    
    **Body:**
    
    ```json
    {
    	"task_id": "Astro Dev",
    	"responsible_user_id": "astrodev"
    }
    ```
    
    **Observações**:
    
    - O seu código deve verificar se todos os parâmetros foram enviados e não estão vazios
    
- **10. Pegar usuários responsáveis por uma tarefa**
    
    **Método:** GET
    **Path:** `/task/:id/responsible`
    
    **Path Param**: é o id da tarefa
    
    **Body de Resposta:**
    
    ```json
    {
    	"users": [{
    		"id": "001",
    		"nickname": "astrodev"
    	}]
    }
    ```
    
    **Observações**:
    
    - O seu código deve validar se o id da task foi enviado
    - O endpoint deve retornar um erro se não encontrar a task
    
- **11. Pegar tarefa pelo id e os responsáveis por ela**
    
    **Método:** GET
    **Path:** `/task/:id/responsiblesTask`
    
    **Path Param**: é o id da tarefa
    
    **Body de Resposta:**
    
    ```json
    {
    	"taskId": "001",
    	"title": "Criar banco dos alunos",
    	"description": "Devemos criar o banco dos alunos para o módulo do backend",
    	"limitDate": "04/05/2020",
    	"creatorUserId": "001",
    	"creatorUserNickname": "astrodev",
    	"responsibleUsers": [
    		{
    			"id": "001",
    			"nickname": "astrodev"
    		}
    	]
    }
    ```
    
    **Observações**:
    
    - O seu código deve validar se o id da task foi enviado
    - O endpoint deve retornar um erro se não encontrar a task
    - Perceba que o endpoint retorna informações tanto da tarefa como do usuário criador e de todos os usuários responsáveis
    - O seu código deve converter a data recebida do banco para o formato mostrado acima (`DD/MM/YYYY`)
    
- **12. Atualizar o status da tarefa pelo id**
    
    **Method:** PUT
    
    **Path:** `/task/status/:id/`
    
    **Body:**
    
    ```json
    {
    	"status": "doing"
    }
    ```
    
    **Observações**:
    
    - O seu código deve verificar se todos os parâmetros foram enviados e não estão vazios
    
- **13. Pegar todas as tarefas por status**
    
    **Método:** GET
    **Path:** `/task/search?status=valor_do_status`
    
    **Query String:** indica o status através da chave `status`
    
    **Body de Resposta:**
    
    ```json
    {
    	"tasks": [{
    		"taskId": "001",
    		"title": "Criar banco dos alunos",
    		"description": "Devemos criar o banco dos alunos para o módulo do backend",
    		"limitDate": "04/05/2020",
    		"creatorUserId": "001"
    	}]
    }
    ```
    
    **Observações**:
    
    - O seu código deve validar se o status da task foi enviado
    - O endpoint deve retornar um array vazio se não encontrar nenhum resultado
    - Perceba que o endpoint retorna informações tanto da tarefa como do usuário criador
    - O seu código deve converter a data recebida do banco para o formato mostrado acima (`DD/MM/YYYY`)
    
- **14. Pegar todas as tarefas atrasadas**
    
    **Método:** GET
    **Path:** `/task/delayed`
    
    **Body de Resposta:**
    
    ```json
    {
    	"tasks": [{
    		"taskId": "001",
    		"title": "Criar banco dos alunos",
    		"description": "Devemos criar o banco dos alunos para o módulo do backend",
    		"limitDate": "04/05/2020",
    		"creatorUserId": "001",
    		"creatorUserNickname": "astrodev"
    	}]
    }
    ```
    
    **Observações**:
    
    - O seu código deve validar se o status da task foi enviado
    - O endpoint deve retornar um erro se não encontrar a task
    - O endpoint deve retornar um array vazio se não encontrar nenhum resultado
    - O seu código deve converter a data recebida do banco para o formato mostrado acima (`DD/MM/YYYY`)
    
- **15. Retirar um usuário responsável de uma tarefa**
    
    **Método:** DELETE
    **Path:** `/task/:taskId/responsible/:responsibleUserId`
    
    **Path Param**: o primeiro indica o id da task (`taskId`)e o segundo o id do usuário responsável (`responsibleUserId`)
    
    **Observações**:
    
    - O seu código deve validar se os ids da task e do usuário foram enviados
    - O endpoint deve retornar um erro se não encontrar a task, ou se não encontrar o usuário ou se o usuário não for responsável por essa tarefa, antes de deletar
    
- **16. Atribuir mais de um responsável a uma tarefa**
    
    **Método:** POST
    **Path:** `/task/responsible`
    
    **Body:**
    
    ```json
    {
    	"task_id": "001",
    	"responsible_user_ids": ["001"]
    }
    ```
    
    **Observações**:
    
    - O seu código deve verificar se todos os parâmetros foram enviados e não estão vazios
    - O seu código deve verificar se a task e todos os usuários existem
    - Perceba que ele possui o mesmo path do endpoint do exercício 9. A ideia é que você utilize o mesmo endpoint, altere-o para que funcione com um array de ids de usuário.
    
- **17. Procurar tarefa por termos**
    
    **Método:** GET
    **Path:** `/task?query=tarefa`
    
    **Query String:** indica o termo de busca através da chave `query`
    
    **Body de Resposta:**
    
    ```json
    {
    	"tasks": [{
    		"taskId": "001",
    		"title": "Criar banco dos alunos",
    		"description": "Devemos criar o banco dos alunos para o módulo do backend",
    		"limitDate": "04/05/2020",
    		"creatorUserId": "001",
    		"creatorUserNickname": "astrodev",
    	}]
    }
    ```
    
    **Observações**:
    
    - O seu código deve validar se o status da task foi enviado
    - O endpoint deve retornar um erro se não encontrar a task
    - O endpoint deve retornar um array vazio se não encontrar nenhum resultado
    - O seu código deve converter a data recebida do banco para o formato mostrado acima (`DD/MM/YYYY`)
    
- **18. Atualizar o status de várias tarefas**
    
    **Método:** PUT
    **Path:** `/task/status/edit`
    
    **Body:**
    
    ```json
    {
    	"task_ids": ["001"],
    	"status": "done"
    }
    ```
    
    **Observações**:
    
    - O seu código deve verificar se todos os parâmetros foram enviados e não estão vazios
    - O seu código deve verificar se todas as tasks existem
    - Perceba que ele possui o mesmo path do endpoint do exercício 12. A ideia é que você utilize o mesmo endpoint, altere-o para que funcione com um array de ids de task, ao invés dos parâmetros de path.
    
- **19. Deletar tarefa**
    
    **Método:** DELETE
    **Path:** `/task/:id`
    
    **Path Param**: o parâmetro indica o id da task (`taskId`)
    
    **Observações**:
    
    - O seu código deve validar se o id da task foi enviado
    - Ao apagar a task, todas as relações de usuários responsáveis relacionadas a essa task devem ser apagadas
    
- **20. Deletar usuário**