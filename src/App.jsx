import { Header } from "./Header/Header"
import { Canvas } from "./Canvas/Canvas"
import './index.css'
import { useEffect, useState } from "react"

const App = () => {

  const [matrix, setMatrix] = useState(Array(40).fill(Array(40).fill(0)));
  const [snake, setSnake] = useState([{ row: 1, col: 0 }]);
  const [direction, setDirection] = useState('RIGHT');

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowUp' && direction !== 'DOWN')
      setDirection('UP');
    else if (event.key === 'ArrowDown' && direction !== 'UP') setDirection('DOWN');
    else if (event.key === 'ArrowLeft' && direction !== 'RIGHT') setDirection('LEFT');
    else if (event.key === 'ArrowRight' && direction !== 'LEFT') setDirection('RIGHT');
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [direction]);

  useEffect(() => {
    const moveSnake = setInterval(() => {
      setMatrix(prevMatrix => {
        let newSnake = [...snake];
        let head = { ...newSnake[0] };
        switch (direction) {
          case 'UP':
            head.row -= 1;
            break;
          case 'DOWN':
            head.row += 1;
            break;
          case 'LEFT':
            head.col -= 1;
            break;
          case 'RIGHT':
            head.col += 1;
            break;
          default:
            break;
        }
        newSnake.unshift(head);
        newSnake.pop();
        setSnake(newSnake);

        return prevMatrix.map((rowArray, rowIndex) => {
          return rowArray.map((cell, colIndex) => {
            // Réinitialiser les anciennes positions du serpent à 0
            if (snake.some(part => part.row === rowIndex && part.col === colIndex)) {
              return 0;
            }
            // Mettre à jour la nouvelle position de la tête du serpent à 1
            if (rowIndex === head.row && colIndex === head.col) {
              return 1;
            }
            return cell;
          });
        });
      });
    }, 1000);

    return () => clearInterval(moveSnake);
  }, [direction, snake]);

  return (
    <>
      <Header />
      <Canvas matrix={matrix} snake={snake} setMatrix={setMatrix} />
    </>
  );
}

export default App;
