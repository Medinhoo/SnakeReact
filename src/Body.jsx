import { Canvas } from "./Components/Canvas/Canvas"
import { Button } from "./Components/Button/Button"
import { Input } from "./Components/Input/Input"
import { ForegroundPage } from "./Components/ForegroundPage/ForegroundPage"
import { useSnake } from "./Hooks/useSnake"
import { useState } from "react"

export const Body = () => {

    const { matrix, game, lose, pause, score, handleKeyDown, restartGame } = useSnake()
    const [userName, setUserName] = useState('')
  
    const loadingMessage = `<h2>Press the arrowkeys to start the game</h2> 
                            <br />
                            <h2>Press the spacebar to pause the game </h2>`
  
    const pauseMessage = '<h2>Pause</h2>'

    return (
        <>
            <ForegroundPage content={loadingMessage} using={'firstLoad'} />
            {!game && pause && <ForegroundPage content={pauseMessage} using={'pause'} />}
            <p>{`Your score : ${score}`}</p>
            <Input label='Username :' value={userName} onChange={setUserName} />
            <Canvas matrix={matrix} />
            <Button onClick={restartGame} content={'Restart'} />
        </>
    )
}