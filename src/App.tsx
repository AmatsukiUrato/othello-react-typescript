import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Disc from './Disc';

import Player from './logic/Player';
import { Container, Box, Input, Button, Fade } from '@material-ui/core';
import { Othello, DiscStatus } from './logic/Othello';
import Start from './Start';
import Board from './Board';

type AppState = {
    showStart: boolean;
    othello?: Othello;
    board?: DiscStatus[][];

}

class App extends Component<Readonly<{}>, AppState> {

    constructor(props: Readonly<{}>) {
        super(props);
        this.state = {
            showStart: true,
        }
    }

    private start = (boardSize: number) => {
        const currentPlayer = new Player("player1", DiscStatus.White);
        const anotherPlayer = new Player("player2", DiscStatus.Black);
        const othello = new Othello(Number(boardSize), currentPlayer, anotherPlayer);
        const board: DiscStatus[][] = othello.getBoard();
        this.setState({
            showStart: false,
            othello: othello,
            board: board,
        });
    }

    public render() {
        return (
            <React.Fragment>
                <Fade in={this.state.showStart}>
                    <div>
                        {this.state.showStart ? <Start childStart={this.start}></Start> : null}
                    </div>
                </Fade>
                <Fade in={!this.state.showStart}>
                    <div>
                    {!this.state.showStart ? <Board parentStatus={this.state}></Board> : null}
                    </div>
                </Fade>
            </React.Fragment>
        );
    }
}

export default App;
