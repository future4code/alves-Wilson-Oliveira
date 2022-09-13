import {v4} from 'uuid'

export default class GerarId{
    criarID():string {
        return v4()
    }
}