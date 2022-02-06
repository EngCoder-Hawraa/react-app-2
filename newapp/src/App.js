import React, { Component } from "react";
import CompA from './components/CompA';
import { CnxtProvider } from './components/ContextComp';

class App extends Component {
    state = {
        name: 'App Comp'
    }
    render() {
        // console.log(this.state.name);
        return ( <
            CnxtProvider value = { this.state.name } >
            <
            div className = "App" >
            <
            CompA /
            >
            <
            /
            div > <
            /CnxtProvider>
        );
    }
}

export default App;