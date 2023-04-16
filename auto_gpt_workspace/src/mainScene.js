class MainScene extends Phaser.Scene {
  constructor() {
    super({ key: 'MainScene' });
  }

  preload() {
    // code for loading game assets
  }

  create() {
    this.startButton = this.add.sprite(400, 300, 'startButton').setInteractive();
    this.startButton.on('pointerdown', () => {this.scene.start('UiScene')});
  }
}
