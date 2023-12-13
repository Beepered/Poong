class Menu extends Phaser.Scene{
    constructor(){
        super("menuScene")
    }

    preload(){
        this.load.audio("menu_music", "assets/menu_music.mp3")
        this.load.bitmapFont("Pixel", "assets/pixel font.png", "assets/pixel font.xml")
    }

    create(){
        this.music = this.sound.add("menu_music", {
            volume: 0.1,
            loop: true
        });
        this.music.play();
        this.add.bitmapText(gameWidth / 2, gameHeight / 2.5, "Pixel", "Poong", 60).setOrigin(0.5).setTintFill(0xFF0000)
        this.add.bitmapText(gameWidth / 2, gameHeight / 1.8, "Pixel", "press SPACEBAR to PLAY", 20).setOrigin(0.5)
        //this.add.bitmapText(gameWidth / 2, gameHeight / 1.6, "Pixel", "press UP for INSTRUCTIONS", 20).setOrigin(0.5)
        //this.add.bitmapText(gameWidth / 2, gameHeight / 1.45, "Pixel", "press DOWN for CREDITS", 20).setOrigin(0.5)
        //this.add.bitmapText(gameWidth / 1.2, gameHeight - 35, "Pixel", "Luminice Star", 15).setOrigin(0.5)
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        SPACEBAR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }

    update(){
        if(Phaser.Input.Keyboard.JustDown(SPACEBAR)){
            this.game.sound.stopAll();
            this.scene.start("playScene")
        }
        /*
        else if(Phaser.Input.Keyboard.JustDown(keyUP)){
            this.scene.start("instructionScene")
        }
        else if(Phaser.Input.Keyboard.JustDown(keyDOWN)){
            this.scene.start("creditScene")
        }
        */
    }

}