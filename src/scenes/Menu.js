class Menu extends Phaser.Scene{
    constructor(){
        super("menuScene")
    }

    preload(){
        this.load.bitmapFont("Pixel", "assets/pixel font.png", "assets/pixel font.xml")
        this.load.image("title", "assets/title.png")
        this.load.image("ball", "assets/ball.png")
        this.load.image("arrow", "assets/arrow.png")
    }

    create(){
        this.add.sprite(gameWidth / 2, gameHeight / 4, "title")

        //credit
        this.add.bitmapText(gameWidth / 1.2, gameHeight - 35, "Pixel", "Luminice Star", 14).setOrigin(0.5)

        //option select
        this.cursor = this.add.sprite(240, gameHeight / 2, "ball")
        this.cursor_location = 0
        this.add.bitmapText(260, gameHeight / 2, "Pixel", "PLAY", 25).setOrigin(0, 0.5)
        this.add.bitmapText(260, gameHeight / 1.7, "Pixel", "INSTRUCTIONS", 25).setOrigin(0, 0.5)
        this.add.bitmapText(260, gameHeight / 1.45, "Pixel", "CREDITS", 25).setOrigin(0, 0.5)

        //instruction
        this.add.sprite(150, gameHeight / 1.2, "arrow").setScale(2).setOrigin(0.5).setTintFill(0x000000)
        this.add.sprite(190, gameHeight / 1.2, "arrow").setScale(2).setOrigin(0.5).setTintFill(0x000000).flipY = true
        this.add.bitmapText(260, gameHeight / 1.2, "Pixel", "- move", 13).setOrigin(0.5).setTintFill(0x000000)

        this.add.bitmapText(gameWidth / 2 + 150, gameHeight / 1.2, "Pixel", "SPACEBAR - select", 13).setOrigin(0.5).setTintFill(0x000000)

        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP)
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN)
        SPACEBAR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)
    }

    update(){
        if(Phaser.Input.Keyboard.JustDown(keyUP) && this.cursor_location > 0){
            this.cursor.y -= 55
            this.cursor_location--
        }
        else if(Phaser.Input.Keyboard.JustDown(keyDOWN) && this.cursor_location < 2){
            this.cursor.y += 55
            this.cursor_location++
        }
        else if(Phaser.Input.Keyboard.JustDown(SPACEBAR)){
            if(this.cursor_location == 0){
                this.game.sound.stopAll();
                this.scene.start("changeScene")
            }
            else if (this.cursor_location == 1){
                this.scene.start("instructionScene")
            }
            else{
                this.scene.start("creditScene")
            }    
        }
    }

}