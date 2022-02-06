import React, { Component } from 'react';
import { CnxtConsumer } from './ContextComp';

export default class CompC extends Component {
    render() {
        return ( <
            CnxtConsumer > {
                (name) => {
                    return <div > { name } <
                        /div>
                }
            } <
            /CnxtConsumer>
        );
    }
}