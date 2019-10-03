import React from 'react';
import Button from '@material-ui/core/Button';
import HUE from '@material-ui/core/colors/HUE';

import './App.css';

const App: React.FC = () => {
    return (
        <div className="App">
            <div className="block">

            </div>
            <Button variant="contained" color={green[500]}>Hello World</Button>
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
