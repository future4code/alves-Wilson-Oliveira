import { BaseError } from './BaseError';
export class MissingField extends BaseError {
    constructor(){
        super("Por favor preencha todos os campos",404)
    }
}