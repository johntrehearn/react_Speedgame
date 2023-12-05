import Circle from '../UI_components/Circle';

function Game({ score, circles, stopHandler, clickHandler, current}) {
    return (
        <div>
            <div className='game_board'>

                <p>{score}</p>
                <div className='circle_container'>
                    {circles.map((_, i) => (
                    <Circle key={i} 
                    clickHandler={clickHandler} 
                    current={current === i}/>
                    ))}
                </div>
                <button onClick={stopHandler}>Stop game</button>
            </div>

        </div>
    );
}

export default Game;