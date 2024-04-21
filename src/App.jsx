import { Header } from "./Components/Header/Header"
import { Canvas } from "./Components/Canvas/Canvas"
import { Button } from "./Components/Button/Button"
import { ForegroundPage } from "./Components/ForegroundPage/ForegroundPage"
import './index.css'
import { useSnake } from "./Hooks/useSnake"
import { useEffect, useState } from "react"

const App = () => {

  const { matrix, game, lose, pause, handleKeyDown, restartGame } = useSnake()

  const loadingMessage = `<h2>Press the arrowkeys to start the game</h2> 
                          <br />
                          <h2>Press the spacebar to pause the game </h2>`

  const pauseMessage = '<h2>Pause</h2>'

  return (
    <>
      <Header />
      <ForegroundPage content={loadingMessage} using={'firstLoad'}/>
      {!game && pause && <ForegroundPage content={pauseMessage} using={'pause'}/>}
      <Canvas matrix={matrix} />
      <Button onClick={restartGame} content={'Restart'} />
    </>
  );
}

export default App;
