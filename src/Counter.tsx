import React, { Component } from 'react';

const App = () => (<Counter></Counter>)

type CounterState = {
    count: number;
}

class Counter extends Component<Readonly<{}>, CounterState> {
    constructor(props: Readonly<{}>) {
        super(props)
        this.state = {
            count: 0
        }
    }

    handlePlusButton = () => {
        this.setState({count: this.state.count + 1})
    }

    handleMuinusButton = () => {
        this.setState({count: this.state.count - 1});
    }

    public render() {
        return (
            <React.Fragment>
                <div>count: {this.state.count}</div>
                <button onClick={this.handlePlusButton}>+1</button>
                <button onClick={this.handleMuinusButton}>-1</button>
            </React.Fragment>
        )
    }
}

export default App;