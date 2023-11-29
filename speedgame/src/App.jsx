import NewGame from './components/newGame'
import { useState } from 'react'
import {levels} from './levels'
import Circle from './UI_components/Circle'
import Game from './components/Game'
import GameOver from './components/GameOver'

function App() {

const [player, setPlayer] = useState()
const [circles, setCircles] = useState([])
const [score, setScore] = useState(10)
const [gameLaunch, setgameLaunch] = useState(true)
const [gameOn, setGameOn] = useState(false)
const [gameOver, setGameOver] = useState(false)

const gameSetHandler = (level, name) => {
  // based on level, we find the matching object from levels array, and then make a array for the circles, with amount in the object.

  // using method find index. It is a method that uses a callback. Checking if the element satisfies the testing function AND RETURNS THE INDEX

  //MATCHING THE NAME AND THE LEVEL

  const levelIndex = levels.findIndex(el => el.name === level);
  const levelAmount = levels[levelIndex].amount;

  const circlesArray = Array.from({ length: levelAmount}, (x, i) => i);

  setCircles(circlesArray)

  setPlayer(
    {
      level: level,
      name: name,

  }
  )

  setgameLaunch(!gameLaunch)
  setGameOn(!gameOn)

}

const stopHandler = () => {
  setGameOn(!gameOn)
  setGameOver(!gameOver)
}

console.log(player);

  return (
    <>
    <div className='circles_container'>

    <h1>Save the Jungle</h1>
    {gameLaunch && <NewGame onclick={gameSetHandler}/>}
    {gameOn && <Game score={score} circles={circles} stopHandler={stopHandler}/>}
    {gameOver && <GameOver/>}
    </div>
      
    </>
  )
}

export default App
