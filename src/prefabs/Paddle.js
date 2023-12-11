class Paddle extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, playerID){
        if(playerID == 1){ //left paddle
            super(scene, 30, gameHeight / 2, "paddle")
        }
        else{ //right paddle
            super(scene, 770, gameHeight / 2, "paddle")
            this.tint = 0x000000
        }
        scene.add.existing(this)
        scene.physics.add.existing(this)
        this.setCollideWorldBounds(true)

        //stats
        this.playerID = playerID
        this.speed = 250
        this.cooldown = 0; this.cooldownMax = 0
    }

    update(){
        if(playing){
            this.movement()
            this.fireBall()
            this.cooldown--
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
                    let ball = new Ball(this.scene, this.x + 9, this.y, 1)
                    this.cooldown = this.cooldownMax
                }
            }
            else{
                if(Phaser.Input.Keyboard.JustDown(keyLEFT)){
                    let ball = new Ball(this.scene, this.x - 9, this.y, 2)
                    this.cooldown = this.cooldownMax
                }
            }
        }
    }

    reset(){
        this.y = gameHeight / 2
        this.body.velocity.y = 0
        this.cooldown = this.cooldownMax
    }
}