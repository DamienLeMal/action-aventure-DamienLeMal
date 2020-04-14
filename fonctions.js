function controller (player, a, b, value) {
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
                player.setTint(0x00ffff);
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