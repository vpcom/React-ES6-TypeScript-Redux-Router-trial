

import React from 'react';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

//import Counter from '../Counter/'

export default class App extends React.Component {
    render() {
        const { header, sidebar, home } = this.props
        return (
            <div>
                {sidebar}
                {header}
                {home}
                This is the home base content!

            </div>

        )
    }
}

/*


 const { header, sidebar, counter, home } = this.props
 {counter}


 <Counter
 value={store.getState()}
 onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
 onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
 />


 <Counter state={store.getState()} dispatch={store.dispatch}></Counter>

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