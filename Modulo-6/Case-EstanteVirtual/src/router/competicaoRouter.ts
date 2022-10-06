import { CompetitionController } from './../controller/CompeticaoController';
import { Router } from 'express'
import { Authenticator } from '../services/Authenticator'
import { HashManager } from '../services/HashManager'
import { IdGenerator } from '../services/IdGenerator'
import { CompetitionBusiness } from '../business/CompeticaoBusiness';
import { CompetitionDataBase } from '../database/CompeticaoDataBase';

export const CompetitionRouter = Router()

const competicaoController = new CompetitionController(
    new CompetitionBusiness(
        new CompetitionDataBase(),
        new IdGenerator(),
        new HashManager(),
        new Authenticator()
    )
)

CompetitionRouter.post('/',competicaoController.createCompetitionController)
CompetitionRouter.get('/all',competicaoController.allCompetitionController)
CompetitionRouter.post('/result',competicaoController.createResultController)
