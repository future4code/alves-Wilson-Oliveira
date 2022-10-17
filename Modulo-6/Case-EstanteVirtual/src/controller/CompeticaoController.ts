import { CompetitionBusiness } from './../business/CompeticaoBusiness';
import { Request, Response } from "express";
import { ICreateCompetitionInputDTO } from "../models/Competition";
import { ICreateResultInputDTO, IDeleteResultInputDtO } from '../models/Result';


export class CompetitionController {
    constructor(
        private competitionBusiness: CompetitionBusiness
    ) {}

    public createCompetitionController = async (req: Request, res: Response) => {
        try {
            const input: ICreateCompetitionInputDTO = {
                competition:req.body.competition,
                limitDate:req.body.limitDate,
                token: req.headers.authorization as string
            }


            const response = await this.competitionBusiness.createCompetitionBusiness(input)

            res.status(201).send(response)
        } catch (error:any) {
            res.status(400).send({ message: error.message })
        }
    }

    public allCompetitionController = async (req: Request, res: Response) => {
        try {
            const response = await this.competitionBusiness.allCompetitionBusiness()

            res.status(201).send(response)
        } catch (error:any) {
            res.status(400).send({ message: error.message })
        }
    }

    public createResultController = async (req: Request, res: Response) => {
        try {
            const input:ICreateResultInputDTO = {
                name:req.body.name,
                competition:req.body.competition,
                value:req.body.value,
                unity:req.body.unity,
                token:req.headers.authorization as string
            } 

            const response = await this.competitionBusiness.createResultBusiness(input)
            res.status(201).send(response)
        } catch (error:any) {
            res.status(400).send({ message: error.message })
        }
    }

    public resultByCompetitionController = async (req: Request, res: Response) => {
        try {
            const input = {competition:req.params.competition}
            
            const response = await this.competitionBusiness.resultsByCompetitionBusiness(input)

            res.status(201).send(response)
        } catch (error:any) {
            res.status(400).send({ message: error.message })
        }
    }

    public deleteResultController = async (req: Request, res: Response) => {
        try {
            const input: IDeleteResultInputDtO= {
                token:req.headers.authorization as string,
                resultId:req.body.resultId
            }

            const response = await this.competitionBusiness.deleteResultBusiness(input)

            res.status(201).send(response)
        } catch (error:any) {
            res.status(400).send({ message: error.message })
        }
    }
}