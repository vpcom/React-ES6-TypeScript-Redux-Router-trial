
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';


class Visit extends Component {


    constructor(props) {
        super(props);
        console.log("props Visit");
        console.log(props);
        console.log("this Visit");
        console.log(this);

        this.onIncrement = this.onIncrement.bind(this);

    }

    componentDidMount () {
        //SomeEvent.subscribe(this.myFunction);
        console.log("componentDidMount")
        console.log(this);
        console.log(this.props.visitCount);

        this.setState((prevState, props) => {
            return {visitCount: 4};//prevState.myInteger + 1};// props.step};
        });
        this.setState({visitCount: this.props.visitCount + 1});
        console.log(this.props.visitCount);
    }


    onIncrement() {
        console.log("this rfom onIncrement:")
        console.log(this)

        dispatch({ type: 'VISITOR' })
    }

    render() {
        const { dispatch, visitCount } = this.props;
        console.log("this:")
        console.log(this)
        console.log(this.props.visitCount)
        return (
            <p>
                Visit count: {visitCount}.
                <br />
                <button onClick={this.onIncrement}>
                    + old
                </button>

                <button onClick={ () => {
                    dispatch(this.onIncrement())
                }}>llllllll</button>
            </p>
        )
    }
}


Visit.propTypes = {
    visitCount: PropTypes.number,
    onIncrement: PropTypes.func, //.isRequired,
};

Visit.defaultProps = {

};

function mapStateToProps (state) {
    console.log("state mapStateToProps: ");
    console.log(state);
    console.log(state.visitReducer[0].visitCount);
    return {
        visitCount: state.visitReducer[0].visitCount
    };
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(Visit)
