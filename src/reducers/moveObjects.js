import { calculateAngle } from '../utils/formulas';
import createFlyingObjects from './createFlyingObjects';
import moveBalls from './moveCannonBalls';
import checkCollisions from './checkCollisions';

function moveObjects(state, action) {
  if (!state.gameState.started) return state;
  let cannonBalls = moveBalls(state.gameState.cannonBalls);
  const mousePosition = action.mousePosition || {
    x: 0,
    y: 0,
  };

  const newState = createFlyingObjects(state);
  //destroy flying objects after 4 seconds
  //so new ones can appear and move through the canvas.  
  const now = (new Date()).getTime();
  //filters the flyingObjects property of the gameState to remove objects that 
  //have an age equals or greater than 4000 (4 seconds).
  let flyingObjects = newState.gameState.flyingObjects.filter(object => (
    (now - object.createdAt) < 4000
  ));

  const { x, y } = mousePosition;
  const angle = calculateAngle(0, 0, x, y);

  const objectDestroyed = checkCollisions(cannonBalls, flyingObjects);
  const cannonBallsDestroyed = objectDestroyed.map(object => (object.cannonBallId));
  const flyingDiscsDestroyed = objectDestroyed.map(object => (object.flyingDiscId));

  cannonBalls = cannonBalls.filter(cannonBall => (cannonBallsDestroyed.indexOf(cannonBall.id)));
  flyingObjects = flyingObjects.filter(flyingDisc => (flyingDiscsDestroyed.indexOf(flyingDisc.id)));

  return {
    ...newState,
    gameState: {
        ...newState.gameState,
        flyingObjects,
        cannonBalls,
    },
    angle,
  };
}

export default moveObjects;
