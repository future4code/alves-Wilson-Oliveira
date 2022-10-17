import moment from "moment"
import { ICompetitionDB } from "../../models/Competition"
import { IUserDB } from "../../models/User"

export const competitionMigrations: ICompetitionDB[] = [
    {
        competition: "Dardo semifinal",
        limit_date: new Date(moment("2022-12-10", "YYYY/MM/DD").format("YYYY/MM/DD"))
    },
    {
        competition: "Dardo final",
        limit_date: new Date(moment("2022-12-22", "YYYY/MM/DD").format("YYYY/MM/DD"))
    },
    {
        competition: "100m classificatoria 1",
        limit_date: new Date(moment("2022-12-01", "YYYY/MM/DD").format("YYYY/MM/DD"))
    }
]

export const resultMigrations  =[
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