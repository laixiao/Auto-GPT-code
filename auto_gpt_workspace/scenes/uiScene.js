class UiScene extends Phaser.Scene {
  constructor() {
    super({ key: 'UiScene' });
  }

  preload() {
    this.load.image('startButton', 'test1/40-402545_blue-glossy-button-png-transparent-png.png');
  }
  create() {
    var sprite = this.add.sprite(400, 300, 'startButton').setInteractive();
    sprite.on('pointerdown', () => {
      this.scene.start('GameScene')
    })
  }
};