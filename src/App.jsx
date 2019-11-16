import React from 'react';
import './App.scss';
import CounterButton from './components/CounterButton';

const App = () => {
    return (
        <div className="App">
            <span>App is Running!</span>
            <CounterButton />
        </div>
    );
};

export default App;