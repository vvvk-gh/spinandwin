//basic single page game = phaser hello world
//this setup is basic for every game you code with phaser

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
    console.log(`Inside Preload`)
}

function create() {
    console.log(`Inside create`)
}


//Game Loop
function update() {
    console.log(`Inside Game`)
}