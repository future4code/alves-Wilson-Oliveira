import React from "react"
import { SelectLoto, Sidebar, Loto, Informativo, Desktop, Data, Path2, Path3, Logo, Bola, Sorteio } from "../Styled"
import path2 from "../../Image/Path2.png"
import path3 from "../../Image/Path3.png"
import axios from "axios";
import { useEffect, useState } from "react";
import { BaseURl } from "../../Constantes/BaseUrl";
import { useNavigate} from "react-router";
import { goToDiaDeSorte, goToLotoFacil, goToLotoMania, goToMegaSena, goToQuina, goToTimeMania } from "../../Routers/Cordenation";
import moment from "moment/moment";
import sidebarImg from "../../Image/Home.png"

 const Home = () => {
    const [lotterys, setLotterys] = useState([]);
    const [selectedLottery, setSelectedlottery] = useState("");
    const navigate = useNavigate()





    useEffect(() => {
        getlotterys()
    }, [])



    const getlotterys = () => {
        axios
            .get(`${BaseURl}/loterias`)
            .then((res) => {
                setLotterys(res.data);
            })
            .catch((error) => {
                alert(error.response.data.message)
            });
    };


    const changeLoto = (event) => {
        setSelectedlottery(event.target.value);
    };

    const selectPage = (select) => {
        switch (select) {
            case "mega-sena":
                goToMegaSena(navigate)
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
        return lotterys.map((item) => {
            return <option key={item.id} value={item.nome}>{item.nome}</option>
        })
    }
    const formatDate = moment(new Date(Date.now()), "YYYY-MM-DD").format("DD/MM/YYYY")

    const brainn=["B","R","A","I","N","N"]

    const renderNumbers = () => {
        return brainn.map((number) => <Bola key={number}>{number}</Bola>);
    };

    return (
        <Desktop>
            <Sidebar backgroud={sidebarImg}>
                <SelectLoto>
                    <select onChange={changeLoto} >
                        <option>Selecione uma loteria</option>
                        {optionsLoto()}
                    </select>
                    {selectPage(selectedLottery)}
                </SelectLoto>
                <Logo>
                    <div>
                        <Path2 src={path2} ></Path2>
                        <Path3 src={path3} ></Path3>
                    </div>
                    <Loto>Brainn</Loto>
                    
                </Logo>
                <Data>{formatDate}</Data>
            </Sidebar>
            <div>
                <Sorteio>
                    {renderNumbers()}
                </Sorteio>
                <Informativo> Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA.</Informativo>
            </div>
        </Desktop>
    )

}

export default Home