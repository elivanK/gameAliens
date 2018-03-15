export const MOVE_OBJECTS = "MOVE_OBJECTS";

export const moveObjects = mousePosition => ({
    type: MOVE_OBJECTS,
    mousePosition,
});

//The action to remove the title and the startgame components
//from screen when user click on button
export const START_GAME = 'START_GAME';
export const startGame = () => ({
    type: START_GAME,
});