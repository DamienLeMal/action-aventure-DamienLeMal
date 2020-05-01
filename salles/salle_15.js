class salle_15 extends Phaser.Scene {
	constructor(){
		super("salle15");
	}

	create() {
		this.background = this.physics.add.sprite(0,0,'salle6').setScale(3.96,3.9).setOrigin(0,0);

		this.doors = this.physics.add.group();
        this.doors1 = this.doors.create(467,565,'door_closed').setOrigin(0,0).setScale(3.96,3.9).setAngle(-180);
		
		this.walls = this.physics.add.staticGroup();
		this.walls.create(295,0,'box').setOrigin(0,0).setScale(13,13).refreshBody();
        this.walls.create(0,0,'box').setOrigin(0,0).setScale(5.25,37.5).refreshBody();
        this.walls.create(720,0,'box').setOrigin(0,0).setScale(5.25,37.5).refreshBody();
        this.walls.create(0,0,'box').setOrigin(0,0).setScale(50,6).refreshBody();
        this.walls.create(0,500,'box').setOrigin(0,0).setScale(50,6.2).refreshBody();

        this.blocP = this.physics.add.staticGroup();
        this.blocP.create(135, 130, 'bloc_push').setScale(3.96,3.9).setSize(60,60).setOffset(-22);
        this.blocP.create(195, 130, 'bloc_push').setScale(3.96,3.9).setSize(60,60).setOffset(-22);
        this.blocP.create(135, 190, 'bloc_push').setScale(3.96,3.9).setSize(60,60).setOffset(-22);
        this.blocP.create(665, 130, 'bloc_push').setScale(3.96,3.9).setSize(60,60).setOffset(-22);
        this.blocP.create(605, 130, 'bloc_push').setScale(3.96,3.9).setSize(60,60).setOffset(-22);
        this.blocP.create(665, 190, 'bloc_push').setScale(3.96,3.9).setSize(60,60).setOffset(-22);

        this.heart = this.physics.add.staticGroup();

        this.boss_halo1 = this.physics.add.sprite(400, 150, 'boss_halo1').setScale(3.96,3.9).setImmovable(true);
        this.boss = this.physics.add.sprite(400, 200, 'boss_idle').setScale(3.96,3.9).setImmovable(true);
        this.boss_halo2 = this.physics.add.sprite(400, 225, 'boss_halo2').setScale(3.96,3.9).setImmovable(true);
        this.canon = this.physics.add.group();
        this.canon1 = this.canon.create(200,200,'boss_canon').setScale(3.96,3.9).setImmovable(true);
        this.canon2 = this.canon.create(400,280,'boss_canon').setScale(3.96,3.9).setImmovable(true);
        this.canon3 = this.canon.create(600,200,'boss_canon').setScale(3.96,3.9).setImmovable(true);

        this.fireball = this.physics.add.group();
        this.fireballP = this.physics.add.group();

        this.stun = 0;
        this.getUp = 0;
        //boss actions
        this.compteCanon = 3;
        this.nbrCanon = [1, 1, 1, 0];
        this.delais = 1500;
        this.death = 1;

        sphere = this.physics.add.sprite(-100,-100,'circle').setScale(3.96,3.9).setCircle(28).setAlpha(0);
        box = this.physics.add.sprite(-100,-100,'box').setOrigin(2,0.5).setScale(3.96,3.9);
        this.teiwaz = this.physics.add.staticGroup();
        this.player = this.physics.add.sprite(-100,-100,'player_idle').setScale(3.96,3.9).setSize(11,6).setOffset(2, 13).setOrigin(0.5,0.5).setDepth(10);
        atk = 0;
        hold = 0;

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

        this.blackScreen = this.add.image(-100, -100, 'bloc').setOrigin(0,0).setScale(100,100).setTint(0x000000).setAlpha(0).setDepth(9);
        this.playerGhost = this.physics.add.sprite(-100,-100,'box').setScale(3.96,3.9).setSize(11,6).setOffset(2, 13).setOrigin(0.5,0.5).setBounce(1).setDepth(10);

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
        this.explosion = this.anims.create({
            key:'explosion',
            frames: this.anims.generateFrameNumbers('bloc_explosion', {start: 0, end: 4}),
            frameRate: 15,
            repeat: -1
        });

        this.physics.add.collider(this.player, this.walls);
        this.physics.add.collider(this.player, this.blocP);
        this.physics.add.collider(this.player, this.boss);
        this.physics.add.overlap(this.fireball, this.canon1, canonRekt1, null, this);
        this.physics.add.overlap(this.fireball, this.canon2, canonRekt2, null, this);
        this.physics.add.overlap(this.fireball, this.canon3, canonRekt3, null, this);
        this.physics.add.overlap(this.player, this.heart, heartPick, null, this);

        this.physics.add.overlap(sphere, this.fireball, jera, null, this);
        this.physics.add.overlap(this.boss, this.teiwaz, atkBoss, null, this);
        this.physics.add.overlap(this.blocP, this.teiwaz, casse, null, this);

        function canonRekt1 (canon, fire) {
        	if ((fire.alpha != 1) && (this.stun == 0) && (this.nbrCanon[0] == 1)) {
        		this.sound.play('boss_hit');
        		fire.setVelocity(0,0);
        		if (fire.anims.getCurrentKey() != 'explosion') {
        		    fire.anims.play('explosion',false).setSize(20,20).setOffset(6, 6);
        		    this.sound.play('explosion');
        		}
        		if (fire.anims.currentFrame.index === 5) {
        		    canon.setAlpha(0);
        			fire.disableBody(true,true);
        			this.nbrCanon[0] = 0;
        			this.compteCanon -= 1;
        			this.stun = 1;
        			this.getUp = 0;
        		}
				this.recktTime = this.time.addEvent({ delay: 5000, callback: ()=>{ 
        		    this.stun = 0;
        		    canon.setAlpha(1);
        			this.nbrCanon[0] = 1;
        			this.compteCanon += 1;
        			this.recktTime.remove(false);
        		}, loop: false});
        	}
        }
        function canonRekt2 (canon, fire) {
        	if ((fire.alpha != 1) && (this.stun == 0) && (this.nbrCanon[1] == 1)) {
        		this.sound.play('boss_hit');
        		fire.setVelocity(0,0);
        		if (fire.anims.getCurrentKey() != 'explosion') {
        		    fire.anims.play('explosion',false).setSize(20,20).setOffset(6, 6);
        		    this.sound.play('explosion');
        		}
        		if (fire.anims.currentFrame.index === 5) {
        		    canon.setAlpha(0);
        			fire.disableBody(true,true);
        			this.nbrCanon[1] = 0;
        			this.compteCanon -= 1;
        			this.stun = 1;
        			this.getUp = 0;
        		}
				this.recktTime = this.time.addEvent({ delay: 5000, callback: ()=>{ 
        		    this.stun = 0;
        		    canon.setAlpha(1);
        			this.nbrCanon[1] = 1;
        			this.compteCanon += 1;
        			this.recktTime.remove(false);
        		}, loop: false});
        	}
        }
        function canonRekt3 (canon, fire) {
        	if ((fire.alpha != 1) && (this.stun == 0) && (this.nbrCanon[2] == 1)) {
        		this.sound.play('boss_hit');
        		fire.setVelocity(0,0);
        		if (fire.anims.getCurrentKey() != 'explosion') {
        		    fire.anims.play('explosion',false).setSize(20,20).setOffset(6, 6);
        		    this.sound.play('explosion');
        		}
        		if (fire.anims.currentFrame.index === 5) {
        		    canon.setAlpha(0);
        			fire.disableBody(true,true);
        			this.nbrCanon[2] = 0;
        			this.compteCanon -= 1;
        			this.stun = 1;
        			this.getUp = 0;
        		}
				this.recktTime = this.time.addEvent({ delay: 5000, callback: ()=>{ 
        		    this.stun = 0;
        		    canon.setAlpha(1);
        			this.nbrCanon[2] = 1;
        			this.compteCanon += 1;
        			this.recktTime.remove(false);
        		}, loop: false});
        	}
        }
        this.count = 0;
        function atkBoss (teiwaz, boss) {
        	if (this.compteCanon > 0) {
        		this.sound.play('boss_hit');
        		this.stun = 0;
            	this.delais -= 29;
            	this.recktTime.remove(false);
            }else{
            	this.sound.play('boss_dies');
            	this.recktTime.remove(false);
            	this.death = 1;
            }
        }

        this.time.addEvent({ delay: 1000, callback: ()=>{ 
            if (this.boss_flotte == 0) {
                this.boss_flotte = 1;
            }else{
                this.boss_flotte = 0;
            }
        }, loop: true});
        this.canonTime = this.time.addEvent({ delay: this.delais, callback: ()=>{ 
            var rand = 3;
            while ((this.nbrCanon[rand] != 1) && (this.compteCanon != 0)) {
            	rand = Phaser.Math.RND.between(0,2);
            }
            var rand2 = Phaser.Math.RND.between(0,8);
            switch (rand) {
            	case 0 :
            		if (rand2 == 8) {
						this.fireball.create(this.canon1.x, this.canon1.y, "boss_fire").setVelocity((this.player.x - this.canon1.x)/2, (this.player.y - this.canon1.y)/2).setScale(3.96,3.9);
            		} else{
            			this.fireballP.create(this.canon1.x, this.canon1.y, "boss_fireP").setVelocity((this.player.x - this.canon1.x)/2, (this.player.y - this.canon1.y)/2).setScale(3.96,3.9);
            		}
            		break;
            	case 1 :
            		if (rand2 == 8) {
						this.fireball.create(this.canon2.x, this.canon2.y, "boss_fire").setVelocity((this.player.x - this.canon2.x)/2, (this.player.y - this.canon2.y)/2).setScale(3.96,3.9);
            		} else{
            			this.fireballP.create(this.canon2.x, this.canon2.y, "boss_fireP").setVelocity((this.player.x - this.canon2.x)/2, (this.player.y - this.canon2.y)/2).setScale(3.96,3.9);
            		}
            		break;
            	case 2 :
            		if (rand2 == 8) {
						this.fireball.create(this.canon3.x, this.canon3.y, "boss_fire").setVelocity((this.player.x - this.canon3.x)/2, (this.player.y - this.canon3.y)/2).setScale(3.96,3.9);
            		} else{
            			this.fireballP.create(this.canon3.x, this.canon3.y, "boss_fireP").setVelocity((this.player.x - this.canon3.x)/2, (this.player.y - this.canon3.y)/2).setScale(3.96,3.9);
            		}
            		break;
            }
        }, loop: true});
	}

	update() {
		this.canonTime.delay = this.delais;
		if (this.stun == 0 && this.getUp == 1) {
			this.canonTime.paused = false;
			if ((this.boss_flotte == 0) && (this.boss.body.velocity.y < 15)) {
        	    this.boss.body.velocity.y += 1;
        	    this.boss_halo1.body.velocity.y -= 1;
        	    this.boss_halo2.body.velocity.y -= 1;
        	    this.canon1.body.velocity.y -= 1;
        	    this.canon2.body.velocity.y -= 1;
        	    this.canon3.body.velocity.y -= 1;
        	}else if (this.boss.body.velocity.y > -15){
        	    this.boss.body.velocity.y -= 1;
        	    this.boss_halo1.body.velocity.y += 1;
        	    this.boss_halo2.body.velocity.y += 1;
        	    this.canon1.body.velocity.y += 1;
        	    this.canon2.body.velocity.y += 1;
        	    this.canon3.body.velocity.y += 1;
        	}
        }else{
        	this.canonTime.paused = true;
        	if (this.stun == 1 && this.getUp == 0) {
        		this.boss.setTexture('boss_stun');
        		if (this.boss.y < 250) {
        			this.boss.body.velocity.y += 1;
        		    this.boss_halo1.body.velocity.y -= 1.5;
        		    this.boss_halo2.body.velocity.y -= 1.5;
        		    this.canon1.body.velocity.y -= 1.5;
        		    this.canon2.body.velocity.y -= 1.5;
        		    this.canon3.body.velocity.y -= 1.5;
        		}else{
        			this.boss.body.velocity.y = 0;
        			this.boss_halo1.body.velocity.y = 0;
        		    this.boss_halo2.body.velocity.y = 0;
        		    this.canon1.body.velocity.y = 0;
        		    this.canon2.body.velocity.y = 0;
        		    this.canon3.body.velocity.y = 0;
        		}
        	}else if (this.stun == 0 && this.getUp == 0) {
        		this.boss.setTexture('boss_idle');
        		if (this.boss.y > 200) {
        			this.boss.body.velocity.y -= 1;
        		    this.boss_halo1.body.velocity.y += 1.5;
        		    this.boss_halo2.body.velocity.y += 1.5;
        		    this.canon1.body.velocity.y += 1.5;
        		    this.canon2.body.velocity.y += 1.5;
        		    this.canon3.body.velocity.y += 1.5;
        		}else{
        			this.boss.body.velocity.y = 0;
        			this.boss_halo1.body.velocity.y = 0;
        		    this.boss_halo2.body.velocity.y = 0;
        		    this.canon1.body.velocity.y = 0;
        		    this.canon2.body.velocity.y = 0;
        		    this.canon3.body.velocity.y = 0;
        		    this.getUp = 1;
        		}
        	}
        }

		switch (lastRoom) {
            case 9 :
                this.player.x = 400;
                this.player.y = 455;
                break;
            case 0 :
                this.player.x = 400;
                this.player.y = 455;
                break;
        }
        lastRoom = 15;

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

        canonOrientation(this.canon1, this.player, this.stun);
        canonOrientation(this.canon2, this.player, this.stun);
        canonOrientation(this.canon3, this.player, this.stun);

        sphereAnim = this.halo;
        sphere.setPosition(this.player.x, this.player.y);
        if (hold == 1) {
            box.setPosition(this.player.x, this.player.y);
        }
        if (this.death == 1) {
        	if (this.blackScreen.alpha < 1) {
            	this.blackScreen.alpha += 0.01;
        	}else{
        		this.add.text(250, 200, "YOU WIN !", { font: '64px Arial' });
        	}
        }
	}
}

