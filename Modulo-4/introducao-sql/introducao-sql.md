### Exercício 1

 a- id VARCHAR (255) string com até 255 caracteres

 b-  SHOW DATABASES mostra todos os bancos de dados, SHOW TABLES mostra todas as tabelas

 c- mostra uma tabela com as colunas e suas propriedades

### Exercício 2

a- 
```INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "gloria pirez",
  1200000,
  "1963-08-23", 
  "female"
)
```

b - Error Code: 1062. Duplicate entry '001' for key 'PRIMARY'/Código de erro: 1062. Entrada duplicada '001' para a chave 'PRIMARY'

c- Error Code: 1136. Column count doesn't match value count at row 1/
Código de erro: 1136. A contagem de colunas não corresponde à contagem de valores na linha 1

d-Error Code: 1364. Field 'name' doesn't have a default value/Código de erro: 1364. O campo 'nome' não tem um valor padrão

e-Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1/
Código de erro: 1292. Valor de data incorreto: '1950' para a coluna 'birth_date' na linha 1





### Exercício 3
a- ```SELECT * from Actor WHERE gender = "female"```

b-  ```SELECT salary from Actor WHERE name = "Tony Ramos"```

c- ```SELECT * from Actor WHERE gender = invalid /0 row(s) returned
0 linha(s) retornada(s)```

d- ```SELECT * from Actor WHERE salary <= 500000```

e- ```SELECT id, nome from Actor WHERE id = "002"/Error Code: 1054. Unknown column 'nome' in 'field list' ```

Código de erro: 1054. Coluna desconhecida 'nome' na 'lista de campos'/ SELECT id, name from Actor WHERE id = "002"


### Exercício 4
a-```
SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000
a query compara string q começam com a letra a ou j e o salario maior que 300000
```

b-```
SELECT * FROM Actor
WHERE (name NOT LIKE "A%") AND salary > 350000
```

c-
```SELECT * FROM Actor
WHERE (name LIKE "%G%" OR name LIKE %g%")```

d- 
```SELECT * FROM Actor
WHERE (name LIKE "%A%" OR name LIKE "%a%" OR name LIKE "%G%" OR name LIKE "%g%") AND salary Between 350000 and 900000```

### Exercício 5

a- ```CREATE TABLE filmes(
   id varchar(255) primary key,
   nome varchar(255) not null,
   sinopse text not null,
   lancamento date ,
   nota int
);```

essa query cria filmes novos, pode receber ou não nota e data de lançamento

b-
```insert into filmes (id,nome,sinopse,lancamento,nota) values(
001,
"Se Eu Fosse Você",
"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
"2006-01-06",
7
);```

c-
```insert into filmes (id,nome,sinopse,lancamento,nota) values(
002,
"Doce de mãe",
"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
"2012-12-27",
10
);```

d-
```insert into filmes (id,nome,sinopse,lancamento,nota) values(
003,
"Dona Flor e Seus Dois Maridos",
"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
"2017-11-02",
8
);```



### Exercício 6
 
a- ```SELECT id,nome,nota from filmes where id="```

b- ```SELECT *  from filmes where nome = ""```

c-```SELECT id,nome,sinopse from filmes where nota >=7```

### Exercício 7

a-```SELECT * from filmes where nome like "%vida%```

b-```SELECT * from filmes where nome like "%Vadinho%" or sinopse "%Vadinho%"```

c- ```SELECT * from filmes where lancamento <= "2022-08-22"```

d- ``` SELECT * from filmes where lancamento <= "2022-08-22"  AND nota >=8 and  nome like "%sedutora%"or sinopse like "%sedutora%" ```
