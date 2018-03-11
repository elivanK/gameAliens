//This container will use the connect utility from react-redux

import { connect } from 'react-redux';
import App from '../App';
import { moveObjects } from '../actions/index';

const mapStateToProps = state => ({
    angle: state.angle,
});

//map the action to the props
const mapDispatchToProps = dispatch => ({
    moveObjects: (mousePosition) => {
        dispatch(moveObjects(mousePosition));
    },
});

const Game = connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);

export default Game;