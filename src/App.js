import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getCanvasPosition } from './utils/formulas';
import Canvas from './components/Canvas';
//import PropTypes from 'prop-types';
//import logo from './logo.svg';
//import './App.css';

class App extends Component {
  //Start the uniform interval that will trigger the moveObjects action.
  //The trackMouse refers to a relative position inside your canvas.
  componentDidMount() {
    const self = this;
    setInterval(() => {
      self.props.moveObjects(self.canvasMousePosition);
    }, 10);
  }

  trackMouse(event) {
    this.canvasMousePosition = getCanvasPosition(event);
  }

  render() {
    return (
      <Canvas 
      angle={this.props.angle}
      trackMouse={event => (this.trackMouse(event))}
      />
    );
  }
}

App.propsTypes = {
  angle: PropTypes.number.isRequired,
  moveObjects: PropTypes.func.isRequired,
};


export default App;
