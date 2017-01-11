

import React, {PropTypes} from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

//import Counter from '../Counter/'

class App extends React.Component {


    constructor(props) {
        super(props);
        console.log("props App");
        console.log(props);
        console.log("this App");
        console.log(this);
    }


    render() {
        console.log("App component")
        console.log(this)
        console.log("------------------")
        const { header, sidebar, home, users, counter, visit } = this.props
        return (
            <div>
                {sidebar}
                {header}
                {home}
                This is the App content
                {users}
                {counter}
                {visit}

                {this.props.children}
            </div>

        )
    }
}

/*
App.propTypes = {
    children: PropTypes.object.isRequired
};
*/

export default App;

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