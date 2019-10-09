import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Disc from './Disc';

import Player from './logic/Player';
import { Container, Box, Input, Button } from '@material-ui/core';
import { Othello, DiscStatus } from './logic/Othello';
import Start from './Start'

type AppState = {
    disabledStart: boolean;
}

class App extends Component<Readonly<{}>, AppState> {

    constructor(props: Readonly<{}>) {
        super(props);
        this.state = {
            disabledStart: false,
        }
    }

    private start(othello: Othello, board: DiscStatus[][]) {
        console.log(board.length);
    }

    public render() {
        return (
            <React.Fragment>
                <Start disabled={this.state.disabledStart} childStart={this.start}></Start>
            </React.Fragment>
        );
    }
}

export default App;
