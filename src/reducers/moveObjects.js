import { calculateAngle } from '../utils/formulas';
/*
extracts the x and y properties from mousePosition and passes 
them to the calculateAngle function to get the new angle. 
Then, in the end, it generates a new state with the new angle.
*/

function moveObjects(state, action) {
    if(!action.mousePosition) return state;
    const {x, y} = action.mousePosition;
    const angle = calculateAngle(0, 0, x, y);
    return {
        ...state,
        angle,
    };
}

export default moveObjects;