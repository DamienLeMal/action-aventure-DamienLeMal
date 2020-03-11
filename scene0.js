class scene0 extends Phaser.Scene {
	constructor(){
		super("scene_0");
	}

	init(data) {
		this.score = data.score;
	}

	preload() {
		this.load.image('back','background.png');
	}

	create() {
		this.add.image(300,400,'back');
		this.cameras.main.centerOn(0, 0);
		this.cam = this.cameras.main;

		this.y = 0;
		this.x = 0;
		this.cam.pan(0, 500, 1000);
		this.score = 0;
		this.text = this.add.text(100,300,'scene 0 '+this.score);// this.text remplace le var text pour les scenes

		this.cursor = this.input.keyboard.createCursorKeys();
		this.ordA = this.input.keyboard.addKey("A");
		this.ordZ = this.input.keyboard.addKey("Z");
	}

	update() {
		if (this.cursor.down.isDown){
			//this.scene.start("scene_1", {score: this.score});
			this.y += 10;
			this.cam.pan(this.x, this.y, 0);
		}
		if (this.cursor.up.isDown){
			//this.scene.start("scene_2", {score: this.score});
			this.y -= 10;
			this.cam.pan(this.x, this.y, 0);
		}
		if (this.cursor.right.isDown){
			//this.scene.start("scene_1", {score: this.score});
			this.x += 10;
			this.cam.pan(this.x, this.y, 0);
		}
		if (this.cursor.left.isDown){
			//this.scene.start("scene_2", {score: this.score});
			this.x -= 10;
			this.cam.pan(this.x, this.y, 0);
		}
		if (this.ordA.isDown){
			this.scene.start("scene_1", {score: this.score});
		}
		if (this.ordZ.isDown){
			this.scene.start("scene_2", {score: this.score});
		}
	}
}

