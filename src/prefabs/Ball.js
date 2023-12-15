class Ball extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y, playerID, speed){
        super(scene, x, y, "ball")
        scene.BallGroup.add(this)
        scene.add.existing(this)
        scene.physics.add.existing(this)

        //stats
        this.playerID = playerID

        if(this.playerID == 1){ //fired from left paddle
            this.body.velocity.x = speed 
            this.tint = 0xFFFFFF
        }
        else{ //fired from right paddle
            this.body.velocity.x = -speed
            this.tint = 0x000000
        }

        this.reflectSound = scene.sound.add("reflect")
        this.pointSound = scene.sound.add("point")
    }

    update(){
        if(this.y <= this.height || this.y >= gameHeight - this.height){
            this.body.velocity.y *= -1
        }

        //giving points
        if(this.x <= -this.width){
            player2_points++
            this.pointSound.play()
            this.destroy()
        }
        else if (this.x >= gameWidth + this.width){
            player1_points++
            this.pointSound.play()
            this.destroy()
        }
    }

    reflect(paddle){ //reflect off paddle
        this.reflectSound.play()
        this.body.velocity.x *= -1
        this.playerID = paddle.playerID
        if(this.y < paddle.y - 4){ //hit top of paddle
            this.body.velocity.y = -50 * Phaser.Math.Between(1, 2.5)
        }
        else if(this.y > paddle.y + 4){ //hit bottom of paddle
            this.body.velocity.y = 50 * Phaser.Math.Between(1, 2.5)
        }
        if(this.playerID == 1){
            this.tint = 0xFFFFFF
        }
        else{
            this.tint = 0x000000
        }
    }
}