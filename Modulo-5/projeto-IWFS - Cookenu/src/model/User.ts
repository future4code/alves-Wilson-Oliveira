export class User{
    constructor(
        private id :string,
        private name : string,
        private email:string,
        private password:string,
        private role : string

    ){
        const getId = () => {
            return this.id
        }

        const getName = () => {
            return this.name
        }

        const getEmail = () => {
            return this.email
        }

        const getPassword = () => {
            return this.password
        }

        const getRole = () => {
            return this.role
        }

        const setID = () => {
            
        }

    }
    
    static toUserModel (data:any) :User {
        return new User(data.id, data.name, data.email, data.password, data.role)
    }

    
}