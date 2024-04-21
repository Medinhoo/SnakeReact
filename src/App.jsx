import { Header } from "./Header/Header"
import { Canvas } from "./Canvas/Canvas"
import './index.css'
import { useEffect, useState } from "react"

const App = () => {

  const [matrix, setMatrix] = useState(Array(40).fill(Array(40).fill(0)));
  const [snake, setSnake] = useState([{ row: 10, col: 10 }]);
  const [direction, setDirection] = useState('DOWN');

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowUp' && direction !== 'DOWN') setDirection('UP');
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
      setMatrix(m => {
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
        const tail = newSnake.pop();
        setSnake(newSnake);

        return m.map((rowArray, rowIndex) => {
          return rowArray.map((cell, colIndex) => {
            
            if (rowIndex === head.row && colIndex === head.col) {
              if(m[head.row][head.col] === 2){
                snake.push({row: rowIndex, col: colIndex})
              }
              return 1;
            }
            else if (tail.row === rowIndex && tail.col === colIndex) {
              return 0;
            }
            return cell;
          });
        });


      });
    }, 100);

    return () => clearInterval(moveSnake);
  }, [direction, snake]);

  useEffect(()=>{
    createFruit(matrix)
  }, [snake.length])


  function createFruit(matrix){
    const randomfruitX = Math.floor(Math.random() * matrix.length)
    const randomfruitY = Math.floor(Math.random() * matrix.length)

    if(matrix[randomfruitY][randomfruitX] != 1){
      setMatrix(m => {
        return m.map((rowArray, rowIndex) => {
          return rowArray.map((cell, colIndex) => {
            if (rowIndex === randomfruitY && colIndex === randomfruitX) return 2;
            return cell;
          });
        });
      })
    }
    else {
      createFruit(matrix)
    }
  }

  return (
    <>
      <Header />
      <Canvas matrix={matrix} />
    </>
  );
}

export default App;
