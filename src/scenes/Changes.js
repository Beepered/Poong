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
        this.add.bitmapText(gameWidth / 2, 40, "Pixel", "GAME MODIFIERS", 22).setOrigin(0.5)

        this.cursor = this.add.sprite(gameWidth / 2 - 250, 200, "ball")
        this.cursor_location = 0

        this.add.sprite(gameWidth / 2 - 150, 150, "arrow").setScale(2).setTintFill(0x000000)
        this.add.sprite(gameWidth / 2 - 150, 250, "arrow").setScale(2).setTintFill(0x000000).angle = 180
        this.countdown_text = this.add.bitmapText(gameWidth / 2 - 150, 200, "Pixel", "time: " + countdownMax, 20).setOrigin(0.5)

        this.add.sprite(gameWidth / 2 + 150, 150, "arrow").setScale(2).setTintFill(0x000000)
        this.add.sprite(gameWidth / 2 + 150, 250, "arrow").setScale(2).setTintFill(0x000000).angle = 180
        this.win_text = this.add.bitmapText(gameWidth / 2 + 150, 200, "Pixel", "win limit: " + winMax, 20).setOrigin(0.5)

        this.ball_reflection_text = this.add.bitmapText(gameWidth / 2, 310, "Pixel", "balls reflect off balls: press W", 16).setTintFill(0xFF0000).setOrigin(0.5)
        this.fast_ball_text = this.add.bitmapText(gameWidth / 2, 340, "Pixel", "50% faster balls: press A", 16).setTintFill(0xFF0000).setOrigin(0.5)
        this.increasing_speed_text = this.add.bitmapText(gameWidth / 2, 370, "Pixel", "balls speed up on reflect: press S", 16).setTintFill(0xFF0000).setOrigin(0.5)
        this.fast_paddles_text = this.add.bitmapText(gameWidth / 2, 400, "Pixel", "paddles are too fast: press D", 16).setTintFill(0xFF0000).setOrigin(0.5)

        this.add.bitmapText(gameWidth / 2, 490, "Pixel", "press SPACEBAR to play", 25).setOrigin(0.5)

        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP)
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN)
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT)
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT)
        SPACEBAR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)

        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W)
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A)
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S)
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D)
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


        //game changers
        if(Phaser.Input.Keyboard.JustDown(keyW)){
            ball_reflection = !ball_reflection
            if(ball_reflection){
                this.ball_reflection_text.setTintFill(0x008000)
            }
            else{
                this.ball_reflection_text.setTintFill(0xFF0000)
            }
        }
        if(Phaser.Input.Keyboard.JustDown(keyA)){
            fast_ball = !fast_ball
            if(fast_ball){
                this.fast_ball_text.setTintFill(0x008000)
            }
            else{
                this.fast_ball_text.setTintFill(0xFF0000)
            }
        }
        if(Phaser.Input.Keyboard.JustDown(keyS)){
            increasing_speed = !increasing_speed
            if(increasing_speed){
                this.increasing_speed_text.setTintFill(0x008000)
            }
            else{
                this.increasing_speed_text.setTintFill(0xFF0000)
            }
        }
        if(Phaser.Input.Keyboard.JustDown(keyD)){
            fast_paddles = !fast_paddles
            if(fast_paddles){
                this.fast_paddles_text.setTintFill(0x008000)
            }
            else{
                this.fast_paddles_text.setTintFill(0xFF0000)
            }
        }
    }
}