import React from 'react'
import Footer from './Footer'
import Top from './Top';
import Flashcard from  './Flashcard';

export default function FlashcardList({flashcards}){
    return(
        <div className='cards-page'>
            <Top/>
            <div className='content-cards'>
                {flashcards.map(flashcard => {
                    return <Flashcard flashcard={flashcard} key={flashcard.index}/>
                })}
            </div>
            <Footer/>
        </div>
    )
}