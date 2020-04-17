class salle_12 extends Phaser.Scene {
	constructor(){
		super("salle12");
	}

	init(data) {

	}

	preload() {
		this.load.image('salle12','assets/png/salles/spr_salle5-9-12.png');
		this.load.image('box','assets/png/spr_transparent.png');
		this.load.image('char','assets/png/spr_player_placeholder.png');
	}

	create() {
		this.background = this.physics.add.sprite(0,0,'salle12').setScale(3.96,3.9).setOrigin(0,0);
		this.door1 = this.physics.add.sprite(400,45,'box').setScale(0.1,0.1).setOrigin(0,0);
		this.door2 = this.physics.add.sprite(400,495,'box').setScale(0.1,0.1).setOrigin(0,0);

		this.walls = this.physics.add.staticGroup();
		this.walls.create(0,0,'box').setOrigin(0,0).setScale(5.25,37.5).refreshBody();
		this.walls.create(720,0,'box').setOrigin(0,0).setScale(5.25,37.5).refreshBody();
		this.walls.create(0,0,'box').setOrigin(0,0).setScale(50,2.5).refreshBody();
        this.walls.create(0,500,'box').setOrigin(0,0).setScale(50,6.2).refreshBody();

        sphere = this.physics.add.sprite(600,450,'circle').setScale(4,4).setCircle(28);
		sphere.alpha = 0;
        this.box = this.physics.add.sprite(600,450,'boxe').setOrigin(4,0.5);
		this.player = this.physics.add.sprite(0,0,'char').setScale(4,4);

		this.physics.add.collider(this.player,this.walls);
		this.physics.add.overlap(this.player,this.door1,porte1,null,this);
        this.physics.add.overlap(this.player,this.door2,porte2,null,this);
        function porte1 (player,door){
			this.scene.start("salle13");
		}
        function porte2 (player,door){
            this.scene.start("salle11");
        }
	}

	update() {
		switch (lastRoom) {
            case 13 :
                this.player.x = 400;
                this.player.y = 90;
                break;
            case 11 :
                this.player.x = 400;
                this.player.y = 455;
                break;
        }
        lastRoom = 12;

		pad(this.player, this.box);

        //Stuff
    	sphere.x = this.player.x;
    	sphere.y = this.player.y;
        this.box.x = this.player.x;
    	this.box.y = this.player.y;
	}
}