
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';


class Visit extends Component {


    constructor(props) {
        super(props);
        console.log("props");
        console.log(props);
        //console.log(this.getState());

        this.state = {

        };
    }


/*
    static propTypes = {
        visitCount: PropTypes.number //.isRequired
    }
*/
/*
    myFunction() {

    }
*/
    componentDidMount () {
        //SomeEvent.subscribe(this.myFunction);
        console.log("componentDidMount")
        console.log(this);
        console.log(this.props.visitCount);
        //this.props.visitCount++;
        this.setState((prevState, props) => {
            return {visitCount: 4};//prevState.myInteger + 1};// props.step};
        });
        this.setState({visitCount: this.props.visitCount + 1});
        console.log(this.props.visitCount);
    }

    render() {
        const { visitCount } = this.props;
        console.log("this:")
        console.log(this)
        console.log(this.props.visitCount)
        this.visitCount = 2;
        return (
            <p>
                Visit count: {visitCount}, {this.visitCount}.
            </p>
        )
    }
}

//export default Visit



Visit.propTypes = {
    visitCount: PropTypes.number,
    onIncrement: PropTypes.func, //.isRequired,
};

Visit.defaultProps = {

};

function mapStateToProps (state) {
    console.log(state);
    console.log(state.visitReducer[0].visitCount);
    return {
        visitCount: state.visitReducer[0].visitCount
    };
}

const mapDispatchToProps = {
    //onSearch: actions.search
}

export default connect(mapStateToProps, mapDispatchToProps)(Visit)



/*


 var mapStateToProps = function(state){
 // This component will have access to `state.battlefield` through `this.props.battle`
 return {battle:state.battlefield};
 };

 var mapDispatchToProps = function(dispatch){
 return {
 kill: function(killer,victim){ dispatch(actions.aimAt(killer,victim)); },
 duck: function(coward){ dispatch(actions.duckDown(coward)); },
 reset: function(){ dispatch(actions.reset()); }
 }
 };

 module.exports = ReactRedux.connect(mapStateToProps,mapDispatchToProps)(Home);

 */

