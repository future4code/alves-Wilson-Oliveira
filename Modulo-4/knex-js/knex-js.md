### Exercício 1

a- quando usamos o raw, a resposta vem com informções adcionais além do necessario, precisamos desestruturar.

b-  const pegaAtor= async(id:string):Promise<any>=>{ 
            const [result] = await connection.raw(
            `SELECT * FROM Actor where id = ${id} `
        )
        return result
    }

    c- const genero = async(gender:string):Promise<any> => {
        const [result1] = await connection.raw(
            `SELECT COUNT (*) FROM Actor where gender = "${gender}"`
        )
        return result1
    }

### Exercício 2

a-    const atualizaSalario =async (id:string,salary:number) : Promise<any> => {
        await connection ("Actor")
        .update({
            salary:salary
    }).where ({
        id:id
    })
        
    }

    b-    const deletarAtor =async (id:string):Promise<any> => {
        await connection ("Actor")
        .delete().where({
            id:id
        })
    }

    c-    const salarioMedia =async (gender:string):Promise<any> => {
        const [media] = await connection ("Actor")
        .avg("salary").where({gender:gender})
        return media
    }

### Exercício 3

a-app.get("/actors/:id", async(req:Request,res:Response):Promise<void>=>{
    try {
        
    const id=req.params.id;
        const ator= await pegaAtor(id)
        res.status(200).send(ator)
        } catch (error:any) {
        res.status(500).send(error.message)
        
    }
})

b- app.get("/actor", async (req: Request, res: Response) => {
  try {
    const count = await countActors(req.query.gender as string);
    res.status(200).send({
      quantity: count,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});



### Exercício 4

-app.put("/actor", async (req: Request, res: Response) => {
  try {
    await updateSalary(req.body.id, req.body.salary);
    res.status(200).send({
      message: "Success",
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});