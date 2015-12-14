/* CANVAS SETUP
-------------------------------------------------- */
// Canvas and Context
var canvas = document.createElement("canvas");  // The canvas element
var context = canvas.getContext("2d");          // The 2D context element

// Canvas-related variables
var winWidth,       // The maximum width for the current window
    winHeight,      // The maximum height for the current window
    canvasWidth,    // the actual width of the canvas
    canvasHeight,   // The actual height of the canvas
    canvasScale;    // The multipler to be used on all coordinates

// Assigns the appropriate values to the canvas variables (and the canvas itself)
var scaleCanvas = function() {
    winWidth = window.innerWidth
    winHeight = window.innerHeight
    
    // Calculations regarding all canvas size (and scale) variables
    if( winWidth / 16 >= winHeight / 9 ) {
        canvasHeight = winHeight;
        canvasWidth = canvasHeight * (16/9);
    } else {
        canvasWidth = winWidth;
        canvasHeight = canvasWidth * (9/16);
    }
    canvasScale = canvasWidth / 1600.0;

    // Applies the appropriate values to the canvas
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
}
scaleCanvas();

// Appends the canvas to the body
document.body.appendChild(canvas);

// Adds the scaleCanvas resize event TODO determine if it's worth the performance cost to add resize event
// window.addEventListener("resize", scaleCanvas);


/* WINDOW SETUP
-------------------------------------------------- */
// Determines the appropriate requestAnimationFrame for the user's browser
var w = window;
var requestAnimationFrame = w.requestAnimationFrame ||          // Standard/Modern
                            w.webkitRequestAnimationFrame ||    // Chrome and Safari
                            w.msRequestAnimationFrame ||        // Internet Explorer
                            w.mozRequestAnimationFrame;         // Firefox

/* GAME VARIABLES
-------------------------------------------------- */
// Store actors in objects here. Define their classes in classes.js, define their values in actors.js, and handle their events in events.js


/* DRAW FUNCTIONS
-------------------------------------------------- */
// Maintain your draw functions here (to be called by drawScreen)


/* UPDATE FUNCTIONS
-------------------------------------------------- */
// Maintain your update functions here (to be called by updateScreen)


/* PARENT DRAW AND UPDATE
-------------------------------------------------- */

// Draw Screen
var drawScreen = function() {
    // Call sub-draw functions here
    
    // Sample step counter to demonstrate that the loop is running
    context.fillStyle="green";
    context.rect(0,0,1600*canvasScale,900*canvasScale);
    context.fill();
    context.fillStyle = "rgb(10, 10, 10)";
    context.font = "24px Helvetica";
    context.textAlign = "left";
    context.textBaseline = "top";
    context.fillText("Update Steps: " + numUpdateSteps, 32, 32);
}


// Update Screen
var updateScreen = function( modifier, steps ) {
    // Call sub-update functions here
}