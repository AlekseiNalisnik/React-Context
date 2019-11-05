import React, { Component, Fragment } from 'react';

const TitleContext = React.createContext();

const LevelThree = () => (
    <TitleContext.Consumer>
        { ({ title, subTitle, click }) => (
            <Fragment>
                <h1 onClick={click}>{title}</h1>
                <h2>{subTitle}</h2>
            </Fragment>
        ) }
    </TitleContext.Consumer>
)

const LevelTwo = () => <LevelThree />

const LevelOne = () => <LevelTwo />

class App extends Component {
    render() {
        return (
            <TitleContext.Provider value ={{title: "New Title", subTitle: "New subTitle", click: () => console.log('Click!')}} >
                <LevelOne />  
            </TitleContext.Provider>  
        );
    }
}

export default App;