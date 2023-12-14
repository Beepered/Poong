class Instruction extends Phaser.Scene{
    constructor(){
        super("instructionScene")
    }
    preload(){
        this.load.bitmapFont("Pixel", "assets/pixel font.png", "assets/pixel font.xml")
    }

    create(){
        this.add.bitmapText(gameWidth / 2, 40, "Pixel", "INSTRUCTIONS", 22).setOrigin(0.5).setTintFill(0xFF0000)
        this.add.bitmapText(gameWidth / 2, 70, "Pixel", "press UP for MENU", 20).setOrigin(0.5)

        this.add.bitmapText(gameWidth / 8, gameHeight / 3.5, "Pixel", "Player 1:", 20)
        this.add.bitmapText(gameWidth / 12, gameHeight / 2.9, "Pixel", "move up (W), move down (S), fire ball (D)", 15)
        this.add.bitmapText(gameWidth / 8, gameHeight / 2.5, "Pixel", "Player 2:", 20)
        this.add.bitmapText(gameWidth / 12, gameHeight / 1.9, "Pixel", "move up (up arrow), move down (down arrow), fire ball (left arrow)", 15)
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