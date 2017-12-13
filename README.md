# React ES6 TypeScript Redux Router trial

## tldr

This is a project aimed at learning React. The aim was to allow ECMAScript6 or TypeScript thanks to Babel, and the to setup Redux and a Router.

To be continued...


## Run


    npm install
    webpack-dev-server --progress --colors or npm start

Go to `http://localhost:8080/` or `http://localhost:8080/webpack-dev-server/` for the webpack info

TODO: build script in package.json

It may also be necessary to stop Node to be able to restart it. On Windows, use:

    taskkill /F /IM node.exe 


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
    npm i -D webpack-dev-server and/or npm i -g webpack-dev-server if not using npm start script

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


## installing react-router:

    npm i -S react-router
    npm i -S react-router-redux
    
    npm i -S redux

npm i -S path // For cross platform paths




## React references

### General
- http://stackoverflow.com/documentation/reactjs/6371/react-createclass-vs-extends-react-component#t=201611112010580710903
- easy state change on mounting: http://jaketrent.com/post/set-state-in-callbacks-in-react/
- https://demo.reactstarterkit.com/contact
- and also the todd moto about create.class VS extends component

### Redux
- https://github.com/reactjs/redux/
- Maybe this one, but there may not be the source: https://egghead.io/courses/getting-started-with-redux
- https://learnredux.com/
- https://github.com/krawaller/riastart2015
- Official redux examples: https://github.com/reactjs/redux
- https://github.com/reactjs/react-router-redux
- http://jamesknelson.com/simple-routing-redux-react/
- http://jlongster.com/A-Simple-Way-to-Route-with-Redux
- https://github.com/jpsierens/webpack-react-redux
- http://jpsierens.com/simple-react-redux-application/
- https://github.com/reactjs/redux/blob/master/docs/introduction/Examples.md
- https://github.com/bradwestfall/CSS-Tricks-React-Series/

### Redux Thunk async calls for notifications
- https://github.com/gaearon/redux-thunk
- https://medium.com/@stowball/a-dummys-guide-to-redux-and-thunk-in-react-d8904a7005d3#.c0dhchmuq
- http://blog.nojaf.com/2015/12/06/redux-thunk/
- http://stackoverflow.com/questions/35411423/how-to-dispatch-a-redux-action-with-a-timeout/35415559#35415559

## Temp notes

Now here: http://redux.js.org/docs/basics/Reducers.html#handling-actions
... go to http://redux.js.org/docs/basics/ExampleTodoList.html and rework the visit/index.js file to link things well
See this: https://github.com/reactjs/redux/tree/master/examples/todos/src

To review: propTypes 

