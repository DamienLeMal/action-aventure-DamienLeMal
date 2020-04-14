var config = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	scene: [salle_0,salle_1,salle_2,salle_3,salle_4,salle_5,salle_6,salle_7,salle_8,salle_9,salle_10,salle_11,salle_12,salle_13,salle_14,salle_15],
	physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
};

var game = new Phaser.Game(config);