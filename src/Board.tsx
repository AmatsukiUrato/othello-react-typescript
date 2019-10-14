import React, { useState } from "react";
import { Box, Grid } from "@material-ui/core";
import { DiscStatus, Othello } from "./logic/Othello";
import Player from "./logic/Player";
import Disc from "./Disc";

type BoardProps = {
    boardSize?: number;
}

type BoardStates = {
    currentPlayer: string;
}

const Board: React.FC<BoardProps> = (props: BoardProps) => {

    const createBoardElement = (othello: Othello) => {
        const board: DiscStatus[][] = othello.getBoard();
        const boardElement: any[] =
            board.map((boardRow, index) =>
                <Box key={index} display="flex" alignItems="center" justifyContent="center">
                    {
                        boardRow.map((discStatus, index) =>
                            <Disc discStatus={discStatus} key={index}></Disc>
                        )
                    }
                </Box>
            )
        return boardElement;
    }

    const othello = new Othello(
        Number(props.boardSize),
        new Player("player1", DiscStatus.White),
        new Player("player2", DiscStatus.Black)
    );

    const boardElement = createBoardElement(othello);
    const [currentPlayer, setCurrentPlayer] = useState(othello.getCurrentPlayer());

    return (
        <React.Fragment>
            <Box mt={20}></Box>
            <Grid container>
                <Grid item xs={4}>
                    現在のプレイヤー: {currentPlayer.name}
                    色：{currentPlayer.chosenColor}
                </Grid>
                <Grid item xs={8}>
                    <Box>
                        {boardElement}
                    </Box>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}


export default Board;