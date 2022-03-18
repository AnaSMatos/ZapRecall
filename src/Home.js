import ReactDOM from 'react-dom';
import React from 'react';

export default function Home(){
    return(
        <div className='home'>
            <img src='../assets/logo.png' alt='logo'></img>
            <h1>ZapRecall</h1>
            <div><button><p>Iniciar Recall!</p></button></div>
        </div>
    )
}