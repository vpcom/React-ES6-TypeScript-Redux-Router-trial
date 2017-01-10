import * as React from 'react';


export class Counter extends React.Component {

/*
    constructor(props: any){
        super(props);
        this.test = this.props.test;
    }
    /*
        constructor(props, context) {
            super(props, context);
            this.state = { counter: 0 };
        }*

        constructor(props, context){
            super(props);

            this.state = { counter: 0 };
        }

    *
        constructor(props: any){
            super(props);
            //this.test = this.props.test;
        }
    */
    render() {
        return (
            <div>
                <p>
                    <span>HIHIHI </span>
                </p>
            </div>
        );
    }
}

/*
import React, { Component, PropTypes } from 'react'

class Counter extends Component {
    static propTypes = {
        value: PropTypes.number.isRequired,
        onIncrement: PropTypes.func.isRequired,
        onDecrement: PropTypes.func.isRequired
    }

    incrementIfOdd = () => {
        if (this.props.value % 2 !== 0) {
            this.props.onIncrement()
        }
    }

    incrementAsync = () => {
        setTimeout(this.props.onIncrement, 1000)
    }

    render() {
        const { value, onIncrement, onDecrement } = this.props
        return (
            <p>
                Clicked: {value} times
                {' '}
                <button onClick={onIncrement}>
                    +
                </button>
                {' '}
                <button onClick={onDecrement}>
                    -
                </button>
                {' '}
                <button onClick={this.incrementIfOdd}>
                    Increment if odd
                </button>
                {' '}
                <button onClick={this.incrementAsync}>
                    Increment async
                </button>
            </p>
        )
    }
}

export default Counter
*/

/*
import React, { Component, PropTypes } from 'react'

export default class Counter extends Component {

    incrementIfOdd = () => {
        if (this.props.value % 2 !== 0) {
            this.props.onIncrement()
        }
    }

    incrementAsync = () => {
        setTimeout(this.props.onIncrement, 1000)
    }

    render() {
        const { value, onIncrement, onDecrement } = this.props
        return (
            <p>
                Clicked: {value} times
                {' '}
                <button onClick={onIncrement}>
                    +
                </button>
                {' '}
                <button onClick={onDecrement}>
                    -
                </button>
                {' '}
                <button onClick={this.incrementIfOdd}>
                    Increment if odd
                </button>
                {' '}
                <button onClick={this.incrementAsync}>
                    Increment async
                </button>
            </p>
        )
    }
}


Counter.propTypes = {
    value: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired
}
*/