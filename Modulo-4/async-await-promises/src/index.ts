import axios from "axios";
import app from "./app";


// async function allSubs ():Promise <any> {
//         const response = await axios.get(`https://labenews.herokuapp.com/subscribers`)
//         return response.data
// }

const allSubs = async  ():Promise <any> => {
    const response = await axios.get(`https://labenews.herokuapp.com/subscribers`)
    return response.data
}

