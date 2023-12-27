import { useState } from 'react';

function NewGame({onclick}) {

    const [name, setName] = useState('');

    const inputHandler =(e) => {
        setName(e.target.value)
    }
    return (
        <div>
            <h1>Save the Jungle</h1>
            <h2>Start a game by choosing difficulty and entering your 
                name</h2>
            <input type="text" onChange={inputHandler} placeholder='Your name'/>
            <div className='buttonsDiv'>
             {/*  binding it to the data to the function to send it to the event /click handler */}
                <button onClick={()=> onclick('easy', name)}>Easy</button>
                <button onClick={()=> onclick('medium', name)}>Medium</button>
                <button onClick={()=> onclick('hard', name)}>Hard</button>
                
            </div>
        </div>
    )
}

export default NewGame;