let canvas_w = 400;
let canvas_h = 400;
let w = 10;
let cols, rows;
function setup(){
    cols = canvas_w / w;
    rows = canvas_h / w;
    
    document.documentElement.style.setProperty('--cellsize', `${w}px`);
    createGrid(cols, rows);
}

function create2dArray(cols, rows){
    let arr = new Array(cols);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array(rows);
    }
    return arr
}

function createGrid(cols, rows){
    if(cols === 0 || rows === 0) return 1;

    let table = document.getElementById("grid-container");

    for (let i = 0; i < cols; i++) {
        let trNode = document.createElement("tr");
        
        for (let j = 0; j < rows; j++) {
            let tdNode = document.createElement("td");

            // Add click event to each cell
            (function (x,y){
                tdNode.addEventListener('click', function () {
                    console.log(`Clicked ${x}, ${y}`);
                })
            })(i,j);

            // Append cell to row
            trNode.appendChild(tdNode);
        }
        // Append to row to column
        table.appendChild(trNode);
    }
}