import { BaseError } from './BaseError';
export class TokenError extends BaseError {
    constructor(){
        super("Por favor faça login novamente",400)
    }
    }