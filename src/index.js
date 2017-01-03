/* es5 style
var React = require("react");
var ReactDOM = require("react-dom");

var mainContainer = document.getElementById('root');

var App = React.createClass({
    render: function () {
        return React.createElement('h1', null, 'React, es5 style');
    }
});

ReactDOM.render(
    React.createElement(App),
    mainContainer
);
*/

/* es6 style */
var React = require("react");
var ReactDOM = require("react-dom");

const mainContainer = document.getElementById('root')

class App extends React.Component {
    render(){
        return React.createElement('h1', null, 'React, es6 style');
    }
}

ReactDOM.render(
    React.createElement(App),
    mainContainer
);