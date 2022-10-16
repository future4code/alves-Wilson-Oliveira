import React from "react"
import axios from "axios";
import { useEffect, useState } from "react";
import { BaseURl } from "../../Constantes/BaseUrl";
import { useNavigate } from "react-router";
import { goToDiaDeSorte, goToLotoFacil, goToLotoMania, goToMega, goToMegaSena, goToQuina, goToTimeMania } from "../../Routers/Cordenation";


 const Home = () => {
    const [loterias, setLoterias] = useState([]);
    const [selectedLoteria, setSelectedLoteria] = useState();
    const navigate = useNavigate()



    useEffect(() => {
        getTitle()
    }, [])

    const getTitle = () => {
        axios
            .get(`${BaseURl}/loterias`)
            .then((res) => {
                setLoterias(res.data);
            })
            .catch((error) => {
                alert("Ocorreu um erro, tente novamente")
            });
    };

    const changeLoto = (event) => {
        setSelectedLoteria(event.target.value);
    };

    const selectPage = (select) => {
        switch (select) {
            case "mega-sena":
                goToMegaSena(navigate,"mega-sena");
                break;
            case "quina":
                goToMegaSena(navigate,"quina");
                break;
            case "lotofácil":
                goToMegaSena(navigate,"lotofácil");
                break;
            case "lotomania":
                goToMegaSena(navigate,"lotomania");
                break;
                case "timemania":
                    goToMegaSena(navigate,"timemania");
                    break;
            case "dia de sorte":
                goToMegaSena(navigate,"dia de sorte");
                    break;
            default:
            }
        }

        const optionsLoto = () => {
            const lotoName =loterias.map((item) => {
                return <option value={item.nome}>{item.nome}</option>
            })
            return lotoName
    }

    return(
        <div>

        <select onChange={changeLoto} >
                    <option value={""}>Selecione uma loteria</option>
                    {optionsLoto()}
                    </select>
                    {selectPage(selectedLoteria)}
                    </div>
    )
}

export default Home