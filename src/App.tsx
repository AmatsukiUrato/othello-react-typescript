import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Disc from './Disc';

import Player from './logic/Player';
import { Container, makeStyles, Box, Input, Button } from '@material-ui/core';
import { Othello, DiscStatus } from './logic/Othello';



type AppState = {
    count: number;
}

class Sub extends Component<Readonly<{}>, AppState> {

    constructor(props: Readonly<{}>) {
        super(props);
        this.state = {
            count: 0,
        }
    }

    private start = () => {
        const currentPlayer = new Player("player1", DiscStatus.White);
        const anotherPlayer = new Player("player1", DiscStatus.White);
        const othello = new Othello(6, currentPlayer, anotherPlayer);
    };

    render() {
        return (
            <Container>
                <Grid container alignItems="center" justify="center">
                    <Box mt={5}>
                        <Disc discStatus={DiscStatus.Black}></Disc>
                        <Disc discStatus={DiscStatus.White}></Disc>
                    </Box>
                </Grid>
                <Grid container alignItems="center" justify="center">
                    <Box mt={5}>
                        <label>
                            ボードの大きさ： <Input type="text" ></Input>
                        </label>
                    </Box>
                </Grid>
                <Grid container alignItems="center" justify="center">
                    <Box mt={5}>
                        <Button onClick={this.start} variant="contained" color="primary" >スタート</Button>
                        <Button variant="contained" color="primary">リセット</Button>
                    </Box>
                </Grid>
            </Container>
        );
    }
}


const App: React.FC = () => {
    return (<Sub></Sub>)
}

export default App;
