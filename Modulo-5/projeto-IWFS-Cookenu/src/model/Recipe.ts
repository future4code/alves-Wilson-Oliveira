export class Recipe {
    constructor(
        private id :string,
        private title : string,
        private description : string,
        private data : string,
        private userId : string,
    ){ }

    public  getId = () => {
        return this.id
    }

    public  getTitle = () => {
        return this.title
    }

    public  getDescription = () => {
        return this.description
    }

    public  getData = () => {
        return this.data
    }

    public  getUserId = () => {
        return this.userId
    }

    static toRecipeModel (data:any) :Recipe {
        return new Recipe (data.id, data.title, data.description, data.data, data.userId)
    }
}