import { Router } from 'express'
import { PostBusiness } from '../business/PostBusiness'
import { PostController } from '../controller/PostController'
import { PostDatabase } from '../database/PostDatabase'
import { Authenticator } from '../services/Authenticator'
import { IdGenerator } from '../services/IdGenerator'

export const postRouter = Router()

const postController = new PostController(
    new PostBusiness(
        new PostDatabase(),
        new IdGenerator(),
        new Authenticator()
    )
)

postRouter.post("/", postController.createPostController)
postRouter.get("/all", postController.allPostsController)
postRouter.post("/:id/like", postController.addLikeController)
postRouter.delete("/:id/:id", postController.removeLikeController)
postRouter.delete("/:id", postController.deletePostController)