import './Canvas.css'

export function Canvas({ rows, columns, startY, startX }) {

    const matrix = createMatrix(rows, columns, startY, startX)
    const grid = createGrid(matrix)

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

function createMatrix(rows, columns, startY, startX ){
    const m = [];

    for (let row = 0; row < rows; row++) {
        m[row] = [];
        for (let column = 0; column < columns; column++) {
            if (row === startY && column === startX) {
                m[startY][startX] = 1;
                m[startY - 1][startX] = 1;
                m[startY - 2][startX] = 1;
            } else {
                m[row][column] = 0;
            }
        }
    }

    return m
}


function createGrid(matrix){

    const g = [];

    for (let column = 0; column < matrix[0].length; column++) {
        const columnDiv = [];
        for (let row = 0; row < matrix.length; row++) {
            columnDiv.push(
                <div
                    id={`cell-${row}-${column}`}
                    key={`cell-${row}-${column}`}
                    className={matrix[row][column] === 1 ? 'square filled' : 'square empty'}>
                </div>
            );
        }
        g.push(
            <div id={`col-${column}`} key={`col-${column}`}>
                {columnDiv}
            </div>
        );
    }

    return g;
}
