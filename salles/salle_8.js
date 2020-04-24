class salle_8 extends Phaser.Scene {
	constructor(){
		super("salle8");
	}

	init(data) {

	}

	create() {

		this.cameras.main.centerOn(400, 300);
		this.cam = this.cameras.main;
		this.y = 0;

		this.background = this.physics.add.sprite(0,0,'salle8').setScale(3.96,3.9).setOrigin(0,0);

		this.door1 = this.physics.add.sprite(85,300,'box').setScale(0.1,0.1).setOrigin(0,0);
		this.door2 = this.physics.add.sprite(400,45,'box').setScale(0.1,0.1).setOrigin(0,0);
		this.door3 = this.physics.add.sprite(400,1095,'box').setScale(0.1,0.1).setOrigin(0,0);

		this.walls = this.physics.add.staticGroup();
		this.walls.create(0,0,'box').setOrigin(0,0).setScale(5.25,37.5).refreshBody();
		this.walls.create(720,0,'box').setOrigin(0,0).setScale(5.25,37.5).refreshBody();
		this.walls.create(0,0,'box').setOrigin(0,0).setScale(100,2.5).refreshBody();
        this.walls.create(0,1100,'box').setOrigin(0,0).setScale(100,6.2).refreshBody();

        sphere = this.physics.add.sprite(600,450,'circle').setScale(4,4).setCircle(28);
		sphere.alpha = 0;
        this.box = this.physics.add.sprite(600,450,'boxe').setOrigin(4,0.5);
		this.player = this.physics.add.sprite(600,450,'player_idle').setScale(4,4);
		this.idle = this.anims.create({
            key:'idle',
            frames: this.anims.generateFrameNumbers('player_idle', {start: 0, end: 4}),
            frameRate: 4,
            repeat: -1
        });
        this.up = this.anims.create({
            key:'up',
            frames: this.anims.generateFrameNumbers('player_up', {start: 0, end: 4}),
            frameRate: 6,
            repeat: -1
        });
        this.down = this.anims.create({
            key:'down',
            frames: this.anims.generateFrameNumbers('player_down', {start: 0, end: 4}),
            frameRate: 6,
            repeat: -1
        });
        this.side = this.anims.create({
            key:'side',
            frames: this.anims.generateFrameNumbers('player_side', {start: 0, end: 4}),
            frameRate: 6,
            repeat: -1
        });

        //HUD
        this.hud_x = 25;
        for (var i = 0; i < pv_max/2; i++) {
            this.add.image(this.hud_x,25,'coeurE').setScale(4,4).setOrigin(0,0);
            this.hud_x += 35;
        }
        this.h1 = this.add.image(25,25,'coeurH').setScale(4,4).setOrigin(0,0);
        this.f1 = this.add.image(25,25,'coeurF').setScale(4,4).setOrigin(0,0);
        this.h2 = this.add.image(60,25,'coeurH').setScale(4,4).setOrigin(0,0);
        this.f2 = this.add.image(60,25,'coeurF').setScale(4,4).setOrigin(0,0);
        this.h3 = this.add.image(95,25,'coeurH').setScale(4,4).setOrigin(0,0);
        this.f3 = this.add.image(95,25,'coeurF').setScale(4,4).setOrigin(0,0);

		this.physics.add.collider(this.player,this.walls);
		this.physics.add.overlap(this.player,this.door1,porte1,null,this);
        this.physics.add.overlap(this.player,this.door2,porte2,null,this);
        this.physics.add.overlap(this.player,this.door3,porte3,null,this);

        function porte1 (player,door){
			this.scene.start("salle14");
		}
        function porte2 (player,door){
            this.scene.start("salle9");
        }
        function porte3 (player,door){
            this.scene.start("salle7");
        }
	}

	update() {

		if ((this.player.y > 300) &&(this.player.y < 900)) {
			this.y = this.player.y;
		}
		this.cam.pan(400, this.y, 0);

		switch (lastRoom) {
            case 14 :
                this.player.x = 120;
                this.player.y = 300;
                this.y = 300;
                break;
            case 9 :
                this.player.x = 400;
                this.player.y = 90;
                this.y = 300;
                break;
            case 7 :
                this.player.x = 400;
                this.player.y = 1055;
                this.y = 900;
                break;
        }
        lastRoom = 8;

		pad(this.player, this.box, this.up, this.down, this.side, this.idle);
        heart(this.h1,this.f1,this.h2,this.f2,this.h3,this.f3);

        //Stuff
    	sphere.x = this.player.x;
    	sphere.y = this.player.y;
        this.box.x = this.player.x;
    	this.box.y = this.player.y;
	}
}

