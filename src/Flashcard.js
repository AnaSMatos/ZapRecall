import React from 'react'

export default function Flashcard(props){
    const [flip, setFlip] = React.useState (false);
    const [open, setOpen] = React.useState (false); 
    const [answered, setAnswered] = React.useState(false);
    const [answer, setAnswer] = React.useState("");
    
    const{flashcard, complete, hit, setListIcons} = props;

    const css = `closed-card ${answered ? answer : ""}`
    const cssButton = `${answered ? 'hidden' : ''}`

    function answeredQuestion(ans){
        setAnswered(true);
        setOpen(!open)

        if(ans === 'nl'){
            setAnswer('red');
            setListIcons({name: "close-circle", class: "wrong", id: flashcard.index})
        }else if(ans === 'qnl'){
            setAnswer('yellow')
            setListIcons({name: "help-circle", class: "almost", id: flashcard.index})
        }else if(ans === 'zap'){
            setAnswer('green')
            setListIcons({name: "checkmark-circle", class: "right", id: flashcard.index})
        }
    }




    return( 
        open ? 
            flip ?
                <div className='open-card front'>
                    <h1>{flashcard.answer}</h1>
                    <div className='buttons'>
                        <button className='nao-lembrei' onClick={()=>{
                            answeredQuestion('nl')
                            complete();
                            }}>
                            <p>Não lembrei</p>
                        </button>
                        <button className='quase-nao-lembrei' onClick={()=>{
                            answeredQuestion('qnl');
                            complete();
                            hit();
                            }}>
                            <p>Quase não lembrei</p>
                        </button>
                        <button className='zap' onClick={()=>{
                            answeredQuestion('zap')
                            complete();
                            hit();
                            }}>
                            <p>Zap!</p>
                        </button>
                    </div>
                </div>  : /* end flip*/
                <div className='open-card back'>
                    <h1>{flashcard.question}</h1>
                    <button onClick={()=>setFlip(!flip)}><img src='../assets/setinha.png' alt=''></img></button>
                </div>
            : /*end open*/
            
            <div className={css}>
                <h1>Pergunta {flashcard.index}</h1>
                <button onClick={()=>setOpen(!open)} className={cssButton} ><ion-icon name="play-outline"></ion-icon></button>
            </div> 
    
    )
}


