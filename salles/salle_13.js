class salle_13 extends Phaser.Scene {
	constructor(){
		super("salle13");
	}

	init(data) {

	}

	create() {

		this.cameras.main.centerOn(400, 300);
		this.cam = this.cameras.main;
		this.x = 0;

		this.background = this.physics.add.sprite(0,0,'salle13').setScale(3.96,3.9).setOrigin(0,0);
		this.door1 = this.physics.add.sprite(1200,100,'box').setScale(0.1,0.1).setOrigin(0,0);
		this.door2 = this.physics.add.sprite(1200,495,'box').setScale(0.1,0.1).setOrigin(0,0);
		this.door3 = this.physics.add.sprite(400,495,'box').setScale(0.1,0.1).setOrigin(0,0);

        this.doors = this.physics.add.group();
        this.doors1 = this.doors.create(1137,35,'door_closed').setOrigin(0,0).setScale(3.96,3.9);
        this.doors1_l = this.doors.create(1137,35,'door_locked').setOrigin(0,0).setScale(3.96,3.9);
        this.doors2 = this.doors.create(1267,565,'door_closed').setOrigin(0,0).setScale(3.96,3.9).setAngle(-180);
        this.doors2_l = this.doors.create(1267,560,'door_locked').setOrigin(0,0).setScale(3.96,3.9).setAngle(-180);
        this.doors3 = this.doors.create(467,565,'door_closed').setOrigin(0,0).setScale(3.96,3.9).setAngle(-180);
        this.checkClosedDoors = 1;

		this.walls = this.physics.add.staticGroup();
		this.walls.create(0,0,'box').setOrigin(0,0).setScale(5.25,37.5).refreshBody();
		this.walls.create(1520,0,'box').setOrigin(0,0).setScale(5.25,37.5).refreshBody();
		this.walls.create(0,0,'box').setOrigin(0,0).setScale(100,6).refreshBody();
        this.walls.create(0,500,'box').setOrigin(0,0).setScale(100,6.2).refreshBody();

        this.bloc = this.physics.add.group();
        this.bloc.create(360, 180, 'bloc').setScale(3.96,3.9).setImmovable(true);
        this.bloc.create(540, 420, 'bloc').setScale(3.96,3.9).setImmovable(true);
        this.bloc.create(720, 180, 'bloc').setScale(3.96,3.9).setImmovable(true);
        this.bloc.create(900, 420, 'bloc').setScale(3.96,3.9).setImmovable(true);
        this.bloc.create(1080, 180, 'bloc').setScale(3.96,3.9).setImmovable(true);
        this.bloc.create(1260, 420, 'bloc').setScale(3.96,3.9).setImmovable(true);

        this.blocP = this.physics.add.staticGroup();
        this.blocP.create(300, 270, 'bloc_push').setScale(3.96,3.9).setSize(60,60).setOffset(-22);
        this.blocP.create(360, 270, 'bloc_push').setScale(3.96,3.9).setSize(60,60).setOffset(-22);
        this.blocP.create(420, 270, 'bloc_push').setScale(3.96,3.9).setSize(60,60).setOffset(-22);
        this.blocP.create(480, 270, 'bloc_push').setScale(3.96,3.9).setSize(60,60).setOffset(-22);
        this.blocP.create(540, 270, 'bloc_push').setScale(3.96,3.9).setSize(60,60).setOffset(-22);
        this.blocP.create(600, 270, 'bloc_push').setScale(3.96,3.9).setSize(60,60).setOffset(-22);
        this.blocP.create(660, 270, 'bloc_push').setScale(3.96,3.9).setSize(60,60).setOffset(-22);
        this.blocP.create(720, 270, 'bloc_push').setScale(3.96,3.9).setSize(60,60).setOffset(-22);
        this.blocP.create(780, 270, 'bloc_push').setScale(3.96,3.9).setSize(60,60).setOffset(-22);
        this.blocP.create(840, 270, 'bloc_push').setScale(3.96,3.9).setSize(60,60).setOffset(-22);
        this.blocP.create(900, 270, 'bloc_push').setScale(3.96,3.9).setSize(60,60).setOffset(-22);
        this.blocP.create(960, 270, 'bloc_push').setScale(3.96,3.9).setSize(60,60).setOffset(-22);
        this.blocP.create(1020, 270, 'bloc_push').setScale(3.96,3.9).setSize(60,60).setOffset(-22);
        this.blocP.create(1080, 270, 'bloc_push').setScale(3.96,3.9).setSize(60,60).setOffset(-22);
        this.blocP.create(1140, 270, 'bloc_push').setScale(3.96,3.9).setSize(60,60).setOffset(-22);
        this.blocP.create(1200, 270, 'bloc_push').setScale(3.96,3.9).setSize(60,60).setOffset(-22);
        this.blocP.create(1260, 270, 'bloc_push').setScale(3.96,3.9).setSize(60,60).setOffset(-22);
        this.blocP.create(1320, 270, 'bloc_push').setScale(3.96,3.9).setSize(60,60).setOffset(-22);
        this.blocP.create(300, 330, 'bloc_push').setScale(3.96,3.9).setSize(60,60).setOffset(-22);
        this.blocP.create(360, 330, 'bloc_push').setScale(3.96,3.9).setSize(60,60).setOffset(-22);
        this.blocP.create(420, 330, 'bloc_push').setScale(3.96,3.9).setSize(60,60).setOffset(-22);
        this.blocP.create(480, 330, 'bloc_push').setScale(3.96,3.9).setSize(60,60).setOffset(-22);
        this.blocP.create(540, 330, 'bloc_push').setScale(3.96,3.9).setSize(60,60).setOffset(-22);
        this.blocP.create(600, 330, 'bloc_push').setScale(3.96,3.9).setSize(60,60).setOffset(-22);
        this.blocP.create(660, 330, 'bloc_push').setScale(3.96,3.9).setSize(60,60).setOffset(-22);
        this.blocP.create(720, 330, 'bloc_push').setScale(3.96,3.9).setSize(60,60).setOffset(-22);
        this.blocP.create(780, 330, 'bloc_push').setScale(3.96,3.9).setSize(60,60).setOffset(-22);
        this.blocP.create(840, 330, 'bloc_push').setScale(3.96,3.9).setSize(60,60).setOffset(-22);
        this.blocP.create(900, 330, 'bloc_push').setScale(3.96,3.9).setSize(60,60).setOffset(-22);
        this.blocP.create(960, 330, 'bloc_push').setScale(3.96,3.9).setSize(60,60).setOffset(-22);
        this.blocP.create(1020, 330, 'bloc_push').setScale(3.96,3.9).setSize(60,60).setOffset(-22);
        this.blocP.create(1080, 330, 'bloc_push').setScale(3.96,3.9).setSize(60,60).setOffset(-22);
        this.blocP.create(1140, 330, 'bloc_push').setScale(3.96,3.9).setSize(60,60).setOffset(-22);
        this.blocP.create(1200, 330, 'bloc_push').setScale(3.96,3.9).setSize(60,60).setOffset(-22);
        this.blocP.create(1260, 330, 'bloc_push').setScale(3.96,3.9).setSize(60,60).setOffset(-22);
        this.blocP.create(1320, 330, 'bloc_push').setScale(3.96,3.9).setSize(60,60).setOffset(-22);

        this.pot = this.physics.add.group();
        this.pot.create(130,120,'pot').setScale(3,3).setImmovable(true);
        this.pot.create(130,480,'pot').setScale(3,3).setImmovable(true);
        this.pot.create(1470,120,'pot').setScale(3,3).setImmovable(true);
        this.pot.create(1470,480,'pot').setScale(3,3).setImmovable(true);

        this.heart = this.physics.add.staticGroup();
        this.cle = this.physics.add.staticGroup();
        this.chest = this.physics.add.staticGroup();

        this.tortue = this.physics.add.group();
        this.tortue1 = this.tortue.create(540, 180, 'enemy_turtle').setScale(3.96,3.9).setVelocity(100,0).setBounce(1);
        this.tortue2 = this.tortue.create(720, 420, 'enemy_turtle').setScale(3.96,3.9).setVelocity(100,0).setBounce(1);
        this.tortue3 = this.tortue.create(900, 180, 'enemy_turtle').setScale(3.96,3.9).setVelocity(100,0).setBounce(1);

        this.enemy2 = this.physics.add.group();
        this.enemy2_1 = this.enemy2.create(200, 300, 'enemy_2').setScale(3.96,3.9).setVelocity(100,0).setBounce(1);
        this.enemy2_2 = this.enemy2.create(1400, 300, 'enemy_2').setScale(3.96,3.9).setVelocity(100,0).setBounce(1);
        count = 0;

        this.fireBall = this.physics.add.group();
        this.fireBall.create(300, 200, 'enemy_fire').setScale(3.96,3.9).setVelocity(100,0).setBounce(1);

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

        this.blackScreen = this.add.image(-100, -100, 'bloc').setOrigin(0,0).setScale(200,100).setTint(0x000000).setAlpha(0);
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
        this.turtle = this.anims.create({
            key:'turtle',
            frames: this.anims.generateFrameNumbers('enemy_turtle', {start: 0, end: 1}),
            frameRate: 4,
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

		this.physics.add.collider(this.pot, this.tortue);
        this.physics.add.collider(this.pot, this.enemy2);
        this.physics.add.collider(this.pot, this.player);
        this.physics.add.collider(this.tortue, this.walls);
        this.physics.add.collider(this.tortue, this.blocP);
        this.physics.add.collider(this.tortue, this.tortue);
        this.physics.add.collider(this.enemy2, this.walls);
        this.physics.add.collider(this.enemy2, this.blocP);
        this.physics.add.collider(this.enemy2, this.tortue);
        this.physics.add.collider(this.enemy2, this.enemy2);
        this.physics.add.collider(this.player, this.walls);
        this.physics.add.collider(this.player, this.chest);
        this.physics.add.collider(this.player, this.blocP);
        this.physics.add.collider(this.fireBall, this.pot, ballColl, null, this);
        this.physics.add.collider(this.fireBall, this.bloc, ballColl, null, this);
        this.physics.add.collider(this.fireBall, this.blocP, ballColl, null, this);
        this.physics.add.collider(this.player, this.tortue, getReckt, null, this);
        this.physics.add.collider(this.player, this.enemy2, getReckt, null, this);
        this.physics.add.collider(this.player, this.bloc, collBloc, null, this);
        this.physics.add.collider(this.bloc, this.tortue, collBlocEnemy, null, this);
        this.physics.add.collider(this.bloc, this.enemy2, collBlocEnemy, null, this);
        this.physics.add.collider(this.bloc, this.walls, collBlocWall, null, this);
        this.physics.add.overlap(this.bloc, this.blocP, collBlocWall, null, this);
        this.physics.add.overlap(this.player, this.cle, keyPick, null, this);
        this.physics.add.overlap(this.player, this.door1, porte1, null, this);
        this.physics.add.overlap(this.player, this.door2, porte2, null, this);
        this.physics.add.overlap(this.player, this.door3, porte3, null, this);
        this.physics.add.overlap(sphere, this.bloc, jera, null, this);
        this.physics.add.overlap(this.player, this.fireBall, ballHit, null, this);
        this.physics.add.overlap(this.player, this.heart, heartPick, null, this);
        this.physics.add.overlap(this.pot, this.teiwaz, casse, null, this);
        this.physics.add.overlap(this.tortue, this.teiwaz, tue, null, this);
        this.physics.add.overlap(this.enemy2, this.teiwaz, tue, null, this);

        enemyBrain(this.tortue1, this);
        enemyBrain(this.tortue2, this);
        enemyBrain(this.tortue3, this);
        enemyBrain(this.enemy2_1, this, this.fireBall, this.player);
        enemyBrain(this.enemy2_2, this, this.fireBall, this.player);

        function porte1 (player,door){
            if (this.checkClosedDoors == 0) {
                if (lock7 == 0) {
                    this.scene.start("salle14");
                }else if ((key > 0) && (lock7 == 1)){
                    key -= 1;
                    this.doors1_l.anims.play('sesame',false);
                }
            }
		}
        function porte2 (player,door){
            if (this.checkClosedDoors == 0) {
                if (lock6 == 0) {
                    this.scene.start("salle7");
                }else if ((key > 0) && (lock6 == 1)){
                    key -= 1;
                    this.doors2_l.anims.play('sesame',false);
                }
            }
        }
        function porte3 (player,door){
            if (this.checkClosedDoors == 0) {
                this.scene.start("salle12");
            }
        }
        this.player.setPosition(200,200);
	}

	update() {

        lock6 = doorOpen(this.doors2_l,lock6, this);
        lock7 = doorOpen(this.doors1_l,lock7, this);
        this.checkClosedDoors = doorOpen(this.doors1,this.checkClosedDoors, this);
        this.checkClosedDoors = doorOpen(this.doors2,this.checkClosedDoors, this);
        this.checkClosedDoors = doorOpen(this.doors3,this.checkClosedDoors, this);

		if ((this.player.x > 400) &&(this.player.x < 1200)) {
			this.x = this.player.x;
		}
		this.cam.pan(this.x, 300, 0);

		switch (lastRoom) {
            case 14 :
                this.player.x = 1200;
                this.player.y = 90;
                this.x = 1200;
                break;
            case 7 :
                this.player.x = 1200;
                this.player.y = 455;
                this.x = 1200;
                break;
            case 12 :
                this.player.x = 400;
                this.player.y = 455;
                this.x = 400;
                break;
        }
        lastRoom = 13;

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
        enemySprite(this.tortue1, this.turtle);
        enemySprite(this.tortue2, this.turtle);
        enemySprite(this.tortue3, this.turtle);
        enemySprite(this.enemy2_1, this.ennemis2, this.enemyFire, this.fireBall, this.player);
        enemySprite(this.enemy2_2, this.ennemis2, this.enemyFire, this.fireBall, this.player);
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
            this.doors1.anims.play('sesame',false);
            if (room13 == 0) {
                this.chest1 = this.chest.create(1400,300,'coffre').setScale(3.96,3.9).refreshBody();
            }
            this.var = 1;
            count = 0;
        }
        if ((buttonPressed == 20) && (this.var == 1) && (room13 == 0) && (this.player.x < 1500) && (this.player.x > 1300) && (this.player.y < 400) && (this.player.y > 200)) {
            this.chest1.disableBody(true, true);
            this.cle.create(1400,300,'key').setScale(3.96,3.9).refreshBody();
            this.var = 0;
            room13 = 1;
        }
	}
}