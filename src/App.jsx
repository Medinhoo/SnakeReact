import { Header } from "./Components/Header/Header"
import { Canvas } from "./Components/Canvas/Canvas"
import { Button } from "./Components/Button/Button"
import './index.css'
import { useSnake } from "./Hooks/useSnake"

const App = () => {

  const { matrix, restartGame } = useSnake();

  return (
    <>
      <Header />
      <Canvas matrix={matrix} />
      <Button onClick={restartGame} content={'Restart'}/>
    </>
  );
}

export default App;
