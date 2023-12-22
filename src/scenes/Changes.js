class Changes extends Phaser.Scene{
    constructor(){
        super("changeScene")
    }

    preload(){
        this.load.bitmapFont("Pixel", "assets/pixel font.png", "assets/pixel font.xml")
        this.load.image("ball", "assets/ball.png")
        this.load.image("arrow", "assets/arrow.png")
    }

    create(){
        this.add.bitmapText(gameWidth / 2, 40, "Pixel", "GAME CHANGES", 22).setOrigin(0.5)

        this.cursor = this.add.sprite(130, 300, "ball")
        this.cursor_location = 0

        this.add.sprite(230, 250, "arrow").setScale(2).setTintFill(0x000000)
        this.add.sprite(230, 350, "arrow").setScale(2).setTintFill(0x000000).angle = 180
        this.countdown_text = this.add.bitmapText(230, 300, "Pixel", "time: " + countdownMax, 20).setOrigin(0.5)

        this.add.sprite(530, 250, "arrow").setScale(2).setTintFill(0x000000)
        this.add.sprite(530, 350, "arrow").setScale(2).setTintFill(0x000000).angle = 180
        this.win_text = this.add.bitmapText(530, 300, "Pixel", "win limit: " + winMax, 20).setOrigin(0.5)

        this.add.bitmapText(gameWidth / 2, 550, "Pixel", "press SPACEBAR to play", 25).setOrigin(0.5)

        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP)
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN)
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT)
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT)
        SPACEBAR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }

    update(){
        if(Phaser.Input.Keyboard.JustDown(keyLEFT) && this.cursor_location > 0){
            this.cursor.x -= 250
            this.cursor_location--
        }
        else if(Phaser.Input.Keyboard.JustDown(keyRIGHT) && this.cursor_location < 1){
            this.cursor.x += 250
            this.cursor_location++
        }

        if(Phaser.Input.Keyboard.JustDown(keyUP)){
            if(this.cursor_location == 0 && countdownMax < 60){ //increase time
                countdownMax += 5
                this.countdown_text.text = "time: " + countdownMax
            }
            else if(this.cursor_location == 1 && winMax < 60){ //increase win max
                winMax += 1
                this.win_text.text = "win limit: " + winMax
            }
        }
        else if(Phaser.Input.Keyboard.JustDown(keyDOWN)){
            if(this.cursor_location == 0 && countdownMax > 10){
                countdownMax -= 5
                this.countdown_text.text = "time: " + countdownMax
            }
            else if(this.cursor_location == 1 && winMax > 3){
                winMax -= 1
                this.win_text.text = "win limit: " + winMax
            }
        }

        if(Phaser.Input.Keyboard.JustDown(SPACEBAR)){
            this.scene.start("playScene")
        }
    }
}