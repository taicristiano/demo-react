import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Hello from './Hello';
import Forms from './Forms';
import FormsMultipleInput from './FormsMultipleInput';


import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render('Hello world', document.getElementById('root'))
ReactDOM.render(<Hello />, document.getElementById('root'))

ReactDOM.render(<Forms />, document.getElementById('root'))
ReactDOM.render(<FormsMultipleInput />, document.getElementById('root'))



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

