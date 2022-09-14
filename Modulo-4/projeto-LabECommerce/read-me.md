# Projeto Lista To-Do
   * Autor: Wilson Santos de Oliveira
   * Postman: https://documenter.getpostman.com/view/21555870/VUxYnhGU
   * Status: Em produção

___

## Estrutura de dados

* ### Usuários:

    * Id

    * Name

    * Password

    * Email
    
* ### Usuários:

    * Id

    * Name

    * Price

    * Image_url

* ### Registro de compra:

    * Id

    * User_id

    * Product_id

    * Quantity

    * Total_price

___

## Criação de tabelas :
 
``` sql 
CREATE TABLE  labecommerce_users (
     id VARCHAR(265) PRIMARY KEY ,
     name VARCHAR(255) NOT NULL ,
     email VARCHAR(255) NOT NULL UNIQUE,
     password VARCHAR (64) NOT NULL UNIQUE
     );
```

``` sql 
CREATE TABLE  labecommerce_products (
     id VARCHAR(265) PRIMARY KEY ,
     name VARCHAR(255) NOT NULL ,
     price float NOT NULL ,
     image_url VARCHAR (1064) NOT NULL 
     );
```

``` sql 
  CREATE TABLE  labecommerce_purchases (
     id VARCHAR(265) PRIMARY KEY ,
     user_id VARCHAR(255) ,
     product_id VARCHAR(255) ,
	FOREIGN KEY (user_id) REFERENCES labecommerce_users(id),
     FOREIGN KEY (product_id) REFERENCES labecommerce_products(id),
     quantity INT NOT NULL,
     total_price FLOAT 
    );
```

## Endpoints :

* ### Criar usuario :
    * Método POST
    * Path: "/users"
    * Id gerado pela própria aplicação em código
    * Body: 
          * Name (obrigatório)
          * Email (obrigatório, único)
          * Password (obrigatório)
    * Retorno: 
          * Id

* ### Busca por todos os usuários :

    * Método GET
    * Path "/users"
    * Retorna uma lista com todos os usuários cadastrados no banco

* ### Cadastrar um produto :

    * Método POST
    * Path: "/products"
    * Id gerado pela própria aplicação em código
    * Body: 
          * Name (obrigatório)
          * Price (obrigatório)
          * ImageUrl (obrigatório)
    * Retorno: 
          * Id

* ### Buscar por todos os produtos:

    * Método GET
    * Path "/users"
    * Opicional query order e search
    * Retorna uma lista com todos os produtos cadastrados no banco, poderndo ser ordenada por nome e realizar busca por nome

* ### Registar uma compra:

    * Método POST
    * Path: "/purchases"
    * Id gerado pela própria aplicação em código
    * Body: 
          * UserId (obrigatório)
          * ProductId (obrigatório)
          * Quantity (obrigatório)
    * Retorno: 
          * Id
          * TotalPrice

* ### Buscar todos os registros de compra de um usuario:

    * Método GET
    * Path "/users/:user_id/purchases"
    * Path Params:
        * user_id
    * Retorna uma lista com todos os produtos comprados por um usuario