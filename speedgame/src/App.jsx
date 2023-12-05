import NewGame from './components/newGame'
import { useState } from 'react'
import { levels } from './levels'
import Circle from './UI_components/Circle'
import Game from './components/Game'
import GameOver from './components/GameOver'

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

  let timer;
  let pace = 1000;

  const gameSetHandler = (level, name) => {

    /*   This one is returning the index which we are finding the amount */
    /* const levelIndex = levels.findIndex(el => el.name === level); */

    /*  const levelAmount = levels[levelIndex].amount; */


    /* as it is object we can also do it this way - because of distructing */

    const { amount } = levels.find((el) => el.name === level)

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
    /* clearTimeout(timer) */
  }

  const closeHandler = () => {
    setGameOver(!gameOver)
    setgameLaunch(!gameLaunch)
    setScore(0)
  }

  // need to bind the click handler. i.e. you need to pass it

  const clickHandler = (id) => {
    console.log('circle was clicked:', id);
    console.log("score", score)
    setScore(score + 100)
  };

  const randomNumb = () => {
    let nextActive;

    do {
      nextActive = getRndInteger(0, 5)

    } while (nextActive === current);
    setCurrent(nextActive);

    timer = setTimeout(randomNumb, pace)
    console.log(nextActive);
  };





  return (
    <>
      <div className='circles_container'>

        <h1>Save the Jungle</h1>
        {gameLaunch && <NewGame onclick={gameSetHandler} />}
        {gameOn && <Game score={score} circles={circles} stopHandler={stopHandler} clickHandler={clickHandler} />}
        {gameOver && <GameOver />}
      </div>

    </>
  )
}

export default App
