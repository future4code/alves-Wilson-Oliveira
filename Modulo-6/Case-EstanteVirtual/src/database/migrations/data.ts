import { ICompetitionDB } from "../../models/Competition"
import { IUserDB } from "../../models/User"

export const competitionMigrations: ICompetitionDB[] = [
    {
        competition: "Dardo semifinal",
        limit_date: new Date ("2022-12-01")
    },
    {
        competition: "Dardo final",
        limit_date: new Date ("2022-12-02")
    },
    {
        competition: "100m classificatoria 1",
        limit_date: new Date ("2022-12-03")
    }
]

export const resultMigrations : any =[
    {
        id:"201",
        name:"João Carlos",
        competition:"Dardo final",
        value: 25,
        unity: "m"
    },{
        id:"202",
        name:"pedro jospe",
        competition:"Dardo final",
        value: 21,
        unity: "m"
    }
]


export const users: IUserDB[] = [
    {
        id: "101",
        name: "Astrodev",
        email: "astrodev@gmail.com",
        password: "$2a$12$RBAWOHpUvGTE.MEeIohAzec9tlVqtNA/x2PMPt/Hrt0vI437cQdJC", // bananinha
    },
    {
        id: "102",
        name: "Fulano",
        email: "fulano@gmail.com",
        password: "$2a$12$PULtVNlAll87D6E8pR/0HO9vbzVDPaUMA89rc5cNmYoAAepbwmkcO", // qwerty00
    },
    {
        id: "103",
        name: "Ciclana",
        email: "ciclana@gmail.com",
        password: "$2a$12$LkWMqS3oPhP2iVMcZOVvWer9ahUPulxjB0EA4TWPxWaRuEEfYGu/i", // asdfg123
    }
]