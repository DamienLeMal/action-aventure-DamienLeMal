class salle_10 extends Phaser.Scene {
	constructor(){
		super("salle10");
	}

	create() {
		this.background = this.physics.add.sprite(0,0,'salle10').setScale(3.96,3.9).setOrigin(0,0);
		this.door1 = this.physics.add.sprite(85,300,'box').setScale(0.1,0.1).setOrigin(0,0);
		this.door2 = this.physics.add.sprite(715,300,'box').setScale(0.1,0.1).setOrigin(0,0);

        this.doors = this.physics.add.group();
        this.doors1 = this.doors.create(40,368,'door_closed').setOrigin(0,0).setScale(3.96,3.9).setAngle(-90);
        this.doors2 = this.doors.create(756,238,'door_closed').setOrigin(0,0).setScale(3.96,3.9).setAngle(90);
        this.checkClosedDoors = 1;

		this.walls = this.physics.add.staticGroup();
        this.walls.create(0,0,'box').setOrigin(0,0).setScale(5.25,37.5).refreshBody();
        this.walls.create(720,0,'box').setOrigin(0,0).setScale(5.25,37.5).refreshBody();
        this.walls.create(0,0,'box').setOrigin(0,0).setScale(50,6).refreshBody();
        this.walls.create(0,500,'box').setOrigin(0,0).setScale(50,6.2).refreshBody();

        this.blocP = this.physics.add.staticGroup();
        this.blocP.create(370, 240, 'bloc_push').setScale(3.96,3.9).setSize(60,60).setOffset(-22);
        this.blocP.create(370, 300, 'bloc_push').setScale(3.96,3.9).setSize(60,60).setOffset(-22);
        this.blocP.create(370, 360, 'bloc_push').setScale(3.96,3.9).setSize(60,60).setOffset(-22);

        this.pot = this.physics.add.group();
        this.pot.create(120,120,'pot').setScale(3,3).setImmovable(true);
        this.pot.create(680,120,'pot').setScale(3,3).setImmovable(true);
        this.pot.create(120,480,'pot').setScale(3,3).setImmovable(true);
        this.pot.create(680,480,'pot').setScale(3,3).setImmovable(true);

        this.heart = this.physics.add.staticGroup();
        this.cle = this.physics.add.staticGroup();
        this.room = 0;

        this.tortue = this.physics.add.group();
        this.tortue1 = this.tortue.create(200, 450, 'enemy_turtle').setScale(3.96,3.9).setVelocity(100,0).setBounce(1);
        this.tortue2 = this.tortue.create(200, 150, 'enemy_turtle').setScale(3.96,3.9).setVelocity(100,0).setBounce(1);
        this.tortue3 = this.tortue.create(500, 150, 'enemy_turtle').setScale(3.96,3.9).setVelocity(100,0).setBounce(1);
        this.tortue4 = this.tortue.create(500, 450, 'enemy_turtle').setScale(3.96,3.9).setVelocity(100,0).setBounce(1);
        count = 0;

        sphere = this.physics.add.sprite(-100,-100,'circle').setScale(3.96,3.9).setCircle(28).setAlpha(0);
        box = this.physics.add.sprite(-100,-100,'box').setOrigin(2,0.5).setScale(3.96,3.9);
        this.teiwaz = this.physics.add.staticGroup();
        this.player = this.physics.add.sprite(-100,-100,'player_idle').setScale(3.96,3.9).setSize(11,6).setOffset(2, 13).setOrigin(0.5,0.5);
        atk = 0;

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
        this.c = this.add.image(150,15,'key').setScale(2.96,2.9).setOrigin(0,0);
        this.ct = this.add.text(185, 20, "x 0").setScale(2,2);
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

        this.blackScreen = this.add.image(-100, -100, 'bloc').setOrigin(0,0).setScale(100,100).setTint(0x000000).setAlpha(0);
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
        this.physics.add.collider(this.player, this.walls);
        this.physics.add.collider(this.player, this.blocP);
        this.physics.add.collider(this.player, this.tortue, getReckt, null, this);
        this.physics.add.overlap(this.player, this.door1, porte1, null, this);
        this.physics.add.overlap(this.player, this.door2, porte2, null, this);
        this.physics.add.overlap(this.player, this.fireBall, ballHit, null, this);
        this.physics.add.overlap(this.player, this.heart, heartPick, null, this);
        this.physics.add.overlap(this.player, this.cle, keyPick, null, this);
        this.physics.add.overlap(this.pot, this.teiwaz, casse, null, this);
        this.physics.add.overlap(this.tortue, this.teiwaz, tue, null, this);

        enemyBrain(this.tortue1, this);
        enemyBrain(this.tortue2, this);
        enemyBrain(this.tortue3, this);
        enemyBrain(this.tortue4, this);

        function porte1 (player,door){
            if (this.checkClosedDoors == 0) {
                this.scene.start("salle11");
            }
		}
        function porte2 (player,door){
            if (this.checkClosedDoors == 0) {
                this.scene.start("salle0");
            }
        }
	}

	update() {
        this.checkClosedDoors = doorOpen(this.doors1,this.checkClosedDoors, this);
        this.checkClosedDoors = doorOpen(this.doors2,this.checkClosedDoors, this);

		switch (lastRoom) {
            case 11 :
                this.player.x = 120;
                this.player.y = 300;
                break;
            case 0 :
                this.player.x = 680;
                this.player.y = 300;
                break;
        }
        lastRoom = 10;

        this.u = pad(this.player, box, this.up, this.down, this.side, this.idle);
        if (buttonPressed == 4) {
            this.physics.world.timeScale = 6;
        }else{
            this.physics.world.timeScale = 1;
        }
        heart(this.h1,this.f1,this.h2,this.f2,this.h3,this.f3);
        rune(this.runeHud1, this.runeHud2, this.runeHud3, this.runeHud4, this.runeHud5, this.runeHud6, this.runeHud7, this.runeHud8, this.runeSelect, this.u, this.player);
        teiwaz(this.player, this.atk_up, this.atk_down, this.atk_side, this.teiwaz, this);
        endAtk(this.player, this, this.idle);
        enemySprite(this.tortue1, this.turtle);
        enemySprite(this.tortue2, this.turtle);
        enemySprite(this.tortue3, this.turtle);
        enemySprite(this.tortue4, this.turtle);
        resetReckt(this, this.player, mechant);
        deathScreen(this.blackScreen, this.player, this.playerGhost, this.ded, this);
        halo(this);
        updateText(this.ct);

        sphereAnim = this.halo;
        sphere.setPosition(this.player.x, this.player.y);
        if (hold == 1) {
            box.setPosition(this.player.x, this.player.y);
        }
        if (count == 4) {
            this.doors1.anims.play('sesame',false);
            this.doors2.anims.play('sesame',false);
            if ((this.room == 0) && (room10 == 0)) {
                this.cle.create(150, 270, 'key').setScale(3.96,3.9).refreshBody();
                this.room = 10;
            }
            count = 0;
        }
	}
}