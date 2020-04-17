class salle_7 extends Phaser.Scene {
	constructor(){
		super("salle7");
	}

	init(data) {

	}

	preload() {
		this.load.image('salle7','assets/png/salles/spr_salle7.png');
	}

	create() {
		this.background = this.physics.add.sprite(0,0,'salle7').setScale(3.96,3.9).setOrigin(0,0);
	}

	update() {
		
	}
}

