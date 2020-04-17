class salle_13 extends Phaser.Scene {
	constructor(){
		super("salle13");
	}

	init(data) {

	}

	preload() {
		this.load.image('salle13','assets/png/salles/spr_salle13.png');
	}

	create() {
		this.background = this.physics.add.sprite(0,0,'salle13').setScale(3.96,3.9).setOrigin(0,0);
	}

	update() {
		
	}
}

