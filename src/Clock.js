import React, { Component } from 'react';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            name: 'Tai nhot'
        };
    }

    componentDidMount() {
        console.log('zo')
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        console.log('zo2')
        clearInterval(this.timerID);
    }

    tick() {
        console.log('zo1');
        this.setState({
            date: new Date(),
            name: "Ronaldo"
        });
    }

    render() {
        return (
            <div>
                <h1>Hello { this.state.name } !</h1>
                <h2>It is { this.state.date.toLocaleTimeString() }</h2>
            </div>
        );
    }
}

export default Clock;