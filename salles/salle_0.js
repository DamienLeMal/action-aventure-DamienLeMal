class salle_0 extends Phaser.Scene {
	constructor(){
		super("salle0");
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
        this.load.image('salle12','assets/png/salles/spr_salle12.png');
        this.load.image('salle13','assets/png/salles/spr_salle13.png');
        this.load.image('salle14','assets/png/salles/spr_salle14.png');
        this.load.image('salle5-9-12','assets/png/salles/spr_salle5-9.png');
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
        this.load.image('door_boss','assets/png/item/spr_door_boss.png');
        this.load.image('enemy_fire','assets/png/enemies/spr_enemy_fire.png');
        this.load.image('key','assets/png/item/spr_key.png');
        this.load.image('boss_key','assets/png/item/spr_boss_key.png');
        this.load.image('key_icon','assets/png/item/spr_key_icon.png');
        this.load.image('boss_key_icon','assets/png/item/spr_boss_key_icon.png');
        this.load.image('pot','assets/png/item/spr_pot.png');
        this.load.image('coffre','assets/png/item/spr_chest_normal.png');
        this.load.image('coffreBoss','assets/png/item/spr_chest_boss.png');
        this.load.image('sign','assets/png/item/spr_sign.png');
        this.load.image('target','assets/png/item/spr_target.png');
        this.load.image('rune','assets/png/item/spr_rune_pickup.png');
        this.load.image('boss_canon','assets/png/enemies/spr_boss_canon.png');
        this.load.image('boss_fire','assets/png/enemies/spr_boss_fire.png');
        this.load.image('boss_fireP','assets/png/enemies/spr_boss_fireP.png');
        this.load.image('boss_halo1','assets/png/enemies/spr_boss_halo_back.png');
        this.load.image('boss_halo2','assets/png/enemies/spr_boss_halo_front.png');
        this.load.image('boss_idle','assets/png/enemies/spr_boss_idle.png');
        this.load.image('boss_stun','assets/png/enemies/spr_boss_stun.png');
        this.load.spritesheet('teleporteur','assets/png/item/spr_telep.png',{frameWidth: 15, frameHeight: 15});
        this.load.spritesheet('door_opening','assets/png/item/spr_door_opening.png',{frameWidth: 33, frameHeight: 18});
        this.load.spritesheet('bloc_explosion','assets/png/item/spr_bloc_explosion.png',{frameWidth: 30, frameHeight: 30});
        this.load.spritesheet('player_idle','assets/png/player/spr_player_idle.png',{frameWidth: 15, frameHeight: 20});
        this.load.spritesheet('player_up','assets/png/player/spr_player_walk_up.png',{frameWidth: 15, frameHeight: 20});
        this.load.spritesheet('player_down','assets/png/player/spr_player_walk_down.png',{frameWidth: 15, frameHeight: 20});
        this.load.spritesheet('player_side','assets/png/player/spr_player_walk_side.png',{frameWidth: 15, frameHeight: 20});
        this.load.spritesheet('player_attaque_up','assets/png/player/spr_player_attaque_up.png',{frameWidth: 27, frameHeight: 26});
        this.load.spritesheet('player_attaque_down','assets/png/player/spr_player_attaque_down.png',{frameWidth: 27, frameHeight: 26});
        this.load.spritesheet('player_attaque_side','assets/png/player/spr_player_attaque_side.png',{frameWidth: 27, frameHeight: 26});
        this.load.spritesheet('player_dies','assets/png/player/spr_player_death.png',{frameWidth: 20, frameHeight: 19});
        this.load.spritesheet('enemy_turtle','assets/png/enemies/spr_enemy_tortue.png',{frameWidth: 15, frameHeight: 14});
        this.load.spritesheet('enemy_2','assets/png/enemies/spr_enemy_2_move.png',{frameWidth: 21, frameHeight: 17});
        this.load.spritesheet('enemy_2_fire','assets/png/enemies/spr_enemy_2_fire.png',{frameWidth: 21, frameHeight: 18});
        this.load.spritesheet('halo','assets/png/item/spr_jera_halo.png',{frameWidth: 55, frameHeight: 55});
        this.load.audio('boss_dies','assets/wav/boss_dies.wav');
        this.load.audio('boss_hit','assets/wav/boss_hit.wav');///////////////////////////////
        this.load.audio('open_door','assets/wav/open_door.wav');/////////////////////////////
        this.load.audio('explosion','assets/wav/explosion.wav');/////////////////////////////
        this.load.audio('key_pickup','assets/wav/key_pickup.wav');/////////////
        this.load.audio('monster_hit','assets/wav/monster_hit.wav');/////////////////////////
        this.load.audio('player_hit','assets/wav/player_hit.wav');///////////////////////////
        this.load.audio('rune_pickup','assets/wav/rune_pickup.wav');/////////////////////////
        this.load.audio('sword','assets/wav/sword.wav');/////////////////////////////////////
        this.load.audio('telekinesis','assets/wav/telekinesis.wav');/////////////////////////
        this.load.audio('throw','assets/wav/throw.wav');/////////////////////////////////////
	}

	create() {
//Environnement
		this.background = this.physics.add.sprite(0,0,'salle0').setScale(3.96,3.9).setOrigin(0,0);
		this.door1 = this.physics.add.sprite(85,300,'box').setScale(0.1,0.1).setOrigin(0,0);
		this.door2 = this.physics.add.sprite(400,100,'box').setScale(0.1,0.1).setOrigin(0,0);
		this.door3 = this.physics.add.sprite(715,300,'box').setScale(0.1,0.1).setOrigin(0,0);

        this.doors = this.physics.add.group();
        this.doors1_l = this.doors.create(40,368,'door_locked').setOrigin(0,0).setScale(3.96,3.9).setAngle(-90);
        this.doors2_l = this.doors.create(337,35,'door_locked').setOrigin(0,0).setScale(3.96,3.9);

		this.walls = this.physics.add.staticGroup();
		this.walls.create(0,0,'box').setOrigin(0,0).setScale(5.25,37.5).refreshBody();
		this.walls.create(720,0,'box').setOrigin(0,0).setScale(5.25,37.5).refreshBody();
		this.walls.create(0,0,'box').setOrigin(0,0).setScale(50,6).refreshBody();
        this.walls.create(0,500,'box').setOrigin(0,0).setScale(50,6.2).refreshBody();

        this.blocP = this.physics.add.staticGroup();
        this.blocP.create(135, 130, 'bloc_push').setScale(3.96,3.9).setSize(60,60).setOffset(-22);
        this.blocP.create(665, 130, 'bloc_push').setScale(3.96,3.9).setSize(60,60).setOffset(-22);

        this.pot = this.physics.add.group();
        this.pot.create(135,470,'pot').setScale(3,3).setImmovable(true);
        this.pot.create(665,470,'pot').setScale(3,3).setImmovable(true);

        this.heart = this.physics.add.staticGroup();
//Player
		sphere = this.physics.add.sprite(-100,-100,'circle').setScale(3.96,3.9).setCircle(28).setAlpha(0);
		box = this.physics.add.sprite(-100,-100,'box').setOrigin(2,0.5).setScale(3.96,3.9);
        this.teiwaz = this.physics.add.staticGroup();
        this.player = this.physics.add.sprite(-100,-100,'player_idle').setScale(3.96,3.9).setSize(11,6).setOffset(2, 13).setOrigin(0.5,0.5);
        atk = 0;
        hold = 0;
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
        this.c = this.add.image(145,20,'key_icon').setScale(2.96,2.9).setOrigin(0,0);
        this.ct = this.add.text(185, 20, "x 0").setScale(2,2);
        this.add.text(200,450, "Utilisez le Joysticks pour vous deplacer");
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
//colliders & functions
        this.physics.add.collider(this.pot, this.player);
		this.physics.add.collider(this.player, this.walls);
        this.physics.add.collider(this.player, this.blocP);
		this.physics.add.overlap(this.player, this.door1, porte1, null, this);
        this.physics.add.overlap(this.player, this.door2, porte2, null, this);
        this.physics.add.overlap(this.player, this.door3, porte3, null, this);
        this.physics.add.overlap(this.player, this.heart, heartPick, null, this);
        this.physics.add.overlap(this.pot, this.teiwaz, casse, null, this);

		function porte1 (player, door){
            if (lock2 == 0) {
                this.scene.start("salle10");
            }else if ((key > 0) && (lock2 == 1)){
                key -= 1;
                this.doors1_l.anims.play('sesame',false);
            }
		}
        function porte2 (player, door){
            if (lock1 == 0) {
                this.scene.start("salle7");
            }else if ((key > 0) && (lock1 == 1)){
                key -= 1;
                this.doors2_l.anims.play('sesame',false);
            }
        }
        function porte3 (player, door){
            this.scene.start("salle1");
        }
    }

	update() {

if (buttonPressed === 9) {
    this.scene.start("salle14");
}
        lock1 = doorOpen(this.doors2_l,lock1, this);
        lock2 = doorOpen(this.doors1_l,lock2, this);

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
                if (telep == 0) {
                    this.player.x = 400;
                    this.player.y = 90;
                }else{
                    this.player.x = 400;
                    this.player.y = 300;
                }
                break;
            case 1 :
                this.player.x = 680;
                this.player.y = 300;
                break;
        }
        lastRoom = 0;

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
    }
}