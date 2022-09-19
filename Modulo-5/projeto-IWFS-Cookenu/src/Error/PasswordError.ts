import { BaseError } from './BaseError';
export class PasswordError extends BaseError {
    constructor(){
        super("Por favor informe uma senha com no minimo 6 caracteres",404)
    }
}