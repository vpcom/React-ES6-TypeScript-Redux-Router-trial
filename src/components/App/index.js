

import React from 'react';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

export default class App extends React.Component {
    render() {
        const { header, sidebar } = this.props
        return (
            <div>
                {sidebar}
                {header}
                This is the home page!!!
            </div>

        )
    }
}

/*


 <div className="Header">
 {header}
 </div>
 <div className="Sidebar">
 {sidebar}
 </div>

 <header />
 <main>
 {this.props.children}
 </main>

 */