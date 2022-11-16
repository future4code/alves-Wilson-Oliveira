import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import MegaSena from '../Screen/MegaSena/MegaSena'
import Quina from '../Screen/Quina/Quina'
import LotoFacil from '../Screen/LotoFacil/LotoFacil'
import LotoMania from '../Screen/LotoMania/LotoMania'
import TimeMania from '../Screen/TimeMania/Timemania'
import DiaDeSorte from '../Screen/DiaDeSorte/DiaDeSorte'
import Home  from '../Screen/Home/Home'


const Router = () =>{
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element = {<Home/>}/>
            <Route path="/mega-sena" element = {<MegaSena/>}/>
            <Route path="/quina" element = {<Quina/>}/>
            <Route path="/lotofacil" element = {<LotoFacil/>}/>
            <Route path="/lotomania" element = {<LotoMania/>}/>
            <Route path="/timemania" element = {<TimeMania/>}/>
            <Route path="/diadesorte" element = {<DiaDeSorte/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default Router