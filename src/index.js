import ReactDOM from 'react-dom';
import React from 'react';
import Home from './Home';

function App(){
    return(
        <div>
            <Home/>
        </div>
    )

}


ReactDOM.render(<App/>, document.querySelector(".root"));

