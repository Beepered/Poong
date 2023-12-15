class Play extends Phaser.Scene{
    constructor(){
        super("playScene")
    }

    preload(){
        this.load.image("paddle", "assets/paddle.png")
        this.load.image("ball", "assets/ball.png")

        this.load.audio("shoot", "assets/shoot.wav")
        this.load.audio("reflect", "assets/reflect.wav")
        this.load.audio("point", "assets/point.wav")
    }

    create(){
        playing = true
        player1_points = 0; player2_points = 0
        upgrade1_1_cost = 3, upgrade2_1_cost = 3, upgrade3_1_cost = 3
        upgrade1_2_cost = 3, upgrade2_2_cost = 3, upgrade3_2_cost = 3
        countdown = 20
        
        this.scene.launch("UIScene")

        this.PaddleGroup = this.add.group({
            runChildUpdate: true
        })
        player1 = new Paddle(this, 1); this.PaddleGroup.add(player1)
        player2 = new Paddle(this, 2); this.PaddleGroup.add(player2)

        this.BallGroup = this.add.group({
            runChildUpdate: true
        })
        this.physics.add.overlap(this.PaddleGroup, this.BallGroup, (paddle, ball)=>{
            ball.reflect(paddle)
        })

        //player 1 (left) controls
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W)
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S)
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D)

        //player 2 (right) controls
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP)
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN)
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT)
    }

    update(){
        if(countdown <= 0 && playing){ //when countdown is finished and we are still playing
            Phaser.Actions.Call(this.PaddleGroup.getChildren(), function(paddle) {
                paddle.reset()
            }, this);
            this.BallGroup.children.each(function(ball) {
                ball.destroy()
            }, this);
            this.scene.launch("UpgradeScene")
        }

        if(player1_points >= 20 || player2_points >= 20){ //winner
            playing = false
            Phaser.Actions.Call(this.BallGroup.getChildren(), function(ball) {
                ball.body.setVelocity(0, 0)
            }, this);
            this.time.delayedCall(300, () => {
                this.scene.start("WinScene");
                this.scene.stop("UIScene")
            });
        }
    }
}