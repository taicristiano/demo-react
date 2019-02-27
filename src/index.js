import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Hello from './Hello';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render('Hello world', document.getElementById('root'))
ReactDOM.render(<Hello />, document.getElementById('root'))


// Rendering a component

//example 1

function Welcome(props) {
    return <h1>Hello { props.name }</h1>
}

const welcome = <Welcome name="Tai Nhot dz" />

ReactDOM.render(
    welcome,
    document.getElementById('root')
)


//example 2

function Test() {
    return (
        <div>
            <Welcome name="Ronaldo"/>
            <Welcome name="Rooney"/>
            <Welcome name="Degea"/>
        </div>
    )
};

ReactDOM.render(
    <Test/>,
    document.getElementById('root')
)



//example 3

function formatDate(date) {
    return date.toLocaleDateString();
}

function Comment(props) {
    return (
        <div className="Comment">
            <UserInfo user={ props.author } />
            <div className="Comment-text">
                { props.text }
            </div>
            <div className="Comment-date">
                { formatDate(props.date) }
            </div>
        </div>
    )
}

function UserInfo(props) {
    return (
        <div className="UserInfo">
            <Avatar user={ props.user } />
            <div className="UserInfo-name">
                { props.user.name }
            </div>
        </div>
    )
}
function Avatar(props) {
    console.log(props);
    return (
        <img className="Avatar" src={ props.user.avatarUrl } alt={ props.user.name }/>
    )
}

const data = {
    date: new Date(),
    text: 'Learning React!',
    author: {
        name: 'Hello Tai Nhot',
        avatarUrl: 'https://placekitten.com/g/64/64'
    }
};

ReactDOM.render(
    <Comment
        date={ data.date }
        text={ data.text }
        author={ data.author }
    />,
    document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

