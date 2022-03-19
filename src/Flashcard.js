import React from 'react'

export default function Flashcard({flashcard}){
    const [flip, setFlip] = React.useState (false);
    const [open, setOpen] = React.useState (false); 
        
        
    return( 
        open ? 
            flip ?
                <div className='open-card front'>
                    <h1>{flashcard.answer}</h1>
                    <div className='buttons'>
                        <button className='nao-lembrei'><p>Não lembrei</p></button>
                        <button className='quase-nao-lembrei'><p>Quase não lembrei</p></button>
                        <button className='zap'><p>Zap!</p></button>
                    </div>
                </div>  : /*flip*/
                <div className='open-card back'>
                    <h1>{flashcard.question}</h1>
                    <button onClick={()=>setFlip(!flip)}><img src='../assets/setinha.png' alt=''></img></button>
                </div>
            : /*open*/

        <div className='closed-card'>
            <h1>Pergunta {flashcard.index}</h1>
            <button onClick={()=>setOpen(!open)}><ion-icon name="play-outline"></ion-icon></button>
        </div> 
        
    )
}


