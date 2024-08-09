let config = {
    type: Phaser.WEBGL,
    pixelArt: true,
    physics:{
        default: "arcade",
        arcade:{
            debug:false
        }
    },
    width: 700,
    height: 550,
    backgroundColor: "#FFFFFF",
    scene: [Menu, Instruction, Credits, Changes, Play, UIScene, Upgrades, WinScene]
}

let game = new Phaser.Game(config);
let gameHeight = game.config.height
let gameWidth = game.config.width

let keyUP, keyDOWN, keyLEFT, keyRIGHT, keyW, keyA, keyS, keyD, SPACEBAR;
let player1_points = 0, player2_points = 0
let player1, player2
let upgrade1_1_cost = 1, upgrade2_1_cost = 1, upgrade3_1_cost = 1
let upgrade1_2_cost = 1, upgrade2_2_cost = 1, upgrade3_2_cost = 1

//game modifiers
let countdown = 0; countdownMax = 20; winMax = 20;
let ball_reflection = false; fast_ball = false; increasing_speed = false; fast_paddles = false

let playing = true