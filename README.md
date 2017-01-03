# reactemp

## Step by step setup

### Initial components:

    npm init # generates the initial package.json
    npm i react -S # creates the node_modules folder
    npm i react-dom -S

Installing webpack and making the first hello world:

Create src folder
Create build/web folder
Run:

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

### Adding es6 transcription:

Run:

    npm i -D babel-loader babel-core
    npm i -D babel-preset-env

Add the following to the config variable in webpack.config.js

    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    }

Create the file .babelrc with the content:

    {
      "presets" : ["env"]
    }

Update src/index.js with the following es6 code:

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

npm install --save-dev typescript awesome-typescript-loader source-map-loader
npm i -D ts-loader