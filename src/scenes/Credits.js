class Credits extends Phaser.Scene{
    constructor(){
        super("creditScene")
    }

    preload(){
        this.load.bitmapFont("Pixel", "assets/pixel font.png", "assets/pixel font.xml")
    }

    create(){
        this.add.bitmapText(gameWidth / 2, 40, "Pixel", "CREDITS", 22).setOrigin(0.5).setTintFill(0xFF0000)
        this.add.bitmapText(gameWidth / 2, 70, "Pixel", "Press UP for MENU", 20).setOrigin(0.5)
        this.add.bitmapText(gameWidth / 2, gameHeight / 2, "Pixel",
            "Programming/Art/Game Design by Brendan Trieu\n\n" +
            "Menu Scene music: Science Documentary by Lexin_Music\n\n" +
            "Play Scene music: Beyond Infinity by Blender Time\n\n" +
            "Programming in Phaser/JS\n\n" +
            "Art made in Krita\n\n" +
            "Sound effects made in sfxr.me\n\n" +
            "Public Pixel font by GGBotNet", 14).setOrigin(0.5)
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
    }

    update(){
        if(Phaser.Input.Keyboard.JustDown(keyUP)){ 
            this.scene.start("menuScene")
        }
    }
}