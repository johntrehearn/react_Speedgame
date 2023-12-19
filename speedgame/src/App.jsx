import NewGame from './components/newGame'
import { useState } from 'react'
import { levels } from './levels'
import Game from './components/Game'
import GameOver from './components/GameOver'
import { useRef } from 'react'

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function App() {
  const [player, setPlayer] = useState()
  const [circles, setCircles] = useState([])
  const [score, setScore] = useState(10)
  const [gameLaunch, setgameLaunch] = useState(true)
  const [gameOn, setGameOn] = useState(false)
  const [gameOver, setGameOver] = useState(false)
  const [current, setCurrent] = useState(-1);

  const timeoutIdRef = useRef(null)
  const rounds = useRef(0)
  const currentInst = useRef(0);

  let pace = 1000;
  let levelsAmount;

  const gameSetHandler = (level, name) => {
    const { amount } = levels.find((el) => el.name === level);
    levelsAmount = amount;

    const circlesArray = Array.from({ length: amount }, (_, i) => i);

    setCircles(circlesArray)
    setPlayer(
      {
        level: level,
        name: name,
      }
    );

    setgameLaunch((prevLaunch) => !prevLaunch)
    setGameOn(!gameOn)
    randomNumb();
  };

  const stopHandler = () => {
    setGameOn((prevState) => !prevState)
    setGameOver((prevState) => !prevState)
    clearTimeout(timeoutIdRef.current);
    timeoutIdRef.current = null;

  }

  const closeHandler = () => {
    console.log('closehandler');
    setGameOver((prevState) => !prevState)
    setgameLaunch((prevState) => !prevState)
    setScore(0)
    rounds.current = 0
  }
  
  const clickHandler = (id) => {
   if (current !== id) {
    stopHandler();
    return;
   }
    setScore(score + 100)
    rounds.current--;
  };

  const randomNumb = () => {
    if (rounds.current >= 3) {
      stopHandler();
      return;
    }
    let nextActive;

    do {
      nextActive = getRndInteger(0, levelsAmount)

    } while (nextActive === currentInst.current);
    setCurrent(nextActive);
    currentInst.current = nextActive;
    rounds.current++;

    timeoutIdRef.current = setTimeout(randomNumb, pace)
    pace *= 0.95;
  };

  return (
    <>
      <div className='circles_container'>

        <h1>Save the Jungle</h1>
        {gameLaunch && <NewGame onclick={gameSetHandler} />}
        {gameOn && (<Game score={score}
         circles={circles} 
         stopHandler={stopHandler} 
         clickHandler={clickHandler}
         current={current}
         />)}
        {gameOver && (<GameOver closeHandler={closeHandler} {...player} score={score}/>)}
      </div>

    </>
  )
}

export default App
