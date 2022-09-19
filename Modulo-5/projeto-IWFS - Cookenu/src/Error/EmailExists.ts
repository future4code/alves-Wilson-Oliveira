import { BaseError } from './BaseError';
export default class EmailExists extends BaseError{
    constructor(){
        super("Email já cadastrado!",409)
    }
}