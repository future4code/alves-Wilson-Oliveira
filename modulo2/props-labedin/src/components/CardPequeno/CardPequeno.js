import React from 'react';




function Cardpequeno(props) {
    return (
        <div className="smallcard-container">
            
            <div>
                <p>{ props.endereco }</p>
                <p>{ props.email }</p>
                
            </div>
        </div>
    )
}


export default Cardpequeno;
