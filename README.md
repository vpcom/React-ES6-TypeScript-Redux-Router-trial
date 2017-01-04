# reactemp

## Step by step setup

### Initial components

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

### Adding ES2015 transcription

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

### Adding ES2015 transcription

Add the following modules:

    npm i -D babel-preset-es2015 babel-preset-react babel-preset-stage-0
    npm i -D typescript awesome-typescript-loader source-map-loader
    npm i -D ts-loader

Create the new file tsconfig.json with the following content:

    {
      "compilerOptions": {
        "module": "es6",
        "target": "es6",
        "moduleResolution": "node",
        "baseUrl": "src",
        "allowSyntheticDefaultImports": true,
        "noImplicitAny": false,
        "sourceMap": true,
        "outDir": "build/web/",
        "jsx": "preserve"
      },
      "exclude": [
        "node_modules"
      ]
    }

Change the config of the loader in webpack.config.json to:

    { test: /\.ts(x?)$/, loader: 'babel-loader!ts-loader' }

Change the preset in .babelrc to:

    "presets": ["es2015", "react", "stage-0"]

Eventually, change file extension of index.js to .tsx as well as the entry point in the Webpack config. Update the index.tsx file with the following TypeScript code:

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
