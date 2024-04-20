import './Canvas.css'

export function Canvas({ rows, columns, startY, startX }) {
    const matrix = [];

    for (let row = 0; row < rows; row++) {
        matrix[row] = [];
        for (let column = 0; column < columns; column++) {
            if (row === startY && column === startX) {
                matrix[startY][startX] = 1;
                matrix[startY - 1][startX] = 1;
                matrix[startY - 2][startX] = 1;
            } else {
                matrix[row][column] = 0;
            }
        }
    }

    const grid = [];

    for (let colIndex = 0; colIndex < columns; colIndex++) {
        const columnDiv = [];
        for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
            columnDiv.push(
                <div
                    id={`cell-${rowIndex}-${colIndex}`}
                    key={`cell-${rowIndex}-${colIndex}`}
                    className={matrix[rowIndex][colIndex] === 1 ? 'square filled' : 'square empty'}>
                </div>
            );
        }
        grid.push(
            <div id={`col-${colIndex}`} key={`col-${colIndex}`}>
                {columnDiv}
            </div>
        );
    }

    return (
        <div id='containerCanvas'>
            <div id='canvas' 
            style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${columns}, 10px)`,
                border:"solid 1px"
            }}>
                {grid}
            </div>
        </div>
    );

}
