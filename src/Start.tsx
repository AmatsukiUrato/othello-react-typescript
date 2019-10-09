import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Disc from './Disc';

import Player from './logic/Player';
import { Container, Box, Input, Button } from '@material-ui/core';
import { Othello, DiscStatus } from './logic/Othello';

type StartState = {
    boardSize: number;
}

type StartProps = {
    childStart: Function
}

class Start extends Component<StartProps, StartState> {

    constructor(props: StartProps) {
        super(props);
        this.state = {
            boardSize: 0,
        }
        let message = 'Header mounted successfully';
        this.handleOnClickStart = this.handleOnClickStart.bind(this);
        this.handleOnChangeBoardSize = this.handleOnChangeBoardSize.bind(this);

    }

    private handleOnClickStart = () => {
        const currentPlayer = new Player("player1", DiscStatus.White);
        const anotherPlayer = new Player("player2", DiscStatus.Black);
        const othello = new Othello(Number(this.state.boardSize), currentPlayer, anotherPlayer);
        const board: DiscStatus[][] = othello.getBoard();
        this.props.childStart(othello, board);
    };

    private handleOnChangeBoardSize = (event: any) => {
        this.setState({ boardSize: event.target.value });
    }

    public render() {
        return (
            <Container>
                <Grid container alignItems="center" justify="center">
                    <Box mt={5}>
                        <h1>オセロ</h1>
                    </Box>
                </Grid>
                <Grid container alignItems="center" justify="center">
                    <Box mt={5}>
                        <Disc discStatus={DiscStatus.Empty}></Disc>
                        <Disc discStatus={DiscStatus.Empty}></Disc>
                        <Disc discStatus={DiscStatus.Empty}></Disc>
                        <Disc discStatus={DiscStatus.Empty}></Disc>
                    </Box>
                    <Box mt={5}>
                        <Disc discStatus={DiscStatus.Empty}></Disc>
                        <Disc discStatus={DiscStatus.Black}></Disc>
                        <Disc discStatus={DiscStatus.White}></Disc>
                        <Disc discStatus={DiscStatus.Empty}></Disc>
                    </Box>
                    <Box mt={5}>
                        <Disc discStatus={DiscStatus.Empty}></Disc>
                        <Disc discStatus={DiscStatus.White}></Disc>
                        <Disc discStatus={DiscStatus.Black}></Disc>
                        <Disc discStatus={DiscStatus.Empty}></Disc>
                    </Box>
                    <Box mt={5}>
                        <Disc discStatus={DiscStatus.Empty}></Disc>
                        <Disc discStatus={DiscStatus.Empty}></Disc>
                        <Disc discStatus={DiscStatus.Empty}></Disc>
                        <Disc discStatus={DiscStatus.Empty}></Disc>
                    </Box>
                </Grid>
                <Grid container alignItems="center" justify="center">
                    <Box mt={5}>
                        <label>
                            ボードの大きさ：
                            <Input 
                            type="number"
                            onChange={this.handleOnChangeBoardSize}></Input>
                        </label>
                    </Box>
                </Grid>
                <Grid container alignItems="center" justify="center">
                    <Box mt={5}>
                        <Button onClick={this.handleOnClickStart} variant="contained" color="primary">スタート</Button>
                    </Box>
                </Grid>
            </Container>
        );
    }
}

export default Start;
