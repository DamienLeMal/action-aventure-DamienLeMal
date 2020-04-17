function pad(player, box) {
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
        if ( ((axis0 < -0.1) || (axis0 > 0.1)) && ((axis1 < -0.1) || (axis1 > 0.1)) ) {
            controller(player,0,-1,axis0/1.4);
            controller(player,1,-1,axis1/1.4);
        }else{
            controller(player,0,-1,axis0);
            controller(player,1,-1,axis1);
        }
    }
    box.rotation = Phaser.Math.Angle.Between(0,0,axis2 * -1,axis3 * -1);
}

function controller (player, a, b, value) {
    var speedX = 0;
    var speedY = 0;
    if (this.b != -1) {
        switch (b) {
            case 0 :
                if (value != 0) {
                    player.setTint(0x000000);
                }
                break;
            case 1 :
                if (value != 0) {
                    player.setTint(0xff0000);
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
                    player.setTint(0xffff00);
                }
                break;
            case 5 :
                if (value != 0) {
                    sphere.alpha = 1;
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
    if (this.a != -1) {
        switch (a) {
            case 0 :
                if (value < -0.1) {
                    speedX = value;
                } else if (value > 0.1) {
                    speedX = value;
                }
                player.setVelocityX(speedX*200);
                break;
            case 1 :
                if (value < -0.1) {
                    speedY = value;
                } else if (value > 0.1) {
                    speedY = value;
                }
                player.setVelocityY(speedY*200);
                break;
            case 2 :
                if (value != 0) {
                    //player.setTint(0x000000);
                }
                break;
            case 3 :
                if (value != 0) {
                    //player.setTint(0x000000);
                }
                break;
        }
    }
}