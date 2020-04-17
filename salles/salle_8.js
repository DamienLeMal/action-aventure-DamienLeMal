class salle_8 extends Phaser.Scene {
	constructor(){
		super("salle8");
	}

	init(data) {

	}

	preload() {
		this.load.image('salle8','assets/png/salles/spr_salle8.png');
	}

	create() {
		this.background = this.physics.add.sprite(0,0,'salle8').setScale(3.96,3.9).setOrigin(0,0);
	}

	update() {
		
	}
}

