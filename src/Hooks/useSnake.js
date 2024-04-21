import { useEffect, useState } from "react"

export const useSnake = () => {

    const [matrix, setMatrix] = useState(Array(40).fill(Array(40).fill(0)));
    const [snake, setSnake] = useState([{ row: 10, col: 10 }]);
    const [direction, setDirection] = useState();
    const [game, setGame] = useState(false)
    const [lose, setLose] = useState(false)
    const [pause, setPause] = useState(false)

    const handleKeyDown = (event) => {
        if (event.key === 'ArrowUp' && direction !== 'DOWN') {
            setGame(true)
            setPause(p => false)
            setDirection('UP')
        }
        else if (event.key === 'ArrowDown' && direction !== 'UP') {
            setGame(true)
            setPause(p => false)
            setDirection('DOWN');
        }
        else if (event.key === 'ArrowLeft' && direction !== 'RIGHT') {
            setGame(true)
            setPause(p => false)
            setDirection('LEFT');
        }
        else if (event.key === 'ArrowRight' && direction !== 'LEFT') {
            setGame(true)
            setPause(p => false)
            setDirection('RIGHT');
        }
        else if (event.key === ' '){
            setGame(g => !g)
            setPause(p => !p)
        } 
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [direction]);

    useEffect(() => {
        let moveSnake;

        if (game) {
            moveSnake = setInterval(() => {
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

                            //Losing if the snake hits the wall
                            if (head.row < 0 || head.col < 0 || head.row >= m.length || head.col >= m.length) {
                                setLose(l => true)
                            }

                            //checking the head of the snake
                            if (rowIndex === head.row && colIndex === head.col) {

                                //checking if the snake is eating himself
                                for (let i = 1; i < snake.length; i++) {
                                    const body = snake[i]
                                    if (body.row === head.row && body.col === head.col) {
                                        setLose(l => true)
                                    }
                                }

                                //Make the snake bigger if he eats a fruit
                                if (m[head.row][head.col] === 2) {
                                    snake.push({ row: tail.row, col: tail.col })
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
        }

        return () => clearInterval(moveSnake);
    }, [game, direction, snake]);

    useEffect(() => {
        createFruit(matrix)
    }, [snake.length])

    useEffect(() => {
        if (lose) {
            setMatrix(Array(40).fill(Array(40).fill(0))); // Réinitialiser la matrice
            setSnake([{ row: 10, col: 10 }]); // Réinitialiser la position du serpent
            setDirection(null); // Réinitialiser la direction
            setGame(false); // Mettre fin au jeu
            setLose(false); // Réinitialiser le state lose    
            createFruit(matrix)
        }
    }, [lose]);


    function createFruit(matrix) {
        const randomfruitX = Math.floor(Math.random() * matrix.length)
        const randomfruitY = Math.floor(Math.random() * matrix.length)

        if (matrix[randomfruitY][randomfruitX] != 1) {
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

    function restartGame(){
        setLose(l => true)
      }

    return {
        matrix,
        game,
        lose,
        pause,
        handleKeyDown,
        restartGame
    }
}
