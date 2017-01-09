

import React from 'react';

import { createStore } from 'redux';
import { Provider } from 'react-redux';



//import Counter from '../Counter/index.tsx'

export default class Header extends React.Component {
    render() {
        return <header className="primary-header">
                <h1>React, TypeScript style</h1>
            </header>;
    }
}
