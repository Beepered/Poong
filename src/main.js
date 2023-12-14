let config = {
    type: Phaser.WEBGL,
    pixelArt: true,
    physics:{
        default: "arcade",
        arcade:{
            debug:false
        }
    },
    width: 800,
    height: 600,
    backgroundColor: "#FFFFFF",
    scene: [Menu, Instruction, Credits, Play, UIScene, Upgrades, WinScene]
}

let game = new Phaser.Game(config);
let gameHeight = game.config.height
let gameWidth = game.config.width

let keyUP, keyDOWN, keyLEFT, keyW, keyS, keyD, SPACEBAR;
let player1_points = 0, player2_points = 0
let player1, player2
let upgrade1_1_cost = 3, upgrade2_1_cost = 3, upgrade3_1_cost = 3
let upgrade1_2_cost = 3, upgrade2_2_cost = 3, upgrade3_2_cost = 3
let countdown = 0
let playing = true