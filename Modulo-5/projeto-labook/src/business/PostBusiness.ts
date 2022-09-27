import { NotFoundError } from './../errors/NotFoundError';
import { IGetPostsOutputDTO, IDeletePostInputDTO, IDeletePostOutputDTO, ILikeDB, IAddLikeOutputDTO, IRemoveLikeInputDTO, IRemoveLikeOutputDTO, IAddLikeInputDTO } from './../models/Post';
import { AuthenticationError } from './../errors/AuthenticationError';
import { ParamsError } from './../errors/ParamsError';
import { PostDatabase } from "../database/PostDatabase"
import { ICreatePostInputDTO, Post } from "../models/Post"
import { Authenticator } from "../services/Authenticator"
import { IdGenerator } from "../services/IdGenerator"
import {  USER_ROLES } from '../models/User';
import { AuthorizationError } from '../errors/AuthorizationError';

export class PostBusiness {
    constructor(
        private postDatabase: PostDatabase,
        private idGenerator: IdGenerator,
        private authenticator: Authenticator
    ) { }


    public createPostBusiness = async (input: ICreatePostInputDTO) => {
        const { content, token } = input

        if(!content||!token){
            throw new ParamsError()
        }

        if(content.length<1){
            throw new Error("Paramentro 'content' inferior a 1 caracteres")
        }

        const payload = this.authenticator.getTokenPayload(token)

        if(!payload){
            throw new AuthenticationError()
        }

        const id = this.idGenerator.generate()

        const post = new Post(id,content,payload.id)

        await this.postDatabase.createPostData(post)

        const result = {
            message: "Post criado com sucesso!",
            id:id
        }

        return result


    }

    public allPostsBusiness = async (token: string) => {

        if(!token){
            throw new ParamsError()
        }


        const payload = this.authenticator.getTokenPayload(token)

        if(!payload){
            throw new AuthenticationError()
        }


        const postsDB = await this.postDatabase.allPosts()

        const posts = postsDB.map(postDB => {
            return new Post(
                postDB.id,
                postDB.content,
                postDB.user_id
            )
        })

        for (let post of posts) {
            const postId = post.getId()
            const likes = await this.postDatabase.likeById(postId)
            post.setLikes(likes)
        }

        const response: IGetPostsOutputDTO = {
            posts
        }

        return response
    }

    public deletePostBusiness = async (input: IDeletePostInputDTO) =>{

        const {id,token} = input

        
        const payload = this.authenticator.getTokenPayload(token)

        if (!payload) {
            throw new AuthenticationError()
        }

        const postDB = await this.postDatabase.findPostById(id)

        if (!postDB) {
            throw new NotFoundError()
        }

        if (payload.role === USER_ROLES.NORMAL) {
            if (postDB.user_id !== payload.id) {
                throw new AuthorizationError()
            }
        }

        const findLike: ILikeDB =await this.postDatabase.findLIke(id,payload.id)

        if(findLike){
            await this.postDatabase.deleteLike(id,payload.id)
        }



        await this.postDatabase.deletePost(id)

        const response: IDeletePostOutputDTO = {
            message: "Post deletado com sucesso"
        }

        return response
    }

    public addLIkeBusiness = async (input:IAddLikeInputDTO)=>{
        const { token, postId } = input

        const payload = this.authenticator.getTokenPayload(token)

        if (!payload) {
            throw new AuthorizationError()
        }

        
        const postDB = await this.postDatabase.findPostById(postId)
        console.log(postDB)
        if (!postDB) {
            throw new NotFoundError()
        }


        const isAlreadyLiked = await this.postDatabase.findLIke(
            postId,
            payload.id
        )

        if (isAlreadyLiked) {
            throw new Error("Já deu like")
        }

        const likeDB: ILikeDB = {
            id: this.idGenerator.generate(),
            post_id: postId,
            user_id: payload.id
        }

        await this.postDatabase.addLike(likeDB)

        const response: IAddLikeOutputDTO = {
            message: "Like realizado com sucesso"
        }

        return response

    }

    public removeLikeBusiness = async (input: IRemoveLikeInputDTO) => {
        const { token, postId } = input

        const payload = this.authenticator.getTokenPayload(token)

        if (!payload) {
            throw new AuthenticationError()
        }

        const postDB = await this.postDatabase.findPostById(postId)

        if (!postDB) {
            throw new NotFoundError()
        }

        const isAlreadyLiked = await this.postDatabase.findLIke(
            postId,
            payload.id
        )

        if (!isAlreadyLiked) {
            throw new Error("Ainda não deu like")
        }

        await this.postDatabase.deleteLike(postId, payload.id)

        const response: IRemoveLikeOutputDTO = {
            message: "Like removido com sucesso"
        }

        return response
    }

}
