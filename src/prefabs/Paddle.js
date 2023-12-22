class Paddle extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, playerID){
        if(playerID == 1){ //left paddle
            super(scene, 40, gameHeight / 2, "paddle")
            this.cooldown_text = scene.add.bitmapText(this.x - 8, this.y, "Pixel", "100%", 8).setOrigin(1, 0.5)
        }
        else{ //right paddle
            super(scene, 760, gameHeight / 2, "paddle")
            this.tint = 0x000000
            this.cooldown_text = scene.add.bitmapText(this.x + 8, this.y, "Pixel", "100%", 8)
        }
        scene.add.existing(this)
        scene.physics.add.existing(this)
        this.setCollideWorldBounds(true)

        //stats
        this.playerID = playerID
        this.speed = 350
        this.ballSpeed = 450
        if(fast_ball){
            this.ballSpeed *= 2
        }
        this.cooldown = 0; this.cooldownMax = 8

        this.shootSound = scene.sound.add("shoot")
    }

    update(time, delta){
        this.cooldown_text.text = Math.floor(((this.cooldownMax -  this.cooldown) / this.cooldownMax) * 100) + "%"
        this.cooldown_text.y = this.y
        if(playing){
            this.movement()
            this.fireBall()
            if(this.cooldown > 0){
                this.cooldown -= delta * 0.001
                if(this.cooldown < 0){ //just to help with cooldown percentage text
                    this.cooldown = 0
                }
            }
        }
    }

    movement(){
        if(this.playerID == 1){ // WASD
            if(keyW.isDown){
                this.body.velocity.y = -this.speed
            }
            else if (keyS.isDown){
                this.body.velocity.y = this.speed
            }
            else{
                this.body.velocity.y = 0
            }
        }
        else{ // Arrow keys
            if(keyUP.isDown){
                this.body.velocity.y = -this.speed
            }
            else if (keyDOWN.isDown){
                this.body.velocity.y = this.speed
            }
            else{
                this.body.velocity.y = 0
            }
        }
    }

    fireBall(){
        if(this.cooldown <= 0){
            if(this.playerID == 1){
                if(Phaser.Input.Keyboard.JustDown(keyD)){
                    this.shootSound.play()
                    new Ball(this.scene, this.x + 9, this.y, 1, this.ballSpeed)
                    this.cooldown = this.cooldownMax
                }
            }
            else{
                if(Phaser.Input.Keyboard.JustDown(keyLEFT)){
                    this.shootSound.play()
                    new Ball(this.scene, this.x - 9, this.y, 2, this.ballSpeed)
                    this.cooldown = this.cooldownMax
                }
            }
        }
    }

    reset(){
        this.y = gameHeight / 2
        this.body.velocity.y = 0
        this.cooldown = 0
    }
}