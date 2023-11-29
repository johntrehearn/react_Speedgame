import Circle from '../UI_components/Circle';

function Game({ score, circles, stopHandler}) {
    return (
        <div>
            <div className='game_board'>

                <p>{score}</p>
                <div className='circle_container'>
                    {circles.map((_, i) => <Circle key={i}/>)}
                </div>
                <button onClick={stopHandler}>Stop game</button>
            </div>

        </div>
    );
}

export default Game;