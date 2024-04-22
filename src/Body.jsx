import { Game } from "./Game"
import { ForegroundPage } from "./Components/ForegroundPage/ForegroundPage"
import { useSnake } from "./Hooks/useSnake"

export const Body = () => {

    const { matrix, game, lose, pause, score, handleKeyDown, restartGame } = useSnake()
      
    const loadingMessage = `<h2>Press an arrowkey to start the game</h2> 
                            <br />
                            <h2>Press P to pause the game </h2>`
  
    const pauseMessage = '<h2>Pause</h2>'

    return (
        <>
            <ForegroundPage content={loadingMessage} using={'firstLoad'} />
            {!game && pause && <ForegroundPage content={pauseMessage} using={'pause'} />}
            <Game matrix={matrix} onClick={restartGame}/>
        </>
    )
}