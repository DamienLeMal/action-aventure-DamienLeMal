class salle_0 extends Phaser.Scene {
	constructor(){
		super("salle0");
	}

	init(data) {

	}

	preload() {
		this.load.image('salle0','assets/png/salles/spr_salle0.png');
        this.load.image('salle1','assets/png/salles/spr_salle1.png');
        this.load.image('salle2','assets/png/salles/spr_salle2.png');
        this.load.image('salle3','assets/png/salles/spr_salle3.png');
        this.load.image('salle4','assets/png/salles/spr_salle4.png');
        this.load.image('salle6','assets/png/salles/spr_salle6.png');
        this.load.image('salle7','assets/png/salles/spr_salle7.png');
        this.load.image('salle8','assets/png/salles/spr_salle8.png');
        this.load.image('salle10','assets/png/salles/spr_salle10.png');
        this.load.image('salle11','assets/png/salles/spr_salle11.png');
        this.load.image('salle13','assets/png/salles/spr_salle13.png');
        this.load.image('salle14','assets/png/salles/spr_salle14.png');
        this.load.image('salle5-9-12','assets/png/salles/spr_salle5-9-12.png');
		this.load.image('circle','assets/png/spr_sphere_placeholder.png');
		this.load.image('box','assets/png/spr_transparent.png');
        this.load.image('coeurF','assets/png/item/spr_heart_full.png');
        this.load.image('coeurH','assets/png/item/spr_heart_half.png');
        this.load.image('coeurE','assets/png/item/spr_heart_empty.png');
        this.load.image('coeurI','assets/png/item/spr_heart_item.png');
        this.load.image('runeBox','assets/png/item/spr_rune_circle.png');
        this.load.image('runeSelect','assets/png/item/spr_rune_select.png');
        this.load.image('jera','assets/png/item/spr_rune_jera.png');
        this.load.image('teiwaz','assets/png/item/spr_rune_teiwaz.png');
        this.load.image('bloc','assets/png/item/spr_bloc.png');
        this.load.image('bloc_push','assets/png/item/spr_bloc_push.png');
        this.load.image('door_closed','assets/png/item/spr_door_closed.png');
        this.load.image('door_locked','assets/png/item/spr_door_locked.png');
        this.load.spritesheet('door_opening','assets/png/item/spr_door_opening.png',{frameWidth: 33, frameHeight: 18});
        this.load.spritesheet('bloc_explosion','assets/png/item/spr_bloc_explosion.png',{frameWidth: 30, frameHeight: 30});
        this.load.spritesheet('player_idle','assets/png/player/spr_player_idle.png',{frameWidth: 15, frameHeight: 20});
        this.load.spritesheet('player_up','assets/png/player/spr_player_walk_up.png',{frameWidth: 15, frameHeight: 20});
        this.load.spritesheet('player_down','assets/png/player/spr_player_walk_down.png',{frameWidth: 15, frameHeight: 20});
        this.load.spritesheet('player_side','assets/png/player/spr_player_walk_side.png',{frameWidth: 15, frameHeight: 20});
        this.load.spritesheet('player_attaque_up','assets/png/player/spr_player_attaque_up.png',{frameWidth: 27, frameHeight: 26});
        this.load.spritesheet('player_attaque_down','assets/png/player/spr_player_attaque_down.png',{frameWidth: 27, frameHeight: 26});
        this.load.spritesheet('player_attaque_side','assets/png/player/spr_player_attaque_side.png',{frameWidth: 27, frameHeight: 26});
        this.load.audio('jeramp3','assets/telekinesis.wav');
	}

	create() {
//Environnement
		this.background = this.physics.add.sprite(0,0,'salle0').setScale(3.96,3.9).setOrigin(0,0);
		this.door1 = this.physics.add.sprite(85,300,'box').setScale(0.1,0.1).setOrigin(0,0);
		this.door2 = this.physics.add.sprite(400,100,'box').setScale(0.1,0.1).setOrigin(0,0);
		this.door3 = this.physics.add.sprite(715,300,'box').setScale(0.1,0.1).setOrigin(0,0);

        this.doors = this.physics.add.group();
        this.doors2 = this.doors.create(337,35,'door_closed').setOrigin(0,0).setScale(3.96,3.9);
        this.doors2_l = this.doors.create(337,35,'door_locked').setOrigin(0,0).setScale(3.96,3.9);
        this.doors3 = this.doors.create(756,238,'door_closed').setOrigin(0,0).setScale(3.96,3.9).setAngle(90);
        this.checkClosedDoors = 1;

		this.walls = this.physics.add.staticGroup();
		this.walls.create(0,0,'box').setOrigin(0,0).setScale(5.25,37.5).refreshBody();
		this.walls.create(720,0,'box').setOrigin(0,0).setScale(5.25,37.5).refreshBody();
		this.walls.create(0,0,'box').setOrigin(0,0).setScale(50,6).refreshBody();
        this.walls.create(0,500,'box').setOrigin(0,0).setScale(50,6.2).refreshBody();

        this.bloc = this.physics.add.group();
        this.bloc.create(350, 400, 'bloc').setScale(3.96,3.9);
        this.bloc.create(500, 400, 'bloc').setScale(3.96,3.9);

        this.blocP = this.physics.add.staticGroup();
        this.blocP.create(300, 200, 'bloc_push').setScale(3.96,3.9).setSize(60,0).setOffset(-22);
        this.blocP.create(400, 200, 'bloc_push').setScale(3.96,3.9).setSize(60,0).setOffset(-22);

        this.pot = this.physics.add.group();
        this.pot.create(200,300,'box').setScale(3,3);

        this.heart = this.physics.add.staticGroup();
        this.heart.create(250,250,'coeurI').setOrigin(0,0).setScale(3.96,3.9).refreshBody();
//Player
		sphere = this.physics.add.sprite(600,450,'circle').setScale(3.96,3.9).setCircle(28).setAlpha(0);
		box = this.physics.add.sprite(600,450,'box').setOrigin(2,0.5).setScale(3.96,3.9);
        this.teiwaz = this.physics.add.staticGroup();
        this.player = this.physics.add.sprite(600,450,'player_idle').setScale(3.96,3.9).setSize(11,6,false).setOffset(2, 13).setOrigin(0.5,0.5);
//HUD
        this.hud_x = 25;
        for (var i = 0; i < pv_max/2; i++) {
            this.add.image(this.hud_x,25,'coeurE').setScale(3.96,3.9).setOrigin(0,0);
            this.hud_x += 35;
        }
        this.h1 = this.add.image(25,25,'coeurH').setScale(3.96,3.9).setOrigin(0,0);
        this.f1 = this.add.image(25,25,'coeurF').setScale(3.96,3.9).setOrigin(0,0);
        this.h2 = this.add.image(60,25,'coeurH').setScale(3.96,3.9).setOrigin(0,0);
        this.f2 = this.add.image(60,25,'coeurF').setScale(3.96,3.9).setOrigin(0,0);
        this.h3 = this.add.image(95,25,'coeurH').setScale(3.96,3.9).setOrigin(0,0);
        this.f3 = this.add.image(95,25,'coeurF').setScale(3.96,3.9).setOrigin(0,0);

        this.t = this.add.text(200,200,'coeurF');

        this.runeHud1 = this.add.image(this.player.x, this.player.y + 100, 'runeBox').setScale(3.96,3.9);
        this.runeHud2 = this.add.image(this.player.x + 75, this.player.y - 75, 'runeBox').setScale(3.96,3.9);
        this.runeHud3 = this.add.image(this.player.x + 100, this.player.y, 'runeBox').setScale(3.96,3.9);
        this.runeHud4 = this.add.image(this.player.x + 75, this.player.y + 75, 'runeBox').setScale(3.96,3.9);
        this.runeHud5 = this.add.image(this.player.x, this.player.y - 100, 'runeBox').setScale(3.96,3.9);
        this.runeHud6 = this.add.image(this.player.x - 75, this.player.y + 75, 'runeBox').setScale(3.96,3.9);
        this.runeHud7 = this.add.image(this.player.x - 100, this.player.y, 'runeBox').setScale(3.96,3.9);
        this.runeHud8 = this.add.image(this.player.x - 75, this.player.y - 75, 'runeBox').setScale(3.96,3.9);
        this.runeSelect = this.add.image(this.player.x - 75, this.player.y + 75, 'runeSelect').setScale(3.96,3.9);
//Animations
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
        this.atk_up = this.anims.create({
            key:'atk_up',
            frames: this.anims.generateFrameNumbers('player_attaque_up', {start: 0, end: 4}),
            frameRate: 15,
            repeat: -1
        });
        this.atk_down = this.anims.create({
            key:'atk_down',
            frames: this.anims.generateFrameNumbers('player_attaque_down', {start: 0, end: 4}),
            frameRate: 15,
            repeat: -1
        });
        this.atk_side = this.anims.create({
            key:'atk_side',
            frames: this.anims.generateFrameNumbers('player_attaque_side', {start: 0, end: 4}),
            frameRate: 15,
            repeat: -1
        });
        this.explosion = this.anims.create({
            key:'explosion',
            frames: this.anims.generateFrameNumbers('bloc_explosion', {start: 0, end: 4}),
            frameRate: 15,
            repeat: -1
        });
        this.open = this.anims.create({
            key:'sesame',
            frames: this.anims.generateFrameNumbers('door_opening', {start: 0, end: 4}),
            frameRate: 10,
            repeat: -1
        });
//sound
        this.soundTest = this.sound.add('jeramp3');
//colliders & functions
		this.physics.add.collider(this.player,this.walls);
        this.physics.add.collider(this.player,this.blocP);
        this.physics.add.collider(this.player,this.bloc,collBloc,null,this);
        this.physics.add.collider(this.bloc, this.walls,collBlocWall,null,this);
        this.physics.add.collider(this.bloc, this.blocP,collBlocWall,null,this);
		this.physics.add.overlap(this.player,this.door1,porte1,null,this);
        this.physics.add.overlap(this.player,this.door2,porte2,null,this);
        this.physics.add.overlap(this.player,this.door3,porte3,null,this);
        this.physics.add.overlap(sphere,this.bloc,jera,null,this);
        this.physics.add.overlap(this.player,this.heart,heartPick,null,this);
        this.physics.add.overlap(this.pot,this.teiwaz,cassePot,null,this);

        function cassePot (pot, hit) {
            console.log('yes');
            hit.disableBody(true,true);
            pot.disableBody(true,true);
            this.heart.create(pot.x,pot.y,'coeurI').setOrigin(0,0).setScale(3.96,3.9).refreshBody();
        }
		function porte1 (player, door){
			this.scene.start("salle10");
		}
        function porte2 (player, door){
            if (this.checkClosedDoors == 0) {
                if (lock2 == 0) {
                    this.scene.start("salle7");
                }else if (key > 0){
                    key -= 1;
                    this.doors2_l.anims.play('sesame',false);
                }
            }
        }
        function porte3 (player, door){
            if (this.checkClosedDoors == 0) {
                this.scene.start("salle1");
            }
        }
        function collBloc (player, bloc){
            this.doors3.anims.play('sesame',false);
            this.doors2.anims.play('sesame',false);
            bloc.setVelocity(0,0);
        }
        function collBlocWall (bloc, wall){
            if (jet == 1) {
                bloc.setVelocity(0,0);
                if (bloc.anims.getCurrentKey() != 'explosion') {
                    bloc.anims.play('explosion',false).setSize(20,20).setOffset(6, 6);
                }
                if (bloc.anims.currentFrame.index === 5) {
                    bloc.disableBody(true,true);
                    jet = 0;
                }
            }
        }
    }

	update() {

        lock2 = doorOpen(this.doors2_l,lock2);
        this.checkClosedDoors = doorOpen(this.doors2,this.checkClosedDoors);
        this.checkClosedDoors = doorOpen(this.doors3,this.checkClosedDoors);

		//Hero start position
        switch (lastRoom) {
            case -1 :
                this.player.x = 400;
                this.player.y = 300;
                break;
            case 10 :
                this.player.x = 120;
                this.player.y = 300;
                break;
            case 7 :
                this.player.x = 400;
                this.player.y = 90;
                break;
            case 1 :
                this.player.x = 680;
                this.player.y = 300;
                break;
        }
        lastRoom = 0;





//test (un et deux n'existent qu'ici)
        this.un = buttonPressed;
        if (this.deux != this.un){
            this.soundTest.play();
        }
        this.deux = this.un;



        this.u = pad(this.player, box, this.up, this.down, this.side, this.idle);
        if (buttonPressed == 4) {
            this.physics.world.timeScale = 6;
        }else{
            this.physics.world.timeScale = 1;
        }
        heart(this.h1,this.f1,this.h2,this.f2,this.h3,this.f3);
        rune(this.runeHud1, this.runeHud2, this.runeHud3, this.runeHud4, this.runeHud5, this.runeHud6, this.runeHud7, this.runeHud8, this.runeSelect, this.u, this.player);
        throwBloc(this.player, blocGrab);
        teiwaz(this.player, this.atk_up, this.atk_down, this.atk_side, this.teiwaz);
        endAtk(this.player, this, this.idle);
    	sphere.x = this.player.x;
    	sphere.y = this.player.y;
        if (hold == 1) {
    	   box.x = this.player.x;
    	   box.y = this.player.y;
	    }
    }
}