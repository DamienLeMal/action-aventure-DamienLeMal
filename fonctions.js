function pad(player, box, up, down, side, idle) {
    var ret;
    var axis0;
    var axis1;
    var axis2;
    var axis3;
    var pad;
    var buttons;
    var button
    var axes;
    var axis;
    var pads = navigator.getGamepads();
    for (i = 0; this.i < pads.length; i++) {
        pad = pads[i];
        if (!pad) {
            continue;
        }
        this.buttons = '';
        for (b = 0; b < pad.buttons.length; b++) {
            button = pad.buttons[b];
            controller(player,-1,b,button.value);
        }
        axes = '';
        for (a = 2; a < pad.axes.length; a++) {
            axis = pad.axes[a];
            controller(player,a,-1,axis);
        }
        axis0 = pad.axes[0];
        axis1 = pad.axes[1];
        axis2 = pad.axes[2];
        axis3 = pad.axes[3];
        stick_x1 = axis0;
        stick_y1 = axis1;
        stick_x = axis2;
        stick_y = axis3;
        if ((atk != 1) && (take_hit != 1)) {
            player.setVelocity(axis0 * 200,axis1 * 200);
            if (axis0 < -0.2) {
                if ((axis1 > -0.2) && (axis1 < 0.2)) {
                    anim(player, side);
                    player.setFlipX(true).setOrigin(0.5,0.5).setOffset(2, 13);
                }
            }else if (axis0 > 0.2) {
                if ((axis1 > -0.2) && (axis1 < 0.2)) {
                    anim(player, side);
                    player.setFlipX(false).setOrigin(0.5,0.5).setOffset(2, 13);
                }
            }else{
                if (axis1 < -0.2) {
                    anim(player, up);
                    player.setOrigin(0.5,0.45).setOffset(2, 13);
                }else if (axis1 > 0.2) {
                    anim(player, down);
                    player.setOrigin(0.5,0.45).setOffset(2, 13);
                }else{
                    anim(player, idle);
                    player.setVelocity(0,0).setOrigin(0.5,0.5).setOffset(2, 13);
                }
            }
            if (buttonPressed == 4) {
                if (axis2 < -0.2) {
                    if (axis3 < -0.2) {
                        return 8;
                    }else if (axis3 > 0.2) {
                        return 6;
                    }else{
                        return 7;
                    }
                }else if (axis2 > 0.2) {
                    if (axis3 < -0.2) {
                        return 2;
                    }else if (axis3 > 0.2) {
                        return 4;
                    }else{
                        return 3;
                    }
                }else{
                    if (axis3 < -0.2) {
                        return 1;
                    }else if (axis3 > 0.2) {
                        return 5;
                    }else{
                        return 0;
                    }
                }
            }
        }
    }
    if (hold == 1) {
        if ((axis2 < -0.2) || (axis2 > 0.2) || (axis3 < -0.2) || (axis3 > 0.2)) {
            box.rotation = Phaser.Math.Angle.Between(0,0,axis2 * -3,axis3 * -3);
            rotation = Phaser.Math.Angle.Between(0,0,axis2 * -3,axis3 * -3);
        }
    }
}
function controller (player, a, b, value) {
    var speedX = 0;
    var speedY = 0;
    if (b != -1) {
        switch (b) {
            case 0 :
                if (value != 0) {
                    buttonPressed = 20;
                }else if (buttonPressed == 20) {
                    buttonPressed = 0;
                }
                break;
            case 1 :
                if (value != 0) {
                    buttonPressed = 1;
                }else if (buttonPressed == 1) {
                    buttonPressed = 0;
                }
                break;
            case 4 :
                if (value != 0) {
                    buttonPressed = 4;
                }else if (buttonPressed == 4) {
                    buttonPressed = 0;
                }
                break;
            case 5 :
                if (value != 0) {
                    sphere.alpha = 0;
                    buttonPressed = 5;
                }else if (buttonPressed == 5) {
                    buttonPressed = 0;
                    sphere.alpha = 0;
                }else{
                    sphere.alpha = 0;
                }
                break;
            case 9 :
                if (value != 0) {
                    buttonPressed = 9;
                }else if (buttonPressed == 9) {
                    buttonPressed = 0;
                }
                break;
        }
    }
}
function heart(f1,h1,f2,h2,f3,h3) {
    switch (pv) {
        case 0:
            f1.alpha = 0;
            h1.alpha = 0;
            f2.alpha = 0;
            h2.alpha = 0;
            f3.alpha = 0;
            h3.alpha = 0;
            break;
        case 1:
            f1.alpha = 1;
            h1.alpha = 0;
            f2.alpha = 0;
            h2.alpha = 0;
            f3.alpha = 0;
            h3.alpha = 0;
            break;
        case 2:
            f1.alpha = 1;
            h1.alpha = 1;
            f2.alpha = 0;
            h2.alpha = 0;
            f3.alpha = 0;
            h3.alpha = 0;
            break;
        case 3:
            f1.alpha = 1;
            h1.alpha = 1;
            f2.alpha = 1;
            h2.alpha = 0;
            f3.alpha = 0;
            h3.alpha = 0;
            break;
        case 4:
            f1.alpha = 1;
            h1.alpha = 1;
            f2.alpha = 1;
            h2.alpha = 1;
            f3.alpha = 0;
            h3.alpha = 0;
            break;
        case 5:
            f1.alpha = 1;
            h1.alpha = 1;
            f2.alpha = 1;
            h2.alpha = 1;
            f3.alpha = 1;
            h3.alpha = 0;
            break;
        case 6:
            f1.alpha = 1;
            h1.alpha = 1;
            f2.alpha = 1;
            h2.alpha = 1;
            f3.alpha = 1;
            h3.alpha = 1;
            break;
    }
}
function anim (player, anim){
    player.anims.play(anim,true);
}
function rune (r1, r2, r3, r4, r5, r6, r7, r8, rs, val, player) {
    if (buttonPressed == 4) {
        r1.setPosition(player.x, player.y - 100).setAlpha(1).setTexture('teiwaz');
        r2.setPosition(player.x + 75, player.y - 75).setAlpha(1);
        r3.setPosition(player.x + 100, player.y).setAlpha(1);
        r4.setPosition(player.x + 75, player.y + 75).setAlpha(1);
        r5.setPosition(player.x, player.y + 100).setAlpha(1);
        r6.setPosition(player.x - 75, player.y + 75).setAlpha(1);
        r7.setPosition(player.x - 100, player.y).setAlpha(1);
        r8.setPosition(player.x - 75, player.y - 75).setAlpha(1);
        rs.setAlpha(1);
        if (jeraUnlock == 1) {
            r2.setTexture('jera');
        }
        switch (val) {
            case 0 : val = compSelect; compHilight = val; break;
            case 1 : compSelect = val; compHilight = val; break;
            case 2 : if (jeraUnlock == 1) { compSelect = val }else{ compSelect = 0}; compHilight = val; break;
            case 3 : compSelect = val; compHilight = val; break;
            case 4 : compSelect = val; compHilight = val; break;
            case 5 : compSelect = val; compHilight = val; break;
            case 6 : compSelect = val; compHilight = val; break;
            case 7 : compSelect = val; compHilight = val; break;
            case 8 : compSelect = val; compHilight = val; break;
        }
        switch (compHilight) {
            case 1 : rs.setPosition(r1.x, r1.y); break;
            case 2 : rs.setPosition(r2.x, r2.y); break;
            case 3 : rs.setPosition(r3.x, r3.y); break;
            case 4 : rs.setPosition(r4.x, r4.y); break;
            case 5 : rs.setPosition(r5.x, r5.y); break;
            case 6 : rs.setPosition(r6.x, r6.y); break;
            case 7 : rs.setPosition(r7.x, r7.y); break;
            case 8 : rs.setPosition(r8.x, r8.y); break;
        }
    }else {
        r1.alpha = 0;
        r2.alpha = 0;
        r3.alpha = 0;
        r4.alpha = 0;
        r5.alpha = 0;
        r6.alpha = 0;
        r7.alpha = 0;
        r8.alpha = 0;
        rs.alpha = 0;
    }
}
function heartPick (player, coeur){
    coeur.disableBody(true,true);
    this.sound.play('key_pickup');
    pv += 2;
    if (pv > pv_max) {
        pv = pv_max;
    }
}
function keyPick (player, cle){
    cle.disableBody(true,true);
    this.sound.play('key_pickup');
    key += 1;
    switch(this.room) {
        case 1 : room1 = 1; break;
        case 4 : room4 = 1; break;
        case 5 : room5 = 1; break;
        case 7 : room7_1 = 1; break;
        case 8 : room8_1 = 1; break;
        case 10 : room10 = 1; break;
        case 12 : room12 = 1; break;
    }
}
function bossKeyPick (player, cle){
    cle.disableBody(true,true);
    this.sound.play('key_pickup');
    bossKey += 1;
    this.add.image(260,18,'boss_key_icon').setScale(2.96,2.9).setOrigin(0,0).setScrollFactor(0);
}
function jera (sphere, bloc) {
    if ((buttonPressed == 5) && (compSelect == 2) && (hold == 0)) {
        this.sound.play('telekinesis');
        bloc.setAlpha(0).setPosition(-100,-100);
        blocGrab = bloc;
        if (lastRoom != 15) {
            box.setTexture('bloc');
        }else{
            box.setTexture('boss_fire');
        }
        hold = 1;
    }
}
function throwBloc (player, bloc, cela) {
    if ((hold == 1) && (buttonPressed != 5)){
        hold = 0;
        box.setTexture('box');
        bloc.setAlpha(0.9).setPosition(stick_x*100 + player.x, stick_y*100 + player.y).setVelocity((bloc.x - player.x)*15, (bloc.y - player.y)*15);
        cela.sound.play('throw');
        bloc.rotation = rotation;
        minSpeed(bloc);
        jet = 1;
    }
}
function minSpeed (bloc) {
    if ((bloc.body.velocity.x +  bloc.body.velocity.y ) < 800) {
        bloc.setVelocity(bloc.body.velocity.x * 4, bloc.body.velocity.y * 4)
    }
}
function doorOpen (door, lock, cela) {
    if (lock == 0) {
        door.setAlpha(0);
        return 0;
    }else if (door.anims.getCurrentKey() === 'sesame') {
        cela.sound.play('open_door', {volume: 0.1});
        if (door.anims.currentFrame.index === 4) {
            door.disableBody(true,true);
            return 0;
        }
    }else {
        return 1;
    }
}
function teiwaz (player, atk_up, atk_down, atk_side, hit, cela) {
    if ((buttonPressed == 5) && (compSelect == 1) && (atk == 0)) {
        player.setVelocity(0,0);
        atk = 1;
        if ((player.anims.getCurrentKey() == 'down') || (player.anims.getCurrentKey() == 'idle')) {
            anim(player, atk_down);
            player.setOrigin(0.5,0.35).setOffset(8, 12);
            hitBox = 1;
        }
        if (player.anims.getCurrentKey() == 'up') {
            anim(player, atk_up);
            player.setOrigin(0.5,0.35).setOffset(8, 12);
            hitBox = 2;
        }
        if (player.anims.getCurrentKey() == 'side') {
            if (player.flipX == true) {
                anim(player, atk_side);
                player.setOrigin(0.5,0.35).setOffset(8, 12);
                hitBox = 3;
            }else{
                anim(player, atk_side);
                player.setOrigin(0.5,0.35).setOffset(8, 12);
                hitBox = 4;
            }
        }
        switch (hitBox) {
            case 1 : hitBox = hit.create(player.x,player.y + 40,'box').setScale(6,2).refreshBody(); break;
            case 2 : hitBox = hit.create(player.x,player.y - 20,'box').setScale(6,2).refreshBody(); break;
            case 3 : hitBox = hit.create(player.x - 30,player.y,'box').setScale(2,4).setOrigin(0.5,0.3).refreshBody(); break;
            case 4 : hitBox = hit.create(player.x + 30,player.y,'box').setScale(2,4).setOrigin(0.5,0.3).refreshBody(); break;
        }
        cela.sound.play('sword');
    }
}
function endAtk (player, scene, idle) {
    if ((atk == 1) && (player.anims.currentFrame.index === 4)){
        atk = 2;
        scene.time.addEvent({ delay: 100, callback: ()=>{ 
            if ((player.anims.getCurrentKey() == 'atk_down') || (player.anims.getCurrentKey() == 'atk_up') || (player.anims.getCurrentKey() == 'atk_side')) {
                anim(player, idle);
                player.setOrigin(0.5,0.5).setOffset(2, 13);   
            }
            hitBox.destroy();
        }, loop: false});
        scene.time.addEvent({ delay: 1000, callback: ()=>{ atk = 0; }, loop: false});
    }
}
function enemyBrain (enemy, scene, fireball, player) {
    var rand;
    time1 = scene.time.addEvent({ delay: 1000, callback: ()=>{
        rand = Phaser.Math.RND.between(1,5);
        switch (rand) {
            case 1 : enemy.setVelocity(100,0).setAlpha(1); break;
            case 2 : enemy.setVelocity(-100,0).setAlpha(1); break;
            case 3 : enemy.setVelocity(0,100).setAlpha(1); break;
            case 4 : enemy.setVelocity(0,-100).setAlpha(1); break;
            case 5 :
                if (enemy.anims.getCurrentKey() == 'ennemis2') {
                    enemy.setVelocity(0,0).setAlpha(0.9);
                }
        }
    }, loop: true});
}
function enemySprite (enemy, walk, fire, fireboule, player) {
    if (enemy.body.velocity.x == 100) {
        enemy.setAngle(90);
    }
    if (enemy.body.velocity.x == -100) {
        enemy.setAngle(-90);
    }
    if (enemy.body.velocity.y == 100) {
        enemy.setAngle(180);
    }
    if (enemy.body.velocity.y == -100) {
        enemy.setAngle(0);
    }
    if (enemy.alpha == 1) {
        anim(enemy, walk);
    }else{
        anim(enemy, fire);
        if (enemy.anims.currentFrame.index === 3) {
            fireboule.create(enemy.x, enemy.y, 'enemy_fire').setScale(3.96,3.9).setVelocity((player.x - enemy.x)/2, (player.y - enemy.y)/2);
            enemy.setAlpha(1);
        }  
    }
}
function casse (enemy, hit) {
    var nb;
    hit.disableBody(true,true);
    enemy.disableBody(true,true);
    nb = Phaser.Math.RND.between(0,10);
    if (nb == 5) {
        this.heart.create(enemy.x,enemy.y,'coeurI').setScale(3.96,3.9).refreshBody();
    }
}
function tue (enemy, hit) {
    var nb;
    hit.disableBody(true,true);
    enemy.disableBody(true,true);
    nb = Phaser.Math.RND.between(0,10);
    if (nb == 5) {
        this.heart.create(enemy.x,enemy.y,'coeurI').setScale(3.96,3.9).refreshBody();
    }
    count += 1;
    this.sound.play('monster_hit');
}
function collBloc (player, bloc){
    bloc.setVelocity(0,0);
}
function collBlocWall (bloc, wall){
    if (jet == 1) {
        bloc.setVelocity(0,0);
        if (bloc.anims.getCurrentKey() != 'explosion') {
            bloc.anims.play('explosion',false).setSize(20,20).setOffset(6, 6);
            this.sound.play('explosion');
        }
        if (bloc.anims.currentFrame.index === 5) {
            bloc.disableBody(true,true);
            bloc.destroy();
            jet = 0;
        }
    }
}
function collBlocEnemy (bloc, enemy){
    var nb;
    if ((jet == 1) && (bloc.angle != 0)) {
        bloc.setVelocity(0,0);
        enemy.setVelocity(0,0);
        if (bloc.anims.getCurrentKey() != 'explosion') {
            bloc.anims.play('explosion',false).setSize(20,20).setOffset(6, 6);
            this.sound.play('explosion');
            enemy.setVelocity(0,0).setImmovable(true).setAlpha(0);
            nb = Phaser.Math.RND.between(0,10);
            if (nb == 5) {
                this.heart.create(enemy.x,enemy.y,'coeurI').setScale(3.96,3.9).refreshBody();
            }
        }
        if (bloc.anims.currentFrame.index === 5) {
            bloc.disableBody(true,true);
            enemy.disableBody(true,true);
            jet = 0;
            count += 1;
        }
    }
}
function getReckt (player, enemy) {
    enemy.setVelocity((player.x - enemy.x)*-5, (player.y - enemy.y)*-5);
    player.setVelocity((player.x - enemy.x)*5, (player.y - enemy.y)*5);
    take_hit = 1;
    pv -= 1;
    this.sound.play('player_hit');
    mechant = enemy;
}
function resetReckt (scene, player, enemy) {
    if (take_hit == 1) {
        scene.time.addEvent({ delay: 100, callback: ()=>{ 
            take_hit = 0;
            player.setVelocity(0, 0);
            enemy.setVelocity(0, 0);
        }, loop: false});
    }
}
function deathScreen (black, player, ghost, death, cela) {
    if (pv <= 0) {
        player.disableBody(true, true);
        if (black.alpha < 1) {
            black.alpha += 0.01;
        }
        ghost.setPosition(player.x, player.y);
        anim(ghost, death)
        if (ghost.anims.currentFrame.index === 5) {
            cela.anims.pauseAll();
        }
    }
}
function ballHit (player, ball) {
    ball.disableBody(true, true);
    pv -= 1;
    player.setVelocity((player.x - ball.x)*5, (player.y - ball.y)*5);
    this.sound.play('player_hit');
    take_hit = 1;
    mechant = ball;
}
function halo () {
    if ((buttonPressed == 5) && (compSelect == 2) && (hold == 0)) {
        anim(sphere, sphereAnim);
        sphere.setAlpha(0.5);
    }else{
        sphere.setAlpha(0);
    }
}
function updateText (t) {
    t.setText("x " + key);
}
function ballColl (ball, other) {
    ball.destroy();
}
function canonOrientation (canon, player, stun) {
    if (stun == 0) {
        canon.setAngle(Phaser.Math.RadToDeg(Phaser.Math.Angle.Between(player.x,player.y + 10,canon.x,canon.y)) + 90);
    }else{
        canon.setAngle(-180);
    }
}
function constSpeed (x1, y1, x2, y2, bloc) {//prototype
    var ix = x2 - x1;
    var iy = y2 - y1;
    console.log("start : " + ix, iy, x1, y1, x1, y2);
    
   while ((Math.sqrt((Math.pow(ix, 2) + Math.pow(iy, 2))) < 70) || ((Math.sqrt((Math.pow(ix, 2) + Math.pow(iy, 2))) > 80))) {
        while (Math.sqrt((Math.pow(ix, 2) + Math.pow(iy, 2))) > 80) {
            ix -= 1;
            iy -= 1;
        }
        while (Math.sqrt((Math.pow(ix, 2) + Math.pow(iy, 2))) < 70) {
            ix += 1;
            iy += 1;
        }
        console.log(Math.sqrt((Math.pow(ix, 2) + Math.pow(iy, 2))));
        //console.log(ix, iy, Math.pow(ix, 2), Math.pow(iy, 2));
   }
        console.log("final : " + Math.sqrt((Math.pow(ix, 2) + Math.pow(iy, 2))));
        console.log("final : " + ix, iy, Math.pow(ix, 2), Math.pow(iy, 2));
        bloc.setVelocity(ix, iy);
}