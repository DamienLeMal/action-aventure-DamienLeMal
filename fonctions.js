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
        if (atk != 1) {
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
                    pv += 1;
                }
                break;
            case 1 :
                if (value != 0) {
                    buttonPressed = 1;
                }else if (buttonPressed == 1) {
                    buttonPressed = 0;
                }
                break;
            case 2 :
                if (value != 0) {
                    player.setTint(0x00ff00);
                }
                break;
            case 3 :
                if (value != 0) {
                    player.setTint(0x0000ff);
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
            case 6 :
                if (value != 0) {
                    player.setTint(0xff00ff);
                }
                break;
            case 7 :
                if (value != 0) {
                    player.setTint(0xffffff);
                }
                break;
            case 8 :
                if (value != 0) {
                    player.setTint(0xf0f0f0);
                }
                break;
            case 9 :
                if (value != 0) {
                    player.setTint(0x0f0f0f);
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
        r2.setPosition(player.x + 75, player.y - 75).setAlpha(1).setTexture('jera');
        r3.setPosition(player.x + 100, player.y).setAlpha(1);
        r4.setPosition(player.x + 75, player.y + 75).setAlpha(1);
        r5.setPosition(player.x, player.y + 100).setAlpha(1);
        r6.setPosition(player.x - 75, player.y + 75).setAlpha(1);
        r7.setPosition(player.x - 100, player.y).setAlpha(1);
        r8.setPosition(player.x - 75, player.y - 75).setAlpha(1);
        rs.setAlpha(1);
        switch (val) {
            case 0 : val = compSelect; break;
            case 1 : compSelect = val; break;
            case 2 : compSelect = val; break;
            case 3 : compSelect = val; break;
            case 4 : compSelect = val; break;
            case 5 : compSelect = val; break;
            case 6 : compSelect = val; break;
            case 7 : compSelect = val; break;
            case 8 : compSelect = val; break;
        }
        switch (compSelect) {
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
    pv += 2;
    if (pv > pv_max) {
        pv = pv_max;
    }
}
function jera (sphere, bloc) {
    if ((buttonPressed == 5) && (compSelect == 2) && (hold == 0)) {
        bloc.setAlpha(0).setPosition(-100,-100);
        blocGrab = bloc;
        box.setTexture('bloc');
        hold = 1;
    }
}
function throwBloc (player, bloc) {
    if ((hold == 1) && (buttonPressed != 5)){
        hold = 0;
        box.setTexture('box');
        bloc.setAlpha(1).setPosition(stick_x*100 + player.x, stick_y*100 + player.y).setVelocity((bloc.x - player.x)*15, (bloc.y - player.y)*15);
        bloc.rotation = rotation;
        minSpeed(bloc);
        jet = 1;
    }
}
function minSpeed (bloc) {
    if (bloc.body.velocityX < 100) {
        bloc.setVelocityX(100);
    }
}
function doorOpen (door, lock) {
    if (lock == 0) {
        door.setAlpha(0);
        return 0;
    }else if (door.anims.getCurrentKey() === 'sesame') {
        if (door.anims.currentFrame.index === 4) {
            door.disableBody(true,true);
            return 0;
        }
    }else {
        return 1;
    }
}
function teiwaz (player, atk_up, atk_down, atk_side, hit) {

     
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
    }
}
function endAtk (player, scene, idle) {
    if ((atk == 1) && (player.anims.currentFrame.index === 4)){
        atk = 2;
        scene.time.addEvent({ delay: 100, callback: ()=>{ 
            if ((player.anims.getCurrentKey() == 'atk_down') || (player.anims.getCurrentKey() == 'atk_up') || (player.anims.getCurrentKey() == 'atk_side')) {
                anim(player, idle);
                player.setOrigin(0.5,0.5).setOffset(2, 13);
                hitBox.disableBody(true, true)
            }
        }, loop: false});
        scene.time.addEvent({ delay: 1000, callback: ()=>{ atk = 0; }, loop: false});
    }
}