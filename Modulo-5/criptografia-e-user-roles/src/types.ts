export enum USERS_ROLE{
   ADMIN = "ADMIN",
   NORMAL="NORMAL"
}

export interface Iuser  {
   id: string
   email: string
   password: string
   name: string
   nickname: string
   role:USERS_ROLE
}