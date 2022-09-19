import { BaseError } from './BaseError';
export default class UserNotFound extends BaseError{
    constructor(){
        super("Usuário não encontrado",409)
    }
}