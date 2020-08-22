//config
let config = {
    type : Phaser.CANVAS,
    width : 700,
    height : 700,

    scene : {
        preload : preload,
        create : create,
        update : update,
    }
}


let game = new Phaser.Game(config)

function preload() {
    //returns its current object : scence and shows all the available objects/functions
    // console.log(this);
  //load the background
  this.load.image('bg' ,'../assets/bg.jpg')
}

function create() {
    let W = game.config.width;
    let H = game.config.height;
    
    //create background
    //sprite is same as image and by default x,y axis from the center as the starting point of the image
    let background = this.add.sprite(0,0,'bg');
    //adjust the position
    background.setPosition(W/2 , H/2);
    //adjust the size of the image and its scales both width and height 
    background.setScale(0.25);
}



//Game Loop
function update() {
   
}