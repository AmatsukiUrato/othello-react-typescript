import Player from './Player';

export class Othello {
    private currentPlayer: Player;
    private anotherPlayer: Player;
    private board: DiscStatus[][];
    private boardSize: number;

    constructor(boardSize: number, currentPlayer: Player, anotherPlayer: Player) {
        this.board = this.createBoard(boardSize);
        this.currentPlayer = currentPlayer;
        this.anotherPlayer = anotherPlayer;
        this.boardSize = boardSize;
    }

    public getBoard(): DiscStatus[][] {
        return this.board;
    }

    public setDisc(
        rowNumber: number,
        columnNumber: number,
        ownDisc: DiscStatus): boolean {

        const boardSize = this.board.length;
        if ((0 <= rowNumber && rowNumber < boardSize)
            && (0 <= columnNumber && columnNumber < boardSize)) {
            return false;
        } else {
            this.swapDisc(rowNumber, columnNumber, ownDisc);
            return true;
        }
    }

    private swapDisc(row: number, column: number, ownDisc: DiscStatus) {
        this.board[row][column] = ownDisc;
        const opponentDisc =
            (ownDisc === DiscStatus.White) ? DiscStatus.Black : DiscStatus.White;

        const swapVerticalLaneDisc = (row: number, column: number, movingRowCost: number, movingColumnCost: number) => {
            if (this.board[row + movingRowCost][column + movingColumnCost] === opponentDisc) {
                this.board[row + movingRowCost][column + movingColumnCost] = ownDisc;
                swapVerticalLaneDisc(row, column, movingRowCost + movingRowCost, movingColumnCost + movingColumnCost);
            }
        }

        swapVerticalLaneDisc(row, column, -1, -1);
        swapVerticalLaneDisc(row, column, -1, +0);
        swapVerticalLaneDisc(row, column, -1, +1);
        swapVerticalLaneDisc(row, column, +0, -1);
        swapVerticalLaneDisc(row, column, +0, +1);
        swapVerticalLaneDisc(row, column, +1, -1);
        swapVerticalLaneDisc(row, column, +1, +0);
        swapVerticalLaneDisc(row, column, +1, +1);
    }

    public switchTurn(): void {
        const tmp = this.currentPlayer;
        this.currentPlayer = this.anotherPlayer;
        this.anotherPlayer = tmp;
    }

    private createBoard(boardSize: number): DiscStatus[][] {
        const centerPoint: number = (boardSize / 2) - 1;
        let board: DiscStatus[][] = Array(boardSize).fill(0).map((board) => Array(boardSize).fill(DiscStatus.Empty));

        board[centerPoint][centerPoint] = DiscStatus.Black;
        board[centerPoint + 1][centerPoint] = DiscStatus.White;
        board[centerPoint][centerPoint + 1] = DiscStatus.White;
        board[centerPoint + 1][centerPoint + 1] = DiscStatus.Black;

        return board;
    }
}

export enum DiscStatus {
    Empty,
    White,
    Black,
}