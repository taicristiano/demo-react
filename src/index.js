import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Hello from './Hello';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render('Hello world', document.getElementById('root'))
ReactDOM.render(<Hello />, document.getElementById('root'))

// Rendering element
function tick() {
    const renderingElement = (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is { new Date().toLocaleTimeString() }.</h2>
        </div>
    )
    ReactDOM.render(renderingElement, document.getElementById('root'))
}

setInterval(tick, 1000);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

