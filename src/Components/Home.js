import React, { useState } from 'react';

export default function Home(props){
    
    return(
        <div className='home'>
            <img src='../assets/logo.png' alt='logo'></img>
            <h1>ZapRecall</h1>
            <div><button onClick={props.setScreen}><p>Iniciar Recall!</p></button></div>
        </div>
    )
    
}