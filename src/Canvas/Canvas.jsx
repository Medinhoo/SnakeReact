import './Canvas.css'

export function Canvas({ snake, matrix, setMatrix }) {

    const grid = createGrid(matrix)

    return (
        <div id='containerCanvas'>
            <div id='canvas'
                style={{
                    display: 'grid',
                    gridTemplateColumns: `repeat(${matrix[0].length}, 10px)`,
                    border: "solid 1px"
                }}>
                {grid}
            </div>
        </div>
    );
}

function createGrid(matrix) {

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
