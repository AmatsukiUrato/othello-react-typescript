import React, { Component } from 'react';
import { Fade } from '@material-ui/core';
import Start from './Start';
import Board from './Board';

type AppState = {
    showStart: boolean;
    boardSize?: number;
}

class App extends Component<Readonly<{}>, AppState> {

    constructor(props: Readonly<{}>) {
        super(props);
        this.state = {
            showStart: true,
        }
        this.start = this.start.bind(this);
    }

    private start = (boardSize: number) => {
        this.setState({
            showStart: false,
            boardSize: boardSize,
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
                    {!this.state.showStart ? <Board boardSize={this.state.boardSize}></Board> : null}
                    </div>
                </Fade>
            </React.Fragment>
        );
    }
}

export default App;
