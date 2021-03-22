// create a new scene
let gameScene = new Phaser.Scene('Game');

// Load assets
gameScene.preload = function(){
    // Load images 
    this.load.image('background', 'assets/background.png');
    this.load.image('player', 'assets/player.png');
    this.load.image('treasure', 'assets/treasure.png');
};

// called once after the preload ends
gameScene.create = function(){
    // create bg sprite
    let bg = this.add.sprite(0, 0, 'background');

    // change the origin to the top-left corner
     bg.setOrigin(0, 0);

     // create the player
     this.player = this.add.sprite(50, 180, 'player');

     // we are reducing the width by 50%, and we are doubling with height
     this.player.setScale(1, 1);

     // create the treasure
     this.treasure = this.add.sprite(400, 220, 'treasure');


    // place sprite in the center
    // bg.setPosition(640/2, 360/2);

    // let gameW = this.sys.game.config.width;
    // let gameH = this.sys.game.config.height;

    // console.log(gameW, gameH); 

    // console.log(bg);
    
      this.cursorKeys = this.input.keyboard.createCursorKeys();

};

gameScene.update = function(){
    if(this.cursorKeys.left.isDown)
    {
        this.player.x -= 4;
    }
    else if (this.cursorKeys.right.isDown) 
    {
        this.player.x += 4;
    }
    if (this.cursorKeys.up.isDown) {
        this.player.y -= 4;
    }
    else if (this.cursorKeys.down.isDown) {
        this.player.y += 4;
    }
};

// set the configuration of the game
let config = {
    type: Phaser.AUTO, // Phaser will use WebGL if available, if not it will use Canvas
    width: 640,
    height: 360,
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    },
    scene: gameScene
};

// create a new game, pass the configuration
let game = new Phaser.Game(config);
