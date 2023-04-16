'use strict'

// Set up game window and background image
var game = new Phaser.Game(640, 480, Phaser.AUTO, 'game', {
    preload: preload,
    create: create
});
 
// Load any assets
function preload() {
  // Load background image
  game.load.image('background', 'https://s3.amazonaws.com/html5gametutorial/assets/background2.png');
}

// Set up start button and background image
function create() {
  // Add the background sprite
  game.add.sprite(0, 0, 'background');

  // Add the start button
  var button = game.add.button(300, 300, 'button', actionOnClick, this);
}

// --- Helper Functions ---
// Add any helper functions here
// button action listener
function actionOnClick () {
  console.log("Button clicked")
}'