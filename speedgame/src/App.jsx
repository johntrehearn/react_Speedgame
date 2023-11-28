import NewGame from './components/newGame'

function App() {

const gameSetHandler = (level) => {
  console.log(level)

}

  return (
    <>
    <h1>Save the Jungle</h1>
    <NewGame onclick={gameSetHandler}/>
      
    </>
  )
}

export default App
