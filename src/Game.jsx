import { Canvas } from "./Components/Canvas/Canvas"
import { Button } from "./Components/Button/Button"

export const Game = ({matrix, onClick, }) => {
    return (
        <div className="mt-5">
            <Canvas matrix={matrix} />
            <Button onClick={onClick} content={'Restart'} />
        </div>
    )
}