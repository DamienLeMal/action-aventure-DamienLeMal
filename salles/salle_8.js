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
		this.door2 = this.physics.add.sprite(400,100,'box').setScale(0.1,0.1).setOrigin(0,0);
		this.door3 = this.physics.add.sprite(400,1095,'box').setScale(0.1,0.1).setOrigin(0,0);

        this.doors = this.physics.add.group();
        this.doors2_l = this.doors.create(337,35,'door_locked').setOrigin(0,0).setScale(3.96,3.9);

		this.walls = this.physics.add.staticGroup();
		this.walls.create(0,0,'box').setOrigin(0,0).setScale(5.25,100).refreshBody();
		this.walls.create(695,0,'box').setOrigin(0,0).setScale(5.25,100).refreshBody();
		this.walls.create(0,0,'box').setOrigin(0,0).setScale(37.5,6).refreshBody();
        this.walls.create(0,1100,'box').setOrigin(0,0).setScale(37.5,6.2).refreshBody();

        this.void = this.physics.add.staticGroup();
        this.void.create(230,90,'box').setOrigin(0,0).setScale(7,70).refreshBody();//bordure player
        this.void.create(465,90,'box').setOrigin(0,0).setScale(9,70).refreshBody();
        this.void.create(50,100,'box').setOrigin(0,0).setScale(12,5).refreshBody();//bordures latérales droites
        this.void.create(50,380,'box').setOrigin(0,0).setScale(12,9.5).refreshBody();
        this.void.create(50,665,'box').setOrigin(0,0).setScale(12,9.5).refreshBody();
        this.void.create(50,950,'box').setOrigin(0,0).setScale(12,9.5).refreshBody();
        this.void.create(500,100,'box').setOrigin(0,0).setScale(12,9.25).refreshBody();//bordures latérales gauches
        this.void.create(500,380,'box').setOrigin(0,0).setScale(12,9.5).refreshBody();
        this.void.create(500,665,'box').setOrigin(0,0).setScale(12,9.5).refreshBody();
        this.void.create(500,950,'box').setOrigin(0,0).setScale(12,9.5).refreshBody();
        this.void.create(190,380,'box').setOrigin(0,0).setScale(2,50).refreshBody();//special

        this.bloc = this.physics.add.group();
        this.bloc.create(433, 250, 'bloc').setScale(3.96,3.9).setImmovable(true);
        this.bloc.create(373, 250, 'bloc').setScale(3.96,3.9).setImmovable(true);
        this.bloc.create(433, 450, 'bloc').setScale(3.96,3.9).setImmovable(true);
        this.bloc.create(373, 450, 'bloc').setScale(3.96,3.9).setImmovable(true);
        this.bloc.create(433, 650, 'bloc').setScale(3.96,3.9).setImmovable(true);
        this.bloc.create(373, 650, 'bloc').setScale(3.96,3.9).setImmovable(true);
        this.bloc.create(433, 850, 'bloc').setScale(3.96,3.9).setImmovable(true);
        this.bloc.create(373, 850, 'bloc').setScale(3.96,3.9).setImmovable(true);

        if (room8_2 == 0) {
            this.chest = this.physics.add.sprite(170, 200, "coffre").setScale(3.96,3.9).setImmovable(true);
        }

        this.heart = this.physics.add.staticGroup();
        this.cle = this.physics.add.staticGroup();
        this.room = 0;

        this.enemy2 = this.physics.add.group();
        this.enemy2_1 = this.enemy2.create(650, 300, 'enemy_2').setScale(3.96,3.9).setSize(15,15).setOffset(3,0);//.setVelocity(100,0).setBounce(1);
        this.enemy2_2 = this.enemy2.create(650, 600, 'enemy_2').setScale(3.96,3.9).setSize(15,15).setOffset(3,0);//.setVelocity(100,0).setBounce(1);
        this.enemy2_3 = this.enemy2.create(650, 880, 'enemy_2').setScale(3.96,3.9).setSize(15,15).setOffset(3,0);//.setVelocity(100,0).setBounce(1);
        this.enemy2_4 = this.enemy2.create(140, 600, 'enemy_2').setScale(3.96,3.9).setSize(15,15).setOffset(3,0);//.setVelocity(100,0).setBounce(1);
        this.enemy2_5 = this.enemy2.create(140, 880, 'enemy_2').setScale(3.96,3.9).setSize(15,15).setOffset(3,0);//.setVelocity(100,0).setBounce(1);
        this.fireBall = this.physics.add.group();

        sphere = this.physics.add.sprite(-100,-100,'circle').setScale(3.96,3.9).setCircle(28).setAlpha(0);
        box = this.physics.add.sprite(-100,-100,'box').setOrigin(2,0.5).setScale(3.96,3.9);
        this.teiwaz = this.physics.add.staticGroup();
        this.player = this.physics.add.sprite(-100,-100,'player_idle').setScale(3.96,3.9).setSize(11,6).setOffset(2, 13).setOrigin(0.5,0.5);
        atk = 0;
        hold = 0;

        this.hud_x = 25;
        for (var i = 0; i < pv_max/2; i++) {
            this.add.image(this.hud_x,25,'coeurE').setScale(3.96,3.9).setOrigin(0,0).setScrollFactor(0);
            this.hud_x += 35;
        }
        this.h1 = this.add.image(25,25,'coeurH').setScale(3.96,3.9).setOrigin(0,0).setScrollFactor(0);
        this.f1 = this.add.image(25,25,'coeurF').setScale(3.96,3.9).setOrigin(0,0).setScrollFactor(0);
        this.h2 = this.add.image(60,25,'coeurH').setScale(3.96,3.9).setOrigin(0,0).setScrollFactor(0);
        this.f2 = this.add.image(60,25,'coeurF').setScale(3.96,3.9).setOrigin(0,0).setScrollFactor(0);
        this.h3 = this.add.image(95,25,'coeurH').setScale(3.96,3.9).setOrigin(0,0).setScrollFactor(0);
        this.f3 = this.add.image(95,25,'coeurF').setScale(3.96,3.9).setOrigin(0,0).setScrollFactor(0);
        this.c = this.add.image(145,20,'key_icon').setScale(2.96,2.9).setOrigin(0,0).setScrollFactor(0);
        this.ct = this.add.text(185, 20, "x 0").setScale(2,2).setScrollFactor(0);
        if (bossKey == 1) {this.cb = this.add.image(260,18,'boss_key_icon').setScale(2.96,2.9).setOrigin(0,0).setScrollFactor(0); };

        this.runeHud1 = this.add.image(this.player.x, this.player.y + 100, 'runeBox').setScale(3.96,3.9);
        this.runeHud2 = this.add.image(this.player.x + 75, this.player.y - 75, 'runeBox').setScale(3.96,3.9);
        this.runeHud3 = this.add.image(this.player.x + 100, this.player.y, 'runeBox').setScale(3.96,3.9);
        this.runeHud4 = this.add.image(this.player.x + 75, this.player.y + 75, 'runeBox').setScale(3.96,3.9);
        this.runeHud5 = this.add.image(this.player.x, this.player.y - 100, 'runeBox').setScale(3.96,3.9);
        this.runeHud6 = this.add.image(this.player.x - 75, this.player.y + 75, 'runeBox').setScale(3.96,3.9);
        this.runeHud7 = this.add.image(this.player.x - 100, this.player.y, 'runeBox').setScale(3.96,3.9);
        this.runeHud8 = this.add.image(this.player.x - 75, this.player.y - 75, 'runeBox').setScale(3.96,3.9);
        this.runeSelect = this.add.image(this.player.x - 75, this.player.y + 75, 'runeSelect').setScale(3.96,3.9);

        this.blackScreen = this.add.image(-100, -100, 'bloc').setOrigin(0,0).setScale(100,200).setTint(0x000000).setAlpha(0);
        this.playerGhost = this.physics.add.sprite(-100,-100,'box').setScale(3.96,3.9).setSize(11,6).setOffset(2, 13).setOrigin(0.5,0.5).setBounce(1);

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
        this.ennemis2 = this.anims.create({
            key:'ennemis2',
            frames: this.anims.generateFrameNumbers('enemy_2', {start: 0, end: 1}),
            frameRate: 4,
            repeat: -1
        });
        this.enemyFire = this.anims.create({
            key:'enemyFire',
            frames: this.anims.generateFrameNumbers('enemy_2_fire', {start: 0, end: 2}),
            frameRate: 4,
            repeat: -1
        });
        this.ded = this.anims.create({
            key:'ded',
            frames: this.anims.generateFrameNumbers('player_dies', {start: 0, end: 5}),
            frameRate: 4,
            repeat: 1
        });
        this.halo = this.anims.create({
            key:'halo',
            frames: this.anims.generateFrameNumbers('halo', {start: 0, end: 5}),
            frameRate: 10,
            repeat: 1
        });

		this.physics.add.collider(this.player, this.void);
        this.physics.add.collider(this.enemy2, this.void);
        this.physics.add.collider(this.enemy2, this.walls);
        this.physics.add.collider(this.enemy2, this.enemy2);
        this.physics.add.collider(this.player, this.walls);
        this.physics.add.collider(this.fireBall, this.bloc, ballColl, null, this);
        this.physics.add.collider(this.player, this.enemy2, getReckt, null, this);
        this.physics.add.collider(this.player, this.bloc, collBloc, null, this);
        this.physics.add.collider(this.bloc, this.enemy2, collBlocEnemy, null, this);
        this.physics.add.collider(this.bloc, this.walls, collBlocWall, null, this);
        this.physics.add.overlap(this.player, this.cle, keyPick, null, this);
        this.physics.add.overlap(this.player, this.door1, porte1, null, this);
        this.physics.add.overlap(this.player, this.door2, porte2, null, this);
        this.physics.add.overlap(this.player, this.door3, porte3, null, this);
        this.physics.add.overlap(sphere, this.bloc, jera, null, this);
        this.physics.add.overlap(this.player, this.fireBall, ballHit, null, this);
        this.physics.add.overlap(this.player, this.heart, heartPick, null, this);
        this.physics.add.overlap(this.enemy2, this.teiwaz, tue, null, this);

        enemyBrain(this.enemy2_1, this, this.fireBall, this.player);
        enemyBrain(this.enemy2_2, this, this.fireBall, this.player);
        enemyBrain(this.enemy2_3, this, this.fireBall, this.player);
        enemyBrain(this.enemy2_4, this, this.fireBall, this.player);
        enemyBrain(this.enemy2_5, this, this.fireBall, this.player);

        function porte1 (player,door){
			this.scene.start("salle14");
		}
        function porte2 (player,door){
            if (lock8 == 0) {
                this.scene.start("salle9");
            }else if ((key > 0) && (lock8 == 1)){
                key -= 1;
                this.doors2_l.anims.play('sesame',false);
            }
        }
        function porte3 (player,door){
            this.scene.start("salle7");
        }
	}

	update() {
        lock8 = doorOpen(this.doors2_l,lock8, this);
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

		this.u = pad(this.player, box, this.up, this.down, this.side, this.idle);
        if (buttonPressed == 4) {
            this.physics.world.timeScale = 6;
        }else{
            this.physics.world.timeScale = 1;
        }
        heart(this.h1,this.f1,this.h2,this.f2,this.h3,this.f3);
        rune(this.runeHud1, this.runeHud2, this.runeHud3, this.runeHud4, this.runeHud5, this.runeHud6, this.runeHud7, this.runeHud8, this.runeSelect, this.u, this.player);
        throwBloc(this.player, blocGrab, this);
        teiwaz(this.player, this.atk_up, this.atk_down, this.atk_side, this.teiwaz, this);
        endAtk(this.player, this, this.idle);
        enemySprite(this.enemy2_1, this.ennemis2, this.enemyFire, this.fireBall, this.player);
        enemySprite(this.enemy2_2, this.ennemis2, this.enemyFire, this.fireBall, this.player);
        enemySprite(this.enemy2_3, this.ennemis2, this.enemyFire, this.fireBall, this.player);
        enemySprite(this.enemy2_4, this.ennemis2, this.enemyFire, this.fireBall, this.player);
        enemySprite(this.enemy2_5, this.ennemis2, this.enemyFire, this.fireBall, this.player);
        resetReckt(this, this.player, mechant);
        deathScreen(this.blackScreen, this.player, this.playerGhost, this.ded, this);
        halo(this);
        updateText(this.ct);
        fireBoule = this.fireball;
        sphereAnim = this.halo;
        sphere.setPosition(this.player.x, this.player.y);
        if (hold == 1) {
            box.setPosition(this.player.x, this.player.y);
        }
        if (count == 5) {
            if ((this.room == 0) && (room8_1 == 0)) {
                this.cle.create(400, 350, 'key').setScale(3.96,3.9).refreshBody();
                this.room = 8;
            }
            count = 0;
        }
        if ((buttonPressed == 20) && (room8_2 == 0) && (this.player.x < 270) && (this.player.x > 70) && (this.player.y < 300) && (this.player.y > 100)) {
            this.chest.disableBody(true, true);
            this.heart.create(170,200,'coeurI').setScale(3.96,3.9).refreshBody();
            room8_2 = 1;
        }
	}
}

