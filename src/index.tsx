/* ES5 style
var React = require("react");
var ReactDOM = require("react-dom");

var mainContainer = document.getElementById('root');

var App = React.createClass({
    render: function () {
        return React.createElement('h1', null, 'React, ES5 style');
    }
});

ReactDOM.render(
    React.createElement(App),
    mainContainer
);
*/

/* ES2015 style
var React = require("react");
var ReactDOM = require("react-dom");

const mainContainer = document.getElementById('root')

class App extends React.Component {
    render(){
        return React.createElement('h1', null, 'React, ES2015 style');
    }
}

ReactDOM.render(
    React.createElement(App),
    mainContainer
);
*/

/* TypeScript style */
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render() {
        return <h1>React, TypeScript style</h1>;
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
