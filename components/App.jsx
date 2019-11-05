import React, { Component } from 'react';

const LevelThree = ( {title} ) => <h1>{title}</h1>

const LevelTwo = ( {title} ) => <LevelThree title={title} />

const LevelOne = ( {title} ) => <LevelTwo title={title} />

class App extends Component {
    render() {
        return (
            <LevelOne title="Old title panel" />
        );
    }
}

export default App;