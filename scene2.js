class scene2 extends Phaser.Scene {
	constructor(){
		super("scene_2");
	}

	init(data) {
		this.score = data.score;
	}

	preload() {

	}

	create() {
		this.score += 5;
		this.text = this.add.text(100,300,'scene 2 '+this.score);// this.text remplace le var text pour les scenes


		this.cursor = this.input.keyboard.createCursorKeys();
		this.ordA = this.input.keyboard.addKey("A");
		this.ordZ = this.input.keyboard.addKey("Z");
	}

	update() {
		if (this.cursor.right.isDown){
			
		}
		if (this.cursor.down.isDown){
			
		}
		if (this.ordA.isDown){
			this.scene.start("scene_0", {score: this.score});
		}
		if (this.ordZ.isDown){
			this.scene.start("scene_1", {score: this.score});
		}
	}
}

