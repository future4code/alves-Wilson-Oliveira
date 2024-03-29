import { Result, IFindResultInputDTO, IFindResultOutputDTO, ICreateResultOutputDTO, IDeleteResultInputDtO, IDeleteResultOutputDTO } from './../models/Result';
import { CompetitionDataBase } from './../database/CompeticaoDataBase';
import { NotFoundError } from "../errors/NotFoundError"
import { ConflictError } from "../errors/ConflictError"
import { ParamsError } from "../errors/ParamsError"
import { Authenticator } from "../services/Authenticator"
import { IdGenerator } from "../services/IdGenerator"
import { AuthenticationError } from "../errors/AuthenticationError"
import moment from 'moment';
import { Competition, IAllCompetitionOutput, ICreateCompetitionInputDTO } from '../models/Competition';
import { ICreateResultInputDTO } from '../models/Result';

export class CompetitionBusiness {
    constructor(
        private competicaoDatabase: CompetitionDataBase,
        private idGenerator: IdGenerator,
        private authenticator: Authenticator
    ) { }

    public createCompetitionBusiness = async (input: ICreateCompetitionInputDTO) => {
        const { competition, limitDate, token } = input


        if (!competition || !limitDate) {
            throw new ParamsError()
        }

        const payload = this.authenticator.getTokenPayload(token)

        if (!payload) {
            throw new AuthenticationError()
        }

        if (competition.length < 3) {
            throw new ParamsError("Paramentro 'competicao' inferior a 3 caracteres")
        }


        if (!limitDate.match(/^[0-9-/]*$/)) {
            throw new ParamsError("Paramentro 'data' com formato inregular")
        }

        const dateMoment = moment(limitDate, "DD/MM/YYYY").format("YYYY/MM/DD")

        const finalDate = new Date(dateMoment)


        const newCompetition = new Competition(competition, finalDate)

        await this.competicaoDatabase.createCompeticaoDataBase(newCompetition)

        const result = {
            message: "Competição cadastrada com sucesso!",
        }

        return result
    }


    public allCompetitionBusiness = async () => {


        const competitions = await this.competicaoDatabase.allCompeticoesDataBase()

        const result: IAllCompetitionOutput[] = competitions.map((competicao) => {
            const newCompetition = new Competition(competicao.competition, competicao.limit_date)

            const formatCompetition = {
                competicao: newCompetition.getCompetition(),
                enceramento: moment(newCompetition.getLimitDate(), "YYYY-MM-DD").format("DD/MM/YYYY")
            }
            return formatCompetition
        })

        return result
    }

    public createResultBusiness = async (input: ICreateResultInputDTO) => {

        const { token, name, competition, unity } = input
        let { value } = input

        if (!name || !competition || !value || !unity) {
            throw new ParamsError()
        }

        const payload = this.authenticator.getTokenPayload(token)

        if (!payload) {
            throw new AuthenticationError()
        }

        if (name.length < 3 || typeof (name) !== 'string') {
            throw new ParamsError("Paramentro 'name' deve conter no mínimo 3 caracteres e estar no formato string")
        }

        if (typeof (value) !== "number" && typeof (value) !== "object") {
            throw new ParamsError("Parametro value deve ser do tipo 'number'ou  para a competição 'Dardos' um array com 3 number")
        }

        if (typeof (unity) !== "string") {
            throw new ParamsError("Parametro unity deve ser do tipo 'string'")
        }

        const competitionFind = await this.competicaoDatabase.findByCompeticaoDataBase(competition)



        if (!competitionFind) {
            throw new NotFoundError("Competição não cadastrada")
        }

        const competitionClass = new Competition(
            competitionFind.competition,
            competitionFind.limit_date
        )

        if (competitionClass.getLimitDate() < new Date(Date.now())) {
            throw new ConflictError("Competição encerrada")
        }

        if (competitionClass.getCompetition().indexOf("Dardo") < 0 && typeof (value) !== "number") {
            throw new ParamsError("Parametro 'value' deve serdo tipo number")
        }

        if (competitionClass.getCompetition().indexOf("Dardo") >= 0) {

            if (typeof (value) !== "object") {
                throw new ParamsError(" A competição 'Dardo' precisa ter 3 valores numericos em um array")
            }

            const values = value as number[]

            const maxValue = values.reduce(function (prev, current) {
                return prev > current ? prev : current;
            });

            value = maxValue
        }

        const id = this.idGenerator.generate()

        const newResult: Result = new Result(
            id,
            name,
            competition,
            value as number,
            unity
        )

        await this.competicaoDatabase.createResultDataBase(newResult)

        const response: ICreateResultOutputDTO = {
            message: "Resultado cadastrado com sucesso"
        }

        return response

    }

    public resultsByCompetitionBusiness = async (input: IFindResultInputDTO) => {

        const { competition } = input

        const competitionFind = await this.competicaoDatabase.findByCompeticaoDataBase(competition)

        if (!competitionFind) {
            throw new NotFoundError("Competição não cadastrada")
        }

        const newCompetition = new Competition(competitionFind.competition, competitionFind.limit_date)

        const status = () => {
            if (newCompetition.getLimitDate() > new Date(Date.now())) {
                return "Em andamento"
            } else {
                return "Finalizado"
            }
        }

        const resultByCompetition = await this.competicaoDatabase.resultsByCompetitionDataBase(competition)
        const newResult = resultByCompetition.map((competition) => {
            return new Result(
                competition.id,
                competition.name,
                competition.competition,
                competition.value,
                competition.unity
            )
        })

        const result: IFindResultOutputDTO = {
            status: status(),
            "classificação": newResult
        }


        return result
    }

    public deleteResultBusiness = async (input: IDeleteResultInputDtO) => {

        const { resultId, token } = input

        if (!resultId) {
            throw new ParamsError()
        }

        const payload = this.authenticator.getTokenPayload(token)

        if (!payload) {
            throw new AuthenticationError()
        }

        if (typeof resultId !== "string") {
            throw new ParamsError("resultId precisa ser uma string")
        }

        const findResult = await this.competicaoDatabase.resultsByIdDataBase(resultId)



        if (!findResult) {
            throw new ConflictError("Nenhum resultado encontrado ")
        }

        await this.competicaoDatabase.deleteResultDataBase(resultId)

        const response: IDeleteResultOutputDTO = {
            message: "Resultado cancelado"
        }

        return response


    }

}