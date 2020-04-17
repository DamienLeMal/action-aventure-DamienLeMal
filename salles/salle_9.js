class salle_9 extends Phaser.Scene {
	constructor(){
		super("salle9");
	}

	init(data) {

	}

	preload() {
		this.load.image('salle9','assets/png/salles/spr_salle5-9-12.png');
	}

	create() {
		this.background = this.physics.add.sprite(0,0,'salle9').setScale(3.96,3.9).setOrigin(0,0);
	}

	update() {
		
	}
}

