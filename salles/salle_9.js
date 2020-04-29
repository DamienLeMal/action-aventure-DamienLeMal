class salle_9 extends Phaser.Scene {
	constructor(){
		super("salle9");
	}

	create() {
		this.background = this.physics.add.sprite(0,0,'salle5-9-12').setScale(3.96,3.9).setOrigin(0,0);
		this.door1 = this.physics.add.sprite(400,100,'box').setScale(0.1,0.1).setOrigin(0,0);
		this.door2 = this.physics.add.sprite(400,495,'box').setScale(0.1,0.1).setOrigin(0,0);

        this.doors = this.physics.add.group();
        this.doors1_l = this.doors.create(337,35,'door_locked').setOrigin(0,0).setScale(3.96,3.9);

		this.walls = this.physics.add.staticGroup();
        this.walls.create(0,0,'box').setOrigin(0,0).setScale(5.25,37.5).refreshBody();
        this.walls.create(720,0,'box').setOrigin(0,0).setScale(5.25,37.5).refreshBody();
        this.walls.create(0,0,'box').setOrigin(0,0).setScale(50,6).refreshBody();
        this.walls.create(0,500,'box').setOrigin(0,0).setScale(50,6.2).refreshBody();

        this.blocP = this.physics.add.staticGroup();
        this.blocP.create(135, 240, 'bloc_push').setScale(3.96,3.9).setSize(60,60).setOffset(-22);
        this.blocP.create(135, 300, 'bloc_push').setScale(3.96,3.9).setSize(60,60).setOffset(-22);
        this.blocP.create(135, 360, 'bloc_push').setScale(3.96,3.9).setSize(60,60).setOffset(-22);
        this.blocP.create(195, 300, 'bloc_push').setScale(3.96,3.9).setSize(60,60).setOffset(-22);
        this.blocP.create(665, 240, 'bloc_push').setScale(3.96,3.9).setSize(60,60).setOffset(-22);
        this.blocP.create(665, 300, 'bloc_push').setScale(3.96,3.9).setSize(60,60).setOffset(-22);
        this.blocP.create(665, 360, 'bloc_push').setScale(3.96,3.9).setSize(60,60).setOffset(-22);
        this.blocP.create(605, 300, 'bloc_push').setScale(3.96,3.9).setSize(60,60).setOffset(-22);

        this.pot = this.physics.add.group();
        this.pot.create(195,240,'pot').setScale(3,3).setImmovable(true);
        this.pot.create(255,300,'pot').setScale(3,3).setImmovable(true);
        this.pot.create(195,360,'pot').setScale(3,3).setImmovable(true);
        this.pot.create(135,180,'pot').setScale(3,3).setImmovable(true);
        this.pot.create(135,420,'pot').setScale(3,3).setImmovable(true);
        this.pot.create(605,240,'pot').setScale(3,3).setImmovable(true);
        this.pot.create(545,300,'pot').setScale(3,3).setImmovable(true);
        this.pot.create(605,360,'pot').setScale(3,3).setImmovable(true);
        this.pot.create(665,180,'pot').setScale(3,3).setImmovable(true);
        this.pot.create(665,420,'pot').setScale(3,3).setImmovable(true);

        if (room9 == 0) {
            this.chest = this.physics.add.sprite(400,300,'coffre').setScale(3.96,3.9).setImmovable(true);
        }

        this.heart = this.physics.add.staticGroup();

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
        this.c = this.add.image(145,20,'key_icon').setScale(2.96,2.9).setOrigin(0,0);
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

        this.physics.add.collider(this.pot, this.player);
        this.physics.add.collider(this.player, this.walls);
        this.physics.add.collider(this.player, this.blocP);
        this.physics.add.overlap(this.player, this.door1, porte1, null, this);
        this.physics.add.overlap(this.player, this.door2, porte2, null, this);
        this.physics.add.overlap(this.player, this.heart, heartPick, null, this);
        this.physics.add.overlap(this.pot, this.teiwaz, casse, null, this);

        function porte1 (player,door){
            if (lock9 == 0) {
                this.scene.start("salle15");
            }else if ((bossKey > 0) && (lock9 == 1)){
                bossKey -= 1;
                this.doors1_l.anims.play('sesame',false);
            }
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
        resetReckt(this, this.player, mechant);
        deathScreen(this.blackScreen, this.player, this.playerGhost, this.ded, this);
        halo(this);
        updateText(this.ct);

        sphereAnim = this.halo;
        sphere.setPosition(this.player.x, this.player.y);
        if (hold == 1) {
            box.setPosition(this.player.x, this.player.y);
        }
        if ((buttonPressed == 20) && (room9 == 0) && (this.player.x < 500) && (this.player.x > 300) && (this.player.y < 400) && (this.player.y > 200)) {
            this.chest.disableBody(true, true);
            this.heart.create(400,300,'coeurI').setScale(3.96,3.9).refreshBody();
            room9 = 1;
        }
	}
}