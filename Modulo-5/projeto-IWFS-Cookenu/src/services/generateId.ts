import {v4} from 'uuid'

export default class GenerateId {
     public creatID=():string =>{
        return v4()

    }
}