import { IPostDB, ILikeDB } from './../models/Post';
import { Post } from "../models/Post"
import { BaseDatabase } from "./BaseDatabase"

export class PostDatabase extends BaseDatabase {
    public static TABLE_POSTS = "labook_posts"
    public static TABLE_LIKES = "labook_likes"

    public createPostData = async (post: Post) => {
        const postDB: IPostDB = {
            id: post.getId(),
            content:post.getContent(),
            user_id:post.getUserId()
        }
        await BaseDatabase.connection(PostDatabase.TABLE_POSTS)
        .insert(postDB)
}

public allPosts = async () => {
    const postsDB: IPostDB[] = await BaseDatabase
        .connection(PostDatabase.TABLE_POSTS)
        .select()

    return postsDB
}

public likeById = async (postId: string) => {
    const result: any = await BaseDatabase
        .connection(PostDatabase.TABLE_LIKES)
        .select()
        .count("id AS likes")
        .where({ post_id: postId })

    return result[0].likes as number
}

public deletePost = async (id: string) => {
    await BaseDatabase
        .connection(PostDatabase.TABLE_POSTS)
        .delete()
        .where({ id })
}

public findLIke = async ( postId: string, userId: string)=>{
    const [likesDB]: ILikeDB[] = await BaseDatabase.connection(PostDatabase.TABLE_LIKES)
    .select()
    .where({user_id:userId})
    .andWhere({post_id:postId})

    return likesDB
}

public addLike = async (likeDB:ILikeDB) =>{
    await BaseDatabase.connection(PostDatabase.TABLE_LIKES)
    .insert(likeDB)
}

public deleteLike = async (postId: string, userId: string)=>{
    await BaseDatabase.connection(PostDatabase.TABLE_LIKES)
    .delete()
    .where({user_id:userId})
    .andWhere({post_id:postId})
}

public findPostById = async (id:string) => {
    const postsDB: IPostDB[] = await BaseDatabase.connection(PostDatabase.TABLE_POSTS)
    .select()
    .where({id})
    return postsDB[0]
}


}