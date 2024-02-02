function stateClearBoard(cols, rows){
    let arr = new Array(cols)
    for (let i = 0; i < cols; i++) {
        arr[i] = new Array(rows);
        for (let j = 0; j < rows; j++) {
            arr[i][j] = 0;
            
        }
    }
    return arr;
}

function stateCheckerBoard(cols, rows){
    let arr = new Array(cols)
    let previous = 1;
    for (let i = 0; i < cols; i++) {
        arr[i] = new Array(rows);
        let rowStart = previous;
        for (let j = 0; j < rows; j++) {
            if (previous === 0){
                arr[i][j] = 1;
                previous = 1;
            }
            else{
                arr[i][j] = 0;
                previous = 0;
            }
            
        }
        // Flip Next 
        rowStart = rowStart == 0? 1 : 0;
        previous = rowStart;
    }
    return arr;
}