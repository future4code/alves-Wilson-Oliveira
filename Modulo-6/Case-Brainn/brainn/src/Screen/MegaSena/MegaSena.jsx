import React from "react"
import { SelectLoto, MegaSenaContainer, SemiCirculo, Sidebar, Loto, Concurso, Informativo } from "./MegaSenaStyled"

const MegaSena = () => {

    return (
        <MegaSenaContainer>
            <Sidebar>
                <SelectLoto>
                    <select>
                        <option value="Quina">Quina</option>
                        <option value="LotoFacil">Loto Fácil</option>
                        <option value="LotoMania">LotoMania</option>
                        <option value="DiaDeSorte">"Dia De Sorte"</option>
                        <option value="TimeMania">TimeMania</option>
                    </select>
                </SelectLoto>
                <Loto><p>megasena</p></Loto>
                 <Concurso>concurso</Concurso>

            </Sidebar>
            <div>
                <div>

                </div>
                
                <Informativo>Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA.</Informativo>
                
            </div>
        </MegaSenaContainer>

    )

}

export default MegaSena