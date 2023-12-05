import NewGame from './components/newGame'
import { useState } from 'react'
import { levels } from './levels'
import Circle from './UI_components/Circle'
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

  console.log(rounds);

  
  let pace = 1000;
  let levelsAmount;

  const gameSetHandler = (level, name) => {

    /*   This one is returning the index which we are finding the amount */
    /* const levelIndex = levels.findIndex(el => el.name === level); */

    /*  const levelAmount = levels[levelIndex].amount; */


    /* as it is object we can also do it this way - because of distructing */

    const { amount } = levels.find((el) => el.name === level);
    levelsAmount = amount;

    // Magical method creating new array based on the length
    /*  old way commented out above */
    /*   const circlesArray = Array.from({ length: levelAmount}, (x, i) => i); */
    const circlesArray = Array.from({ length: amount }, (x, i) => i);

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
    setGameOn(!gameOn)
    setGameOver(!gameOver)
    clearTimeout(timeoutIdRef.current);
    timeoutIdRef.current = null;
  }

  const closeHandler = () => {
    setGameOver(!gameOver)
    setgameLaunch(!gameLaunch)
    setScore(0)
  }

  // need to bind the click handler. i.e. you need to pass it

  const clickHandler = (id) => {
    console.log("circle clicked")
   if (current !== id) {
    stopHandler();
    console.log("score is", score)
    return;
   }
    setScore(score + 100)
  };

  const randomNumb = () => {
    if (rounds.current >= 3) {
      stopHandler();
    }
    let nextActive;

    do {
      nextActive = getRndInteger(0, levelsAmount)

    } while (nextActive === current);
    setCurrent(nextActive);

    rounds.current++;
    

   timeoutIdRef.current = setTimeout(randomNumb, pace)
    console.log(nextActive);
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
