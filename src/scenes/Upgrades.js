class Upgrades extends Phaser.Scene{
    constructor(){
        super("UpgradeScene")
    }

    preload(){
        this.load.image("upgrade paddle", "assets/upgrade_paddle.png")
        this.load.image("upgrade ball", "assets/upgrade_ball.png")
        this.load.image("upgrade cooldown", "assets/upgrade_cooldown.png")
        this.load.image("finished", "assets/finished.png")
    }

    create(){
        playing = false
        this.player1_finished = false; this.player2_finished = false;

        this.background1 = this.add.rectangle(170, gameHeight / 2, 300, 380, 0x0000FF).setOrigin(0.5)
        this.upgrade1_1 = this.add.sprite(130, 140, "upgrade paddle");
        this.upgrade1_1_text = this.add.bitmapText(180, 130, "Pixel", upgrade1_1_cost, 25)
        this.upgrade2_1 = this.add.sprite(130, 230, "upgrade ball");
        this.upgrade2_1_text = this.add.bitmapText(180, 220, "Pixel", upgrade2_1_cost, 25)
        this.upgrade3_1 = this.add.sprite(130, 320, "upgrade cooldown");
        this.upgrade3_1_text = this.add.bitmapText(180, 310, "Pixel", upgrade3_1_cost, 25)
        this.finished_1 = this.add.sprite(175, 410, "finished")

        this.background2 = this.add.rectangle(gameWidth - 170, gameHeight / 2, 300, 380, 0x0000FF).setOrigin(0.5)
        this.upgrade1_2 = this.add.sprite(gameWidth - 130, 140, "upgrade paddle");
        this.upgrade1_2_text = this.add.bitmapText(gameWidth - 180, 130, "Pixel", upgrade1_2_cost, 25).setOrigin(1, 0.5)
        this.upgrade2_2 = this.add.sprite(gameWidth - 130, 230, "upgrade ball");
        this.upgrade2_2_text = this.add.bitmapText(gameWidth - 180, 220, "Pixel", upgrade2_2_cost, 25).setOrigin(1, 0.5)
        this.upgrade3_2 = this.add.sprite(gameWidth - 130, 320, "upgrade cooldown");
        this.upgrade3_2_text = this.add.bitmapText(gameWidth - 180, 310, "Pixel", upgrade3_2_cost, 25).setOrigin(1, 0.5)
        this.finished_2 = this.add.sprite(gameWidth - 175, 410, "finished")
        
        this.cursor1 = this.physics.add.sprite(60, 140, "ball").setScale(2) //left cursor
        this.cursor1_location = 0
        this.cursor2 = this.physics.add.sprite(gameWidth - 60, 140, "ball").setScale(2) //right cursor
        this.cursor2_location = 0
    }

    update(){
        if(this.player1_finished && this.player2_finished){ //when everyone has confirmed they are done upgrading
            this.scene.stop()
            playing = true
            countdown = countdownMax
        }
        else{
            //player1 upgrades
            if(!this.player1_finished){
                if(Phaser.Input.Keyboard.JustDown(keyW)){ //move up
                    if(this.cursor1.y > 140){
                        this.cursor1_location--
                        this.cursor1.y -= 90
                    }
                }
                else if(Phaser.Input.Keyboard.JustDown(keyS)){ //move down
                    if(this.cursor1.y < 410){
                        this.cursor1_location++
                        this.cursor1.y += 90
                    }
                }
                else if(Phaser.Input.Keyboard.JustDown(keyD)){ //buy
                    if(this.cursor1_location == 0 && player1_points >= upgrade1_1_cost){ //bigger paddle
                        player1.setScale(1, player1.scaleY * 1.1)
                        player1_points -= upgrade1_1_cost
                        upgrade1_1_cost++
                        this.upgrade1_1_text.text = upgrade1_1_cost
                    }
                    else if (this.cursor1_location == 1 && player1_points >= upgrade2_1_cost){ //faster ball
                        player1.ballSpeed = player1.ballSpeed * 1.15
                        player1_points -= upgrade2_1_cost
                        upgrade2_1_cost++
                        this.upgrade2_1_text.text = upgrade2_1_cost
                    }
                    else if (this.cursor1_location == 2 && player1_points >= upgrade3_1_cost){ //lower cooldown
                        player1.cooldownMax *= 0.85
                        player1_points -= upgrade3_1_cost
                        upgrade3_1_cost++
                        this.upgrade3_1_text.text = upgrade3_1_cost
                    }
                    else if (this.cursor1_location == 3){
                        this.player1_finished = true
                        this.SetOptionsInvisible(1)
                    }
                }
            }

             //player 2 upgrades
            if(!this.player2_finished){
                if(Phaser.Input.Keyboard.JustDown(keyUP)){ //move up
                    if(this.cursor2.y > 140){
                        this.cursor2_location--
                        this.cursor2.y -= 90
                    }
                }
                else if(Phaser.Input.Keyboard.JustDown(keyDOWN)){ //move down
                    if(this.cursor2.y < 410){
                        this.cursor2_location++
                        this.cursor2.y += 90
                    }
                }
                else if(Phaser.Input.Keyboard.JustDown(keyLEFT)){ //buy
                    if(this.cursor2_location == 0 && player2_points >= upgrade1_2_cost){ //bigger paddle
                        player2.setScale(1, player2.scaleY * 1.1)
                        player2_points -= upgrade1_2_cost
                        upgrade1_2_cost++
                        this.upgrade1_2_text.text = upgrade1_2_cost
                    }
                    else if (this.cursor2_location == 1 && player2_points >= upgrade2_2_cost){ //faster ball
                        player2.ballSpeed = player2.ballSpeed * 1.15
                        player2_points -= upgrade2_2_cost
                        upgrade2_2_cost++
                        this.upgrade2_2_text.text = upgrade2_2_cost
                    }
                    else if (this.cursor2_location == 2 && player2_points >= upgrade3_2_cost){ //lower cooldown
                        player2.cooldownMax *= 0.85
                        player2_points -= upgrade3_2_cost
                        upgrade3_2_cost++
                        this.upgrade3_2_text.text = upgrade3_2_cost
                    }
                    else if (this.cursor2_location == 3){
                        this.player2_finished = true
                        this.SetOptionsInvisible(2)
                    }
                }
            }
        }
    }

    SetOptionsInvisible(player){ //hide or show upgrade options
        if(player == 1){
            this.background1.setVisible(false)
            this.upgrade1_1.setVisible(false); this.upgrade1_1_text.setVisible(false)
            this.upgrade2_1.setVisible(false); this.upgrade2_1_text.setVisible(false)
            this.upgrade3_1.setVisible(false); this.upgrade3_1_text.setVisible(false)
            this.finished_1.setVisible(false)
            this.cursor1.setVisible(false)
        }
        else{
            this.background2.setVisible(false)
            this.upgrade1_2.setVisible(false); this.upgrade1_2_text.setVisible(false)
            this.upgrade2_2.setVisible(false); this.upgrade2_2_text.setVisible(false)
            this.upgrade3_2.setVisible(false); this.upgrade3_2_text.setVisible(false)
            this.finished_2.setVisible(false)
            this.cursor2.setVisible(false)
        }
    }
}