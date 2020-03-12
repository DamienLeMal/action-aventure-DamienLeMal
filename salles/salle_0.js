class salle_0 extends Phaser.Scene {
	constructor(){
		super("salle0");
	}

	init(data) {

	}

	preload() {
		this.load.image('back','assets/violet.jpg');
		this.load.image('fore','assets/blue.jpg');
	}

	create() {
		this.add.image(100,100,'back').setOrigin(0,0).setScale(1.31,0.98);
		this.add.image(1000, 1000,'fore').setOrigin(0,0).setScale(4,4);
		//camera.setViewport
	}

	update() {
		
	}
}

