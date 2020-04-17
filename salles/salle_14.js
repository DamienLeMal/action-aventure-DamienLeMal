class salle_14 extends Phaser.Scene {
	constructor(){
		super("salle14");
	}

	init(data) {

	}

	preload() {
		this.load.image('salle14','assets/png/salles/spr_salle14.png');
	}

	create() {
		this.background = this.physics.add.sprite(0,0,'salle14').setScale(3.96,3.9).setOrigin(0,0);
	}

	update() {
		
	}
}

