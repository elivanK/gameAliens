//This container will use the connect utility from react-redux

import { connect } from 'react-redux';
import App from '../App';
import { moveObjects, startGame } from '../actions/index';

//Tell redux that App component (The Canvas) 
//cares about the gameState property.
const mapStateToProps = state => ({
    angle: state.angle,
    gameState: state.gameState,
});

//map the action to the props
//Tell redux to pass startGame function to the App component (The Canvas)
//So it can trigger the new action.
const mapDispatchToProps = dispatch => ({
    moveObjects: (mousePosition) => {
        dispatch(moveObjects(mousePosition));
    },
    startGame: () => {
        dispatch(startGame());
    },
});

const Game = connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);

export default Game;