import React, { Component } from 'react';

class Toggle extends Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: true }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick (props) {
        console.log(props)
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    render() {
        return (
            <button onClick={ this.handleClick.bind(this, 1111) }>
                { this.state.isToggleOn ? "ON" : "OFF" }
            </button>
        )
    }
}

export default Toggle;