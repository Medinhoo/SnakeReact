import { Header } from "./Components/Header/Header"
import { Canvas } from "./Components/Canvas/Canvas"
import { Button } from "./Components/Button/Button"
import { LoadingPage } from "./Components/LoadingPage/LoadingPage"
import './index.css'
import { useSnake } from "./Hooks/useSnake"
import { useEffect, useState } from "react"

const App = () => {

  const { matrix, game, lose, handleKeyDown, restartGame } = useSnake()
  const [pause, setPause] = useState(false)

  const loadingMessage = `<h2>Press the arrowkeys to start the game</h2> 
                          <br />
                          <h2>Press the spacebar to pause the game </h2>`

  const pauseMessage = '<h2>Pause</h2>'

  return (
    <>
      <Header />
      <LoadingPage content={loadingMessage} />
      {!game && pause && <LoadingPage content={pauseMessage} />}
      <Canvas matrix={matrix} />
      <Button onClick={restartGame} content={'Restart'} />
    </>
  );
}

export default App;
