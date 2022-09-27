import { IAddLikeInputDTO, ICreatePostInputDTO, IDeletePostInputDTO, IRemoveLikeInputDTO } from './../models/Post';
import { Request, Response } from "express";
import { PostBusiness } from "../business/PostBusiness";

export class PostController {
    constructor(
        private postBusiness: PostBusiness
    ) {}

    public createPostController = async (req: Request, res: Response) => {
        try {
            const input: ICreatePostInputDTO = {
                content:req.body.content,
                token:req.headers.authorization as string
            }


            const response = await this.postBusiness.createPostBusiness(input)

            res.status(201).send(response)
        } catch (error:any) {
            res.status(400).send({ message: error.message })
        }
    }

    public allPostsController = async (req: Request, res: Response) => {
        try {
            const input:string = req.headers.authorization as string

            const response = await this.postBusiness.allPostsBusiness(input)

            res.status(201).send(response)
        } catch (error:any) {
            res.status(400).send({ message: error.message })
        }
    }

    public deletePostController = async (req: Request, res: Response) => {
        try {
            const input:IDeletePostInputDTO = {
                token:req.headers.authorization as string,
                id:req.params.id
            } 

            const response = await this.postBusiness.deletePostBusiness(input)

            res.status(201).send(response)
        } catch (error:any) {
            res.status(400).send({ message: error.message })
        }
    }

    public addLikeController = async (req: Request, res: Response) => {
        try {
            const input:IAddLikeInputDTO = {
                token:req.headers.authorization as string,
                postId:req.params.id
            } 

            const response = await this.postBusiness.addLIkeBusiness(input)

            res.status(201).send(response)

        } catch (error:any) {
            res.status(400).send({ message: error.message })
        }
    }

    public removeLikeController = async (req: Request, res: Response) => {
        try {
            const input:IRemoveLikeInputDTO= {
                token:req.headers.authorization as string,
                postId:req.params.id
            } 

            const response = await this.postBusiness.removeLikeBusiness(input)

            res.status(201).send(response)
        } catch (error:any) {
            res.status(400).send({ message: error.message })
        }   
    }

}