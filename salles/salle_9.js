class salle_9 extends Phaser.Scene {
	constructor(){
		super("salle9");
	}

	init(data) {

	}

	create() {
		this.background = this.physics.add.sprite(0,0,'salle5-9-12').setScale(3.96,3.9).setOrigin(0,0);
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
        function porte1 (player,door){
			this.scene.start("salle15");
		}
        function porte2 (player,door){
            this.scene.start("salle8");
        }
	}

	update() {
		switch (lastRoom) {
            case 15 :
                this.player.x = 400;
                this.player.y = 90;
                break;
            case 8 :
                this.player.x = 400;
                this.player.y = 455;
                break;
        }
        lastRoom = 9;

		pad(this.player, this.box, this.up, this.down, this.side, this.idle);
        heart(this.h1,this.f1,this.h2,this.f2,this.h3,this.f3);

        //Stuff
    	sphere.x = this.player.x;
    	sphere.y = this.player.y;
        this.box.x = this.player.x;
    	this.box.y = this.player.y;
	}
}