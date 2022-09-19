import { BaseError } from './BaseError';
export default class LoginError extends BaseError{
    constructor(){
        super("token invalido ou inexistente",409)
    }
}