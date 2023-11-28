function NewGame({onclick}) {
    return (
        <div>
            <h2>Start a game by choosing difficulty and entering your name</h2>
            <input type="text" />
            <div>
                <button onClick={()=> onclick('easy')}>Easy</button>
                <button onClick={()=> onclick('medium')}>Medium</button>
                <button onClick={()=> onclick('hard')}>Hard</button>
                
            </div>
        </div>
    )
}

export default NewGame;