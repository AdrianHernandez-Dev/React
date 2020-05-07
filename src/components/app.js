import React from 'react';
import IncrementButton from './increment-button';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }
    IncrementNumber = () => {
        console.log('working')
    }

    render() {
        return (
            <div className="parent">
                <div className="count">
                    Number of clicks: {this.state.count}
                </div>
                <IncrementButton count={this.state.count}
                incrementNumber={this.IncrementNumber}/>
            </div>
        );
    }
}
