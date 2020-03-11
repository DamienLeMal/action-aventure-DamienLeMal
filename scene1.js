class scene1 extends Phaser.Scene {
	constructor(){
		super("scene_1");
	}

	init(data) {
		this.score = data.score;
	}

	preload() {
		this.load.image('back','background.png');
	}

	create() {

		this.add.image(300,400,'back');
		this.score += 5;
		this.text = this.add.text(100,300,'scene 1 '+this.score);// this.text remplace le var text pour les scenes

		this.cursor = this.input.keyboard.createCursorKeys();
		this.ordA = this.input.keyboard.addKey("A");
		this.ordZ = this.input.keyboard.addKey("Z");
		this.y = 0;

		this.cameras.main.setSize(800, 300);

        this.cam1 = this.cameras.add(0,300, 800, 300);
	}

	update() {
		if (this.cursor.right.isDown){
			this.y += 10;
			this.cam1.pan(0, this.y, 0);
		}
		if (this.cursor.left.isDown){
			this.y -= 10;
			this.cam1.pan(0, this.y, 0);
		}
		if (this.cursor.up.isDown){
			this.cameras.add(400, 0, 400, 600);
		}
		if (this.ordA.isDown){
			this.scene.start("scene_2", {score: this.score});
		}
		if (this.ordZ.isDown){
			this.scene.start("scene_0", {score: this.score});
		}
	}
}

