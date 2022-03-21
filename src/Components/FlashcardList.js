import React from 'react'
import Footer from './Footer'
import Top from './Top';
import Flashcard from  './Flashcard';

export default function FlashcardList({flashcards}){
    const [complete, setComplete] = React.useState(0);
    const [hit, setHit] = React.useState(0);
    const [listIcons, setListIcons] = React.useState([]);
    

    return(
        <div className='cards-page'>
            <Top/>
            <div className='content-cards'>
                {flashcards.map(flashcard => {
                    return <Flashcard flashcard={flashcard}  
                    complete={()=>setComplete(complete+1)} hit={()=>setHit(hit+1)} 
                    setListIcons={(updatedIcons)=>setListIcons([...listIcons, updatedIcons])} key={flashcard.index}/>
                })}
            </div>
            <Footer completas={complete} acertos={hit} icones={listIcons}/>
        </div>
    )
}