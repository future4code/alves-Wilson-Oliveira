import axios from "axios"

const baseURL= 'https://viacep.com.br/ws'

const getAddressInfo = async (cep:string):Promise<any> =>{
try {

    const response= await axios.get(`${baseURL}/${cep}/json`)

    const {logradouro, bairro,localidade,uf}= response.data

    const address = {
        logradouro,
        bairro,
        localidade,
        uf
    }

    

    console.log(address)


    return address
} catch (error) {
    throw new Error()
}

}

export default getAddressInfo