import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { Container, Box, Input, Button } from '@material-ui/core';
import { DiscStatus } from './logic/Othello';
import { getRandomInt } from './utils/utils';
import Disc from './Disc';


type StartState = {
    boardSize: number;
    message?: string;
}

type StartProps = {
    childStart: Function
}

class Start extends Component<StartProps, StartState> {

    constructor(props: StartProps) {
        super(props);
        this.state = {
            boardSize: 10,
        }
        this.handleOnClickStart = this.handleOnClickStart.bind(this);
        this.handleOnChangeBoardSize = this.handleOnChangeBoardSize.bind(this);

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
                    <Box width="200px" height="200px" display="flex" flexWrap="wrap">
                        {Array.from(Array(16).keys()).map(index =>
                            <Disc discStatus={this.getRandomEnumValue()} key={index}></Disc>
                        )}
                    </Box>
                </Grid>
                <Grid container alignItems="center" justify="center">
                    <Box mt={5}>
                        <label>
                            ボードの大きさ：
                            <Input
                                type="number"
                                defaultValue={this.state.boardSize}
                                onChange={this.handleOnChangeBoardSize}></Input>
                        </label>
                        <div>
                            <p>ボードの大きさは4~20(偶数のみ)を選択してください</p>
                            {this.state.message}
                        </div>
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

    private canStartGame = () => {
        if (this.state.boardSize < 4) {
            return false;
        } else if (20 < this.state.boardSize) {
            return false;
        } else if (this.state.boardSize % 2 === 1) {
            return false;
        } else if (this.state.boardSize === undefined) {
            return false;
        }
        return true
    }

    private handleOnClickStart = () => {
        if (!this.canStartGame()) {
            this.setState({ message: "ボードの大きさを正しく入力してください" })
            return;
        }
        this.props.childStart(this.state.boardSize);
    };

    private handleOnChangeBoardSize = (event: any) => {
        this.setState({ boardSize: event.target.value });
    }

    private getRandomEnumValue = ():DiscStatus => {
        const enumValues = Object.keys(DiscStatus)
            .map(n => Number.parseInt(n))
            .filter(n => !Number.isNaN(n));
        const randomIndex = getRandomInt(0, enumValues.length);
        return enumValues[randomIndex];
    }
}

export default Start;
