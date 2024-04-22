import { Canvas } from "./Components/Canvas/Canvas";
import { Button } from "./Components/Button/Button";
import { useSnake } from "./Hooks/useSnake";

export const Game = ({ onClick, userName }) => {
    const { score, matrix } = useSnake();

    return (
        <div className="mt-5">
            <div className="d-flex flex-column justify-content-center align-items-center">
                <p className="m-0 p-2 border" style={{ fontWeight: 'bold', fontSize: '18px' }}>
                    {userName.length > 0 ? `${userName}'s score : ${score}` : `Score : ${score}`}
                </p>
            </div>
            <Canvas matrix={matrix} />
            <Button onClick={onClick} content={'Restart'} />
        </div>
    );
};
