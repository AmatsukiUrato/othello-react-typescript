import React from 'react';
import Button from '@material-ui/core/Button';
import './App.css';
import Player from './logic/Player';

const App: React.FC = () => {
    return (
        <div className="App">
            <div className="block">
                <div className="disc">test</div>
            </div>
            <Button variant="contained" color="primary">Hello</Button>
            <header className="App-header">
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
        </a>
            </header>
        </div>
    );
}

export default App;
