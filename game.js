//config
//import {Phaser} from "phaser";

let config = {
    type : Phaser.CANVAS,
    width : 700,
    height : 500,
    
    scene : {
        preload : preload,
        create : create,
        update : update,
    }
}

let is_Spining = false;

let game = new Phaser.Game(config)

function preload() {
   
   
    //this returns its current object : scence and shows all the available objects/functions
    //console.log(this);
    
    //load images
    //parameters : (name , url)
    this.load.image('bg','assets/bg.jpg')
    this.load.image('wheel','assets/wheel.png')
    this.load.image('wheel2','assets/wheel2.png')
    this.load.image('stand','assets/stand.png')
    this.load.image('pin', 'assets/pin.png')
    this.load.image('button', 'assets/button.png');
    // load audio
    this.load.audio('spinmuzic','assets/bgm.mp3')

}

//var wheel_music

function create() {
    let W = game.config.width;
    let H = game.config.height;
    
   //button 
    //button.onInputOut.add(out, this);
    this.button = this.add.sprite((W/2)-250,W/2,'button')
    this.button.depth = 1;
    this.button.setScale(0.25)
    //accepts all the input actions on the button/image
    this.button.setInteractive();
    this.button.on('pointerdown', spinWheel , this);

    //create background
    //sprite is same as image and by default x,y axis gets the image from the center as the starting point of the image
    let background = this.add.sprite(0,0,'bg');
    //adjust the position
    background.setPosition(W/2 , H/2);
    //adjust the size of the image and its scales both width and height 
    background.setScale(0.25);
    
    
    //create pin 
    let pin = this.add.sprite(0,0, 'pin')
    pin.setPosition(W/2 , H/6)
    pin.setScale(0.15);
    pin.depth = 1; // default is zero and depth higher than 0 appears first and lower at the back 
    
    //create stand
    let stand = this.add.sprite(0,0,'stand')
    stand.setPosition(W/2 ,(H/2)+170)
    stand.setScale(0.25);
    
    //create  wheel
    //as let has only functional scope
    //to access wheel in other functions we made wheel as a property to scene object by adding this     
    this.wheel = this.add.sprite(0,0, 'wheel')
    this.wheel.setPosition(W/2 , (H/2)-15);
    this.wheel.setScale(0.15);
    
    //fontStyle for text
    font_Style ={
        font:"bold 20px Cursive",
        color : "black",
        align : "center"
    }

    //create text on screen
    this.game_text = this.add.text(10 , 10 , "Welcome to Spin & Win" , font_Style)

    
    //mouse event listener parameters : (listnername , func name , context)
    //this.input.on('pointerdown' ,spinWheel , this)

    //creating audio / add audio 
    this.wheel_music = this.sound.add('spinmuzic')
    
}

//Game Loop
function update() {
console.log(`update`)

//change angle
//this.wheel.angle += 1; 

    //additional functions
    // Zoom in the wheel 0.01x where time update gets called
    // this.wheel.scaleX +=0.01;
    // this.wheel.scaleY +=0.01; 

    //Disapper the wheel using alpha
    //this.wheel.alpha -=0.01; 

    //Spining wheel only if the is_spin is true
    checkSpinStatus(this)
    
}

function spinWheel(){
    
    is_Spining = true;

 let offers = {
     0 : "CB Book",
     1: "CB T-shirt",
     2 : "2 Extra spins",
     3 : "Amazon Voucher",
     4 : "50% OFF",
     5:  "Netflix Sub",
     6 : "100% OFF",
     8 : "70% OFF",
     7 : "CB Swag pack",
     9:  "sad , Please try later",
     10 :"35% off",
     11: "3000 CB credits",
    }
 

    //console.log(`Mouse clicked`)
    this.game_text.setText("Loading...")

   //play audio
    this.wheel_music.play();


    //creating rounds randomly
    let rounds = Phaser.Math.Between(2,4) //creates an number between 2 to 5

    // as wheel has 12 parts so each part will be consuming an angle of 360/12 = 30 
    this.angle = Phaser.Math.Between(0,11)*30 
    
    let total_angle = rounds*360 + this.angle
    console.log(`${total_angle}`)
   
    //tweens =Animations 
    tween = this.tweens.add({
        targets : this.wheel,
        angle: total_angle,
        ease :"Cubic.easeOut",
        duration: 6000,
        onComplete : ( ) => {
            is_Spining = false;
            this.wheel_music.pause('spinmuzic');
            this.game_text.setText('You Won : ' + offers[this.angle/30])
            
        } 
    })
 }
     

 function checkSpinStatus(t){
    if(is_Spining){
        //hide button
        t.button.alpha = 0;
    }else{
        //show button
        t.button.alpha = 1;
    }
}
