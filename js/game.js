//config
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


let game = new Phaser.Game(config)

function preload() {
   
   
    //this returns its current object : scence and shows all the available objects/functions
    console.log(this);
    
    //load images
    //parameters : (name , url)
    this.load.image('bg' ,'../assets/bg.jpg')
    this.load.image('wheel' , '../assets/wheel.png')
    this.load.image('stand' , '../assets/stand.png')
    this.load.image('pin' , '../assets/pin.png')
}

function create() {
    let W = game.config.width;
    let H = game.config.height;
    
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
    
    //event listener

}

//Game Loop
function update() {
//change angle
this.wheel.angle += 1; 

    //additional functions
    // Zoom in the wheel 0.01x where time update gets called
    // this.wheel.scaleX +=0.01;
    // this.wheel.scaleY +=0.01; 

    //Disapper the wheel using alpha
    //this.wheel.alpha -=0.01; 
}
