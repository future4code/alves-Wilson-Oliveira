import React from "react"
import { SelectLoto, Sidebar, Loto, Concurso, Informativo, Desktop, Data, Path2, Path3, Logo } from "./MegaSenaStyled"
import path2 from "../../Image/Path2.png"
import path3 from "../../Image/Path3.png"
import axios from "axios";
import { useEffect, useState } from "react";
import { BaseURl } from "../../Constantes/BaseUrl";
import { useNavigate, useParams } from "react-router";
import { goToDiaDeSorte, goToLotoFacil, goToLotoMania, goToMegaSena, goToQuina, goToTimeMania } from "../../Routers/Cordenation";

export const MegaSena = () => {
    const [lotterys, setLotterys] = useState([]);
    const [selectedLottery, setSelectedlottery] = useState("");
    const [listaConcurso, setListaConcurso] = useState([]);
    const [numbers, setNumbers] = useState();
    const navigate = useNavigate()

    const selectedLote = lotterys.find(
        (lottery) => "mega-sena" === lottery.nome)

    const selectedConcurso = listaConcurso.find(
        (lottery) => selectedLote?.id === lottery.loteriaId)?.concursoId


    useEffect(() => {
        getlotterys()
        getConcurso()
    }, [])

    useEffect(() => {
        getResult(selectedConcurso)
    }, [selectedConcurso])



    const getlotterys = () => {
        axios
            .get(`${BaseURl}/loterias`)
            .then((res) => {
                setLotterys(res.data);
            })
            .catch((error) => {
                alert("Ocorreu um erro, tente novamente")
            });
    };


    const getConcurso = () => {
        axios
            .get(
                `${BaseURl}/loterias-concursos`
            )
            .then((res) => {
                setListaConcurso(res.data);
            })
            .catch((error) => {
                alert("Ocorreu um erro, tente novamente")
            });
    };
    const getResult = (id) => {
        if (id) {
            axios
                .get(`${BaseURl}/concursos/${id}`)
                .then((res) => {
                    setNumbers(res.data);
                })
                .catch((error) => {
                    alert("Ocorreu um erro, tente novamente33")
                });
        }
    }

    console.log(numbers)









    const changeLoto = (event) => {
        setSelectedlottery(event.target.value);
    };

    const selectPage = (select) => {
        switch (select) {
            case "mega-sena":
                ;
                break;
            case "quina":
                goToQuina(navigate);
                break;
            case "lotofácil":
                goToLotoFacil(navigate);
                break;
            case "lotomania":
                goToLotoMania(navigate);
                break;
            case "timemania":
                goToTimeMania(navigate);
                break;
            case "dia de sorte":
                goToDiaDeSorte(navigate);
                break;
            default:
        }
    }
    const optionsLoto = () => {
        const lotteryName = lotterys.map((item) => {
            return <option key={item.id} value={item.nome}>{item.nome}</option>
        })
        return lotteryName
    }

    return (
        <Desktop>
            <Sidebar>
                <SelectLoto>
                    <select onChange={changeLoto} >
                        <option value={""}>Selecione uma lottery</option>
                        {optionsLoto()}
                    </select>
                    {selectPage(selectedLottery)}
                </SelectLoto>
                <Logo>
                    <div>
                        <Path2 src={path2} ></Path2>
                        <Path3 src={path3} ></Path3>
                    </div>
                    <Loto>{selectedLote?.nome}</Loto>
                </Logo>


                <Concurso>{selectedConcurso}</Concurso>
                <Data>17/12/1222</Data>

            </Sidebar>
            <div>
                <div>

                </div>

                <Informativo>Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA.</Informativo>
            </div>

        </Desktop>

    )

}

export default MegaSena