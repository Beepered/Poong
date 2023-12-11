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
        this.add.bitmapText(gameWidth / 2, gameHeight / 2, "Pixel",
            "Move with the LEFT and RIGHT arrow keys\n\n" + 
            "Jump with the UP arrow keys\n\n" +
            "Shoot with SPACEBAR", 18).setOrigin(0.5)
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
    }

    update(){
        if(Phaser.Input.Keyboard.JustDown(keyUP)){
            this.scene.start("menuScene")
        }
    }
}