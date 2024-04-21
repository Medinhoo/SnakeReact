import { Canvas } from "./Components/Canvas/Canvas"
import { Button } from "./Components/Button/Button"

export const Game = ({matrix, onClick, }) => {
    return (
        <>
            <Canvas matrix={matrix} />
            <Button onClick={onClick} content={'Restart'} />
        </>
    )
}