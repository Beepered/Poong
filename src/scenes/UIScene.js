class UIScene extends Phaser.Scene
{
    //display this above the play scene
    constructor (){
        super("UIScene");
    }

    preload(){
        this.load.bitmapFont("Pixel", "assets/pixel font.png", "assets/pixel font.xml")
    }

    create (){
        this.player1_points_text = this.add.bitmapText(220, 40, "Pixel", player1_points, 30)
        this.player2_points_text = this.add.bitmapText(580, 40, "Pixel", player2_points, 30)

        this.time_text = this.add.bitmapText(gameWidth / 2, 60, "Pixel", time, 40).setOrigin(0.5)
    }
    
    update(){
        this.player1_points_text.text = player1_points
        this.player2_points_text.text = player2_points

        if(playing){
            time--
            this.time_text.text = Math.floor(time / 60)
        }
    }

}