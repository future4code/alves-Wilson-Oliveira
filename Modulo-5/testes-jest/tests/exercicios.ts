
export const checarPar = (n: number): boolean => {
    if (n % 2 == 0) {
        return true
    }

    return false
}

export const caixaAlta = (texto:string): string =>{
    return texto.toUpperCase()
}

export const separarLetras = (texto:string): string[] =>{
    return texto.split("")
}

export const textoNumero = (texto:string): number =>{
    if(isNaN(Number(texto))){
    return 0 
}
return Number(texto)
}

export const numeroLetras = (texto:string): number =>{
    return texto.length
}

export const numerosaleatorios = (): number =>{
    return Number((Math.random() * (10 - 1) + 1).toFixed())
}

export interface IUser { 
    nome:string
}

export const users :IUser[] = [{
    nome:"astrodev",
},{
    nome:"will",
}]

export const media = (n:number[]): number =>{
    const divisor = n.length
    const soma = n.reduce((a,b)=>a+b)
    return soma/divisor
}

export const anoDeNascimento = (anoNascimento:number): number =>{
    const anoatual = new Date().getFullYear()
    const anos = anoatual - anoNascimento

    return anos
}

export const formatoData = (data:string): string =>{
    const ano = new Date(data).getFullYear().toString()
    let mes = (new Date(data).getMonth()+1).toString() 
    let dia = new Date(data).getDate().toString()
    
    if(mes.length < 2){mes = "0" + mes}
    if(dia.length < 2){dia = "0" + dia}
    
    const dataFormatada = `${dia}/${mes}/${ano}`

    return  dataFormatada
}
