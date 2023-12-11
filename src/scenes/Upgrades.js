class Upgrades extends Phaser.Scene{
    constructor(){
        super("UpgradeScene")
    }

    preload(){
        this.load.image("upgrade 1", "assets/upgrade 1.png")
        this.load.image("upgrade 2", "assets/upgrade 2.png")
        this.load.image("upgrade 3", "assets/upgrade 3.png")
        this.load.image("finished", "assets/finished.png")
    }

    create(){
        playing = false
        this.player1_finished = false; this.player2_finished = false;

        let background1 = this.add.rectangle(200, gameHeight / 2, 370, 450, 0x0000FF).setOrigin(0.5)
        this.upgrade1_1 = this.add.sprite(95, 140, "upgrade 1"); this.add.bitmapText(150, 140, "Pixel", upgrade1_1_cost, 20)
        this.upgrade2_1 = this.add.sprite(95, 240, "upgrade 2"); this.add.bitmapText(150, 240, "Pixel", upgrade2_1_cost, 20)
        this.upgrade3_1 = this.add.sprite(95, 340, "upgrade 3"); this.add.bitmapText(150, 340, "Pixel", upgrade3_1_cost, 20)
        let finished_1 = this.add.sprite(135, 440, "finished")

        let background2 = this.add.rectangle(600, gameHeight / 2, 370, 450, 0x0000FF).setOrigin(0.5)
        this.upgrade1_2 = this.add.sprite(705, 140, "upgrade 1"); this.add.bitmapText(650, 140, "Pixel", upgrade1_1_cost, 20)
        this.upgrade2_2 = this.add.sprite(705, 240, "upgrade 2"); this.add.bitmapText(650, 240, "Pixel", upgrade2_2_cost, 20)
        this.upgrade3_2 = this.add.sprite(705, 340, "upgrade 3"); this.add.bitmapText(650, 340, "Pixel", upgrade3_2_cost, 20)
        let finished_2 = this.add.sprite(665, 440, "finished")
        
        this.cursor1 = this.physics.add.sprite(40, 140, "ball").setScale(2) //left cursor
        this.cursor1_location = 0
        this.cursor2 = this.physics.add.sprite(760, 140, "ball").setScale(2) //right cursor
        this.cursor2_location = 0
    }

    update(){
        //updating upgrade text
        this.upgrade1_1.text = upgrade1_1_cost
        this.upgrade2_1.text = upgrade2_1_cost
        this.upgrade3_1.text = upgrade3_1_cost

        this.upgrade1_2.text = upgrade1_2_cost
        this.upgrade2_2.text = upgrade2_2_cost
        this.upgrade3_2.text = upgrade3_2_cost

        if(this.player1_finished && this.player2_finished){ //when everyone has confirmed they are done upgrading
            this.scene.stop()
            playing = true
            time = 1260
        }
        else{
            if(!this.player1_finished){ //player1 upgrades
                if(Phaser.Input.Keyboard.JustDown(keyW)){ //move up
                    if(this.cursor1.y > 140){
                        this.cursor1_location--
                        this.cursor1.y -= 100
                    }
                }
                if(Phaser.Input.Keyboard.JustDown(keyS)){ //move down
                    if(this.cursor1.y < 440){
                        this.cursor1_location++
                        this.cursor1.y += 100
                    }
                }
                if(Phaser.Input.Keyboard.JustDown(keyD)){ //buy
                    if(this.cursor1_location == 0){
                        player1_points -= upgrade1_1_cost
                        upgrade1_1_cost *= 1.5
                        upgrade1_1_cost = Math.floor(upgrade1_1_cost)
                    }
                    else if (this.cursor1_location == 1){
                        player1_points -= upgrade2_1_cost
                        upgrade2_1_cost *= 1.5
                        upgrade2_1_cost = Math.floor(upgrade2_1_cost)
                    }
                    else if (this.cursor1_location == 2){
                        player1_points -= upgrade3_1_cost
                        upgrade3_1_cost *= 1.5
                        upgrade3_1_cost = Math.floor(upgrade3_1_cost)
                    }
                    else if (this.cursor1_location == 3){
                        this.player1_finished = true
                    }
                }
            }


            if(!this.player2_finished){ //player 2 upgrades
                if(Phaser.Input.Keyboard.JustDown(keyUP)){ //move up
                    if(this.cursor2.y > 140){
                        this.cursor2_location--
                        this.cursor2.y -= 100
                    }
                }
                if(Phaser.Input.Keyboard.JustDown(keyDOWN)){ //move down
                    if(this.cursor2.y < 440){
                        this.cursor2_location++
                        this.cursor2.y += 100
                    }
                }
                if(Phaser.Input.Keyboard.JustDown(keyLEFT)){ //buy
                    if(this.cursor2_location == 0){
                        player2_points -= upgrade1_2_cost
                        upgrade1_2_cost *= 1.5
                        upgrade1_2_cost = Math.floor(upgrade1_2_cost)
                    }
                    else if (this.cursor2_location == 1){
                        player2_points -= upgrade2_2_cost
                        upgrade2_2_cost *= 1.5
                        upgrade2_2_cost = Math.floor(upgrade2_2_cost)
                    }
                    else if (this.cursor2_location == 2){
                        player2_points -= upgrade3_2_cost
                        upgrade3_2cost *= 1.5
                        upgrade3_2_cost = Math.floor(upgrade3_2_cost)
                    }
                    else if (this.cursor2_location == 3){
                        this.player2_finished = true
                    }
                }
            }
        }
    }
}