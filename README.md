# reactemp

## Step by step setup

- Initial components:

npm init # generates the initial package.json

npm i react -S # creates the node_modules folder

npm i react-dom -S

Installing webpack and making the first hello world

Create src folder

Create build/web folder

npm i webpack -D

Create webpack.config.js

Create src folder

Create build folder

Create index.html with this in the body:

<div id="root" />
<script type="text/javascript" src="bundle.js" charset="utf-8"></script>
    
Create src/index.js:

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
