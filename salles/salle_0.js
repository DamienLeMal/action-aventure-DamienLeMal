class salle_0 extends Phaser.Scene {
	constructor(){
		super("salle0");
	}

	init(data) {

	}

	preload() {
		this.load.image('back','assets/violet.jpg');
		this.load.image('fore','assets/blue.jpg');
	}

	create() {
		//this.add.image(100,100,'back').setOrigin(0,0).setScale(1.31,0.98);
		this.add.image(1000, 1000,'fore').setOrigin(0,0).setScale(4,4);
		//camera.setViewport
		this.text = this.add.text(10, 30, '', { font: '16px Courier', fill: '#ffffff' });
		this.player = this.physics.add.sprite(600,450,'back').setScale(0.5,0.5);
		this.debugOn = 1;
	}

	update() {
		
    this.debug = [];
    this.pads = navigator.getGamepads();

    for (this.i = 0; this.i < this.pads.length; this.i++)
    {
        this.pad = this.pads[this.i];

        if (!this.pad)
        {
            continue;
        }

        	//  Timestamp, index. ID
        if (this.debugOn == 1) { 
        	this.debug.push(this.pad.id);
        	this.debug.push('Index: ' + this.pad.index + ' Timestamp: ' + this.pad.timestamp);
        }
        	//  Buttons

        this.buttons = '';

        for (this.b = 0; this.b < this.pad.buttons.length; this.b++)
        {
            this.button = this.pad.buttons[this.b];
            controller(this.player,0,this.b,this.button.value);

            //console
            if (this.debugOn == 1) { 
            	this.buttons = this.buttons.concat('B' + this.b + ': ' + this.button.value + '  \n');
            	if (this.b === 16)
            	{
            	    this.debug.push(this.buttons);
            	    this.buttons = '';
            	}
            }
        }
        
        //this.debug.push(this.buttons);

        	//  Axis

        this.axes = '';

        for (this.a = 0; this.a < this.pad.axes.length; this.a++) {
            this.axis = this.pad.axes[this.a];
           	controller(this.player,this.a,0,this.axis);
           	if (this.debugOn == 1) { 
           		this.axes = this.axes.concat('A' + this.a + ': ' + this.axis + '  \n');
        	    this.debug.push(this.axes);
        	    this.axes = '';
        	}
        }
    }
    this.text.setText(this.debug);
	}
}