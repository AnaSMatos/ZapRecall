import React from "react";
import Results from './Results'

export default function Footer(props){
    const{completas, acertos, icones} = props;

    

    return(
        (completas < 8) ?
        <footer className="incomplete">
            <p>{completas}/8 CONCLUÍDOS</p>
            <Results listaIcones={icones}/>
        </footer> 
        
        : /*end complete*/

        (acertos === 8) ?
        <footer className="complete">
            <div className="tela-final">
                <img src="../assets/party.png" alt="happy-emoji"></img>
                <h1>Parabéns!</h1>    
            </div>
            <p>Você não esqueceu de nenhum flashcard!</p>
            <p>{completas}/8 CONCLUÍDOS</p>
            <Results listaIcones={icones}/>
        </footer> :

        <footer className="complete">
            <div className="tela-final">
                <img src="../assets/sad.png" alt="sad-emoji"></img>
                <h1>Putz...</h1>
            </div>
            <p>Ainda faltam alguns... Mas não desanime!</p>
            <p>{completas}/8 CONCLUÍDOS</p>
            <Results listaIcones={icones}/>
        </footer>
    )
}