import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Disc from './Disc';

import Player from './logic/Player';
import { Container, Box, Input, Button } from '@material-ui/core';
import { Othello, DiscStatus } from './logic/Othello';

type AppState = {
    boardSize: number;
}

class App extends Component<Readonly<{}>, AppState> {

    constructor(props: Readonly<{}>) {
        super(props);
        this.state = {
            boardSize: 4,
        }
    }

    private handleOnClickStart = () => {
        const currentPlayer = new Player("player1", DiscStatus.White);
        const anotherPlayer = new Player("player2", DiscStatus.Black);
        const othello = new Othello(this.state.boardSize, currentPlayer, anotherPlayer);
    };

    private handleOnChangeBoardSize = (event: any) => {
        this.setState({ boardSize: Number(event.target.boardSize) });
    }

    public render() {
        return (
            <Container>
                <Grid container alignItems="center" justify="center">
                    <Box mt={5}>
                        <Disc discStatus={DiscStatus.Black}></Disc>
                    </Box>
                </Grid>
                <Grid container alignItems="center" justify="center">
                    <Box mt={5}>
                        <label>
                            ボードの大きさ：
                            <Input type="text"
                                value={this.state.boardSize}
                                onChange={this.handleOnChangeBoardSize}></Input>
                        </label>
                    </Box>
                </Grid>
                <Grid container alignItems="center" justify="center">
                    <Box mt={5}>
                        <Box m={1}>
                            <Button onClick={this.handleOnClickStart} variant="contained" color="primary">スタート</Button>
                        </Box>
                        <Box m={1}>
                            <Button variant="contained" color="primary">リセット</Button>
                        </Box>
                    </Box>
                </Grid>
            </Container>
        );
    }
}

export default App;
