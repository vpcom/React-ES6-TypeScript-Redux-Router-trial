/* es5 style */
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
