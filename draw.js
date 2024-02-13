let canvas_w = 400;
let canvas_h = 400;
let w = 10;
let table;
let cols, rows;
let cells_data;
let cells_list = [];
let tick_speed;

function setup(){
    // Get table object
    table = document.getElementById("grid-container");

    // Calulae num of columns and rows
    cols = canvas_w / w;
    rows = canvas_h / w;
    
    // Set cell resolution
    document.documentElement.style.setProperty('--cellsize', `${w}px`);
    
    // Create cell visuals
    cells_data = populate2dCellArray(create2dArray(cols, rows));
    createGrid(cols, rows);

    // Create cell 2d array and populate with Cell objects 

    // console.log(cells_data);

    // Setup button events
    setupButtons()
    
}

function setupButtons(){
    document.getElementById("go").addEventListener("click", goEvent)

    document.getElementById("stop").addEventListener("click", stopEvent)

    document.getElementById("reset").addEventListener("click", resetEvent)
}
function goEvent(){
    if (!tick_speed){
        tick_speed = setInterval(stepEvent, 100)
    }
}

function stopEvent(){
    clearInterval(tick_speed);
    tick_speed = null;
}

function resetEvent(){
    stopEvent();
    let newBoard = stateClearBoard(cols, rows);
    updateBoard(newBoard);
}

let test = false
function stepEvent(){
    // Generate Next State
    // let newBoard = simSand;
    let newBoard = stateCheckerBoard(cols, rows);


    updateBoard(newBoard)


}

// Creates a 2d array
function create2dArray(cols, rows){
    let arr = new Array(cols);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array(rows);
    }
    return arr
}

// Populates each cell of 2d array with Cell objects
function populate2dCellArray(arr){
    for (let i = 0; i < arr.length; i++) {
        for( let j = 0; j < arr[i].length; j++){
            // Fill each cell of 2d array with Cell obj
            let c = new Cell(i, j);
            arr[i][j] = c;
            cells_list.push(c);
        }   
    }
    return arr;
}

// Creates the html grid elements
function createGrid(cols, rows){
    if(cols === 0 || rows === 0) return 1;

    for (let i = 0; i < cols; i++) {
        let trNode = document.createElement("tr");
        
        for (let j = 0; j < rows; j++) {
            let tdNode = document.createElement("td");

            // Add dom element to cell obj
            cells_data[i][j].setDomElement(tdNode);

            // Add click event to each cell
            (function (x,y){
                tdNode.addEventListener('click', function () {
                    cells_data[x][y].doElementClick();
                })
            })(i,j);

            // Append cell to row
            trNode.appendChild(tdNode);
        }
        // Append to row to column
        table.appendChild(trNode);
    }
}

// Updates each Cell objects stored in the table(cell_data)
function updateBoardCells(arrData2d){
    if(arrData2d == null || arrData2d.length == 0) return -1;
    for (let i = 0; i < arrData2d.length; i++) {
        for (let j = 0; j < arrData2d[0].length; j++) {
            let cell = cells_data[i][j]
            cell.updateState(arrData2d[i][j]);
        }   
    }
}

// // Updates the visuals for board after updated cell_data
function updateBoardVisuals(){
    let cell;
    let tdNode;
    for (let i = cells_list.length - 1; i > -1; i--) {
        cell = cells_list[i];
        tdNode = cell.getDomElement();
        if (cell.getState === 0){
            tdNode.style.backgroundColor = "#fff";
        }
        else{
            tdNode.style.backgroundColor = "#dc143c";
        }
        // console.log(i);
        
    }
}

function updateBoard(newState){
        // // Update cell data
    updateBoardCells(newState);

    // // Update table visuals
    updateBoardVisuals();
}

