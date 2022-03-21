import React, { useState } from 'react';
import Home from './Home.js';
import FlashcardList from './FlashcardList.js'

export default function App(){ 
    const questions = [
        {question: "O que é JSX?", answer: 'Uma extensão de linguagem do JavaScript', index: 1},
        {question: 'O React é __ ', answer: 'Uma biblioteca JavaScript para construção de interfaces', index: 2},
        {question: 'Componentes devem iniciar com __', answer: 'letra maiúscula', index: 3},
        {question: 'Podemos colocar __ dentro do JSX', answer: 'expressões', index: 4},
        {question: 'O ReactDOM nos ajuda __ ', answer: 'interagindo com a DOM para colocar componentes React na mesma', index: 5},
        {question: 'Usamos o npm para __ ', answer: 'gerenciar os pacotes necessários e suas dependências', index: 6},
        {question: 'Usamos props para __', answer: 'passar diferentes informações para componentes', index: 7},
        {question: 'Usamos estado (state) para __ ', answer: 'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente', index: 8}
    ];

    const [flashcards, setFlashcards] = useState(questions);
    const [screen, setScreen] = useState(false);
    
    function changeScreen(){
        setScreen(!screen);
    } 

    return(
        screen ? <FlashcardList flashcards={flashcards}/> : <Home setScreen = {changeScreen}/>
    )
}