import React, { Component } from 'react';

class HideShow extends Component {
    constructor(props) {
        super(props);
        this.state = { showWaring: true}
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handleToggleClick() {
        this.setState(props => ({
            showWaring: !props.showWaring
        }));
    }

    render() {
        return (
            <div>
                <WarningBanner warn={ this.state.showWaring }/>
                <button onClick={ this.handleToggleClick }>
                    { this.state.showWaring ? 'Hide' : 'Show'}
                </button>
            </div>
        );
    }
}

function WarningBanner(props) {
    if (!props.warn) {
        return null;
    }
    return (
        <div className="warning">
            Warning!
        </div>
    );
}

export default HideShow;