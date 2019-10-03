class Player {
    private name: string;
    private chosenColor: DiscStatus;
    private myTurn: boolean;

    constructor(name: string, chosenColor: DiscStatus, myTurn: boolean) {
        this.name = name;
        this.chosenColor = chosenColor;
        this.myTurn = myTurn;
    }
}

class Othello {
    private player1: Player;
    private player2: Player;
    private board: DiscStatus[];

    constructor(boardSize: number, player1: Player, player2:Player) {
        this.board = this.initBoard(boardSize);
        this.player1 = player1;
        this.player2 = player2;
    }

    private initBoard(boardSize: number) {
        const centerPoint : number = boardSize^2/-boardSize/2;
        let board: DiscStatus[] = new Array(boardSize).fill(DiscStatus.Empty);
        board[centerPoint] = DiscStatus.Black;
        board[centerPoint+1] = DiscStatus.White;
        board[centerPoint+boardSize] = DiscStatus.Black;
        board[centerPoint+boardSize+1] = DiscStatus.White;

        return board;
    }

    public start(player1: Player, player2: Player) {
        
    }
}

enum DiscStatus {
    Empty,
    White,
    Black,
}