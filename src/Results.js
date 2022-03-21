import React from 'react';

export default function Results({listaIcones}){
    return(
        <div className='icones'>
            {listaIcones.map((icon) => (
                <div className={icon.class}>
                    <ion-icon key={icon.id} name={icon.name}></ion-icon>
                </div>
        ))}
        </div>
    )
}