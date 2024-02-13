class CellSimulator{
    boardArray2d;
    cellList
    board_width;
    board_height;
    constructor(currentBoard){
        this.boardArray2d = currentBoard;

        if(currentBoard != null){
            this.board_width = currentBoard.length
            this.board_height = currentBoard[0].length
        }
        else {
            Console.log("No Board given or board is null (Cell Simulator)");
        }
    }

    getCell(x, y){
        return this.boardArray2d[x][y];
    }

    simulateNextBoardState(board){
        return board
    }

    replaceCurrentBoard(board){
        this.boardArray2d = board;
    }

}

class SandSimulator extends CellSimulator{
    super(board){}

    simulateNextBoardState(board) {

        return super.simulateNextBoardState(board);
    }

}

function makeBoardIterator(board){
    let b_h, H = board.length - 1;
    let b_w, W = board[0].length - 1;
    let iterationCount = 0;

    const boardIterator = {
        next() {
            let result;
            if (b_w > -1 && b_h > -1) {
                result = { value: [b_h, b_w], done: false };
                b_w--;
                iterationCount++;
                return result;
            }
            // if()
            return { value: iterationCount, done: true };
        },
    };
    return rangeIterator;
}

// Example
// const iter = makeRangeIterator(1, 10, 2);
//
// let result = iter.next();
// while (!result.done) {
//     console.log(result.value); // 1 3 5 7 9
//     result = iter.next();
// }
