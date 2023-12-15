class Instruction extends Phaser.Scene{
    constructor(){
        super("instructionScene")
    }
    preload(){
        this.load.bitmapFont("Pixel", "assets/pixel font.png", "assets/pixel font.xml")
        this.load.image("instructions", "assets/instructions.png")
    }

    create(){
        this.add.bitmapText(gameWidth / 2, 40, "Pixel", "INSTRUCTIONS", 22).setOrigin(0.5).setTintFill(0xFF0000)
        this.add.bitmapText(gameWidth / 2, 70, "Pixel", "press UP for MENU", 20).setOrigin(0.5)

        this.add.sprite(gameWidth / 2, gameHeight / 2.3, "instructions").setOrigin(0.5)
        this.add.bitmapText(gameWidth / 2, gameHeight / 1.3, "Pixel", "First player to 20 points WINS", 20).setOrigin(0.5)
        this.add.bitmapText(gameWidth / 2, gameHeight / 1.2, "Pixel", "Upgrade at end of 20 seconds", 20).setOrigin(0.5)
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
    }

    update(){
        if(Phaser.Input.Keyboard.JustDown(keyUP)){
            this.scene.start("menuScene")
        }
    }
}