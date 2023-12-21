class Instruction extends Phaser.Scene{
    constructor(){
        super("instructionScene")
    }
    preload(){
        this.load.bitmapFont("Pixel", "assets/pixel font.png", "assets/pixel font.xml")
        this.load.image("instructions", "assets/instructions.png")

        this.load.image("upgrade paddle", "assets/upgrade_paddle.png")
        this.load.image("upgrade ball", "assets/upgrade_ball.png")
        this.load.image("upgrade cooldown", "assets/upgrade_cooldown.png")
    }

    create(){
        this.add.bitmapText(gameWidth / 2, 40, "Pixel", "INSTRUCTIONS", 22).setOrigin(0.5).setTintFill(0xFF0000)
        this.add.bitmapText(gameWidth / 2, 70, "Pixel", "press SPACEBAR for MENU", 20).setOrigin(0.5)

        this.add.sprite(gameWidth / 2, gameHeight / 2.5, "instructions").setOrigin(0.5)
        this.add.bitmapText(gameWidth / 2, gameHeight / 1.5, "Pixel", "First player to 20 points WINS", 16).setOrigin(0.5)
        this.add.bitmapText(gameWidth / 2, gameHeight / 1.4, "Pixel", "Upgrade at end of 20 seconds", 16).setOrigin(0.5)

        this.add.sprite(200, gameHeight / 1.2, "upgrade paddle")
        this.add.bitmapText(200, gameHeight / 1.07, "Pixel", "paddle size\n+10%", 13).setOrigin(0.5)
        this.add.sprite(gameWidth / 2, gameHeight / 1.2, "upgrade ball")
        this.add.bitmapText(gameWidth / 2, gameHeight / 1.07, "Pixel", "ball speed\n+15%", 13).setOrigin(0.5)
        this.add.sprite(600, gameHeight / 1.2, "upgrade cooldown")
        this.add.bitmapText(600, gameHeight / 1.07, "Pixel", "cooldown\n-15%", 13).setOrigin(0.5)
        SPACEBAR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }

    update(){
        if(Phaser.Input.Keyboard.JustDown(SPACEBAR)){
            this.scene.start("menuScene")
        }
    }
}