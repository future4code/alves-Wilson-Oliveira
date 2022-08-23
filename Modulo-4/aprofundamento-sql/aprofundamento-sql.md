### Exercício 1

a- ALTER TABLE Actor DROP COLUMN salary;// deletaria a coluna salary

b-ALTER TABLE Actor CHANGE gender sex VARCHAR(6)// mudaria a condição de gender para uma string de 6 caracteres e seu nome para sex

c-ALTER TABLE Actor CHANGE gender gender VARCHAR(255)// mudaria a condição de gerder para string de 255 caracteres e manteria seu nome

d-ALTER TABLE Actor CHANGE gender gender VARCHAR(100)


### Exercício 2

a-update Actor set name = "joão" , birth_date = "2002-05-09" where id="002"

b-update Actor set name = lower("JULIANA PAES") where name = "juliana paes";/update Actor set name = upper("JULIANA PAES") where name = "juliana paes";

c-update Actor set name = "Moacyr Franco",salary=50000,birth_date="1999-05-05",gender="male" where id=005

d-update Actor set name = "Moacyr Franco",salary=50000,birth_date="1999-05-05",gender="male" where id=056/0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0/0 linha(s) afetada(s) Linha(s) correspondida(s): 0 Alterado: 0 Avisos: 0/ não houve nenhuma alteração.

### Exercício 3

a-DELETE FROM Actor WHERE name = "Fernanda Montenegro"

b-DELETE FROM Actor WHERE gender="male" and salary > 1000000 


### Exercício 4

a-select max(salary) from Actor

b-select min(salary) from Actor where gender = "famale"

c-SELECT COUNT(*) FROM Actor WHERE gender = "female"

d- select sum(salary) from Actor

### Exercício 5

a- o comando group by junta colunas com o mesmo valor e as contam

b- select id , name from Actor  order by name deSC

c- select * from Actor  order by salary asc

d-select * from Actor  order by salary desc limit 3

e- select gender , avg(salary) from Actor  group by  gender 

### Exercício 6

a- alter table filmes add data_limite date;

b- alter table filmes change nota nota float;

c- update filmes set data_limite = "2022-08-26" where id=1/update filmes set data_limite = "2022-08-10" where id=2

d- 0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0/0 linha(s) afetada(s) Linha(s) correspondida(s): 0 Alterado: 0 Avisos: 0
não encontrou nenhum filme correspondente ao id

