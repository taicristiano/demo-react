import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Hello from './Hello';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render('Hello world', document.getElementById('root'))
ReactDOM.render(<Hello />, document.getElementById('root'))

const name = "Tai Cristiano";
const element = <h1>Hello {name}</h1>

ReactDOM.render(
    element,
    document.getElementById('root')
)

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'Tai',
    lastName: 'Nhot',
    avatarUrl : 'http://placehold.it/400x250/000/fff'
};
const elementNew = (
    <h1>
        Hello { formatName(user) }
    </h1>
);

ReactDOM.render(
    elementNew,
    document.getElementById('root')
)


const divComponent = (
    <div>
        <h1>Hello!</h1>
        <h2>Good to see you here.</h2>
        <img src={ user.avatarUrl } />
  </div>
)
ReactDOM.render(
    divComponent,
    document.getElementById('root')
)

//JSX Represents Objects


// there two example are indentical
const objectExample = (
    <h1 className="greeting">
        Hello, world!
    </h1>
);

const objectExample1 = React.createElement(
    'h1',
    {className: 'greeting'},
    'Hello, world!'
);


const elementTest = {
    type: 'h1',
    props: {
      className: 'greeting',
      children: 'Hello, world!'
    }
};

// const test = ReactDOM.createElement(
//     elementTest
// );
// ReactDOM.render(
//     divComponent,
//     document.getElementById('root')
// )

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

