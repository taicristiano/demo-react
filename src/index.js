import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Hello from './Hello';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render('Hello world', document.getElementById('root'))
ReactDOM.render(<Hello />, document.getElementById('root'))

//example 1
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((number) => number * 2);
console.log(doubled);

const listItems = numbers.map((number, key) =>
    <li key={ key }>{ number }</li>
);

ReactDOM.render(
    <ul>{ listItems }</ul>,
    document.getElementById('root')
)

//example 2
function NumberLists(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number, key) =>
        <li key={ key }>{ number } . { number }</li>
    );
    return (
        <ul>{ listItems }</ul>
    )
}

ReactDOM.render(
    <NumberLists numbers={ numbers } />,
    document.getElementById('root')
);


//example 3
function ListItem(props) {
    return <li>{props.value}</li>;
}

function NumberList(props) {
    const numbers = props.numbers;
    const listItem = numbers.map((number) =>
        <ListItem  value={ number } key={ number.toString() }/>
    );

    return (
        <ul>
            { listItem }
        </ul>
    );
}

ReactDOM.render(
    <NumberList numbers={ numbers } />,
    document.getElementById('root')
);


//example 4
function Blog(props) {
    const sidebar = (
        <ul>
            {
                props.posts.map((post) =>
                    <li key={ post.id }>
                        { post.title }
                    </li>
                )
            }
        </ul>
    );

    const content = props.posts.map((post) =>
        <div key={ post.id }>
            <h3>{ post.title }</h3>
            <p>{ post.content }</p>
        </div>
    );

    return (
        <div>
            { sidebar }
            <hr/>
            { content }
        </div>
    );
}

const posts = [
    {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
    {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];

ReactDOM.render(
    <Blog posts={ posts }/>,
    document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

