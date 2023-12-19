function GameOver({closeHandler, level, score, name}) {
    return (
        <div>
            <div className='game_over_modal'>
                <div>

        <button className='close_but' onClick={closeHandler}>X</button>
            </div>
                <div className='modal_text'>
                    <h2>Thanks for Playing {name}. You played at level {level}</h2>
                    <p className='game_score'>Your score today was: {score}</p>
                    <p className='game_over_text'>Why not play again and aim for greatness</p>
                </div>
            </div>
            
            <div>

       
            </div>
        </div>
    );
}

export default GameOver;