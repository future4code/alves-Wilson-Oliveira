# Projeto Lista To-Do
   * Autor: Wilson Santos de Oliveira
   * Postman: 
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
	FOREIGN KEY (user_id) REFERENCES aula49_users(id),
     FOREIGN KEY (product_id) REFERENCES labecommerce_products(id),
     quantity INT NOT NULL,
     total_price FLOAT 
    );
```

## Endpoints :

* ### Criar usuario :
    * Método POST
    * Path: "/users"
    * Body: 
          * Name (obrigatório)
          * Email (obrigatório, único)
          * Password (obrigatório)
     * Retorno: 
          * Id
