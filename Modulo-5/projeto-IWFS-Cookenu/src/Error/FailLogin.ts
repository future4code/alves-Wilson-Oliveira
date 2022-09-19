import { BaseError } from './BaseError';
export default class FailLogin extends BaseError{
    constructor(){
        super("Email ou senha invalido",409)
    }
}