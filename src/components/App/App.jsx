import React from 'react';
import Header from '../Header/Header';
import ResultsContainer from '../ResultsContainer/ResultsContainer';
import SearchBox from '../SearchBox/SearchBox';
import './App.css';

const name = require('@rstacruz/startup-name-generator');

class App extends React.Component {
    state = {
        headerText: 'Startup Name Generator.',
        headerExpanded: true,
        suggestedName: [],
    };

    inputChangeHandler = (inputText) => {
        this.setState({
            headerExpanded: !inputText,
            suggestedName: inputText ? name(inputText) : [],
        });
    };

    render() {
        return (
            <div>
                <Header
                    headerExpanded={this.state.headerExpanded}
                    headerText={this.state.headerText}
                />
                <SearchBox onInputChange={this.inputChangeHandler} />
                <ResultsContainer
                    suggestedNames={this.state.suggestedName}
                    headerExpanded={this.state.headerExpanded}
                />
            </div>
        );
    }
}

// function App() {
//     return <h1>This is a functionl component..</h1>;
// }

export default App;
