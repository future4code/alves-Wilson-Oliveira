### Exercício 1
    a- get https://labenews.herokuapp.com/subscribers

    b- async function allSubs ():Promise <any[]> {}

    c-  
```tsx
    async function allSubs ():Promise <any> {
        const response = await axios.get(`https://labenews.herokuapp.com/subscribers`)
        return response.data
 }
```

### Exercício 2

a- a função com arrow function precisa de uma const e uma => apos o type


b-
```tsx
const allSubs = async  ():Promise <any> => {
    const response = await axios.get(`https://labenews.herokuapp.com/subscribers`)
    return response.data
}
```

### Exercício 3
```tsx
type user = {
	id: string;
	name: string;
	email: string;
}
```

a- Sim, pois o type esta em formato de  objeto e não de array

b- Não, pois em uma Promise<any> não podemos saber qual tipo sera retornado e o .map é uma função que só funciona em array

c- 
```tsx
const allSubs = async (): Promise<user[]> => {
  const response = await axios.get(`https://labenews.herokuapp.com/subscriberss`);
  return response.data.map((res: any) => {
    return {
      id: res.id,
      name: res.name,
      email: res.email,
    };
  });
};
```

### Exercício 4

a- É uma função assincrona que recebe o metodo post

b- 
```tsx
async function createNews(
  title: string,
  content: string,
  date: number
): Promise<void> {
  await axios.put(`https://labenews.herokuapp.com/news`, {
    title: title,
    content: content, 
    date: date
  });
}
```

### Exercício 5

    ```tsx
    const sendNotifications = async (
      users: user[],
      message: string
    ): Promise<void> => {
    
      try {
    		for (const user of users) {
    	    await axios.post(`https://labenews.herokuapp.com/notifications`, {
    	      subscriberId: user.id,
    	      message : "Chegou uma nova noticia"
    	    });
    	  }
    
    	  console.log("Todos os usuarios foram notificados");
    	} catch {
    		console.log("Error");
    	}
    };
    ```


### Exercício 6

a- esse metodo recebe um array de promises e retorna outra promise que resolve em um array de respostas

b- o código ganha mais desempenho e menos repetições.

c-

```tsx
const sendNotifications = async (
  users: user[],
  message: string
): Promise<void> => {

	try {
	  const promises = users.map(user =>{
	    return axios.post(`${baseUrl}/notifications`, {
	      subscriberId: user.id,
	      message: message,
	    })
	  })
	
	  await Promise.all(promises);

	} catch {
		console.log("Error");
	}
};
```