class Credits extends Phaser.Scene{
    constructor(){
        super("creditScene")
    }

    preload(){
        this.load.bitmapFont("Pixel", "assets/pixel font.png", "assets/pixel font.xml")
    }

    create(){
        this.add.bitmapText(gameWidth / 2, 40, "Pixel", "CREDITS", 22).setOrigin(0.5).setTintFill(0xFF0000)
        this.add.bitmapText(gameWidth / 2, 70, "Pixel", "Press SPACEBAR for MENU", 20).setOrigin(0.5)
        this.add.bitmapText(gameWidth / 2, gameHeight / 2, "Pixel",
            "Programming/Art/Game Design by Luminice Star\n\n" +
            "Programming in Phaser/JS\n\n" +
            "Sound effects made in sfxr.me\n\n" +
            "Public Pixel font by GGBotNet", 14).setOrigin(0.5)
        SPACEBAR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }

    update(){
        if(Phaser.Input.Keyboard.JustDown(SPACEBAR)){ 
            this.scene.start("menuScene")
        }
    }
}