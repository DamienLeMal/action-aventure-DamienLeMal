var config = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	scene: [scene0,scene1,scene2],
	physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
};

var game = new Phaser.Game(config);