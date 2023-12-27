import Circle from '../UI_components/Circle';


function Game({ score, circles, stopHandler, clickHandler, current}) {
    return (
        <div>
            <div className='game_board'>

            {<h1 className='gameTitle'>Save the jungle by destroying the buildings</h1>}

                <h2 className='score'>Trees saved: {score}</h2>
                <div className='circle_container'>
                    {circles.map((_, i) => (
                    <Circle key={i} 
                    clickHandler={clickHandler} 
                    current={current === i}
                    id={i}/>
                    ))}
                </div>
                <button onClick={stopHandler}>Stop game</button>
            </div>

        </div>
    );
}

export default Game;