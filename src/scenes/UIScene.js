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
        player1_points = 0; player2_points = 0
        upgrade1_1_cost = 3; upgrade2_1_cost = 3; upgrade3_1_cost = 3
        upgrade1_2_cost = 3; upgrade2_2_cost = 3; upgrade3_2_cost = 3

        this.player1_points_text = this.add.bitmapText(220, 40, "Pixel", player1_points, 30)
        this.player2_points_text = this.add.bitmapText(580, 40, "Pixel", player2_points, 30)

        this.time_text = this.add.bitmapText(gameWidth / 2, 60, "Pixel", countdown, 40).setOrigin(0.5)
    }

    update(time, delta) {
        this.player1_points_text.text = player1_points
        this.player2_points_text.text = player2_points

        if (countdown >= 0) {
           countdown -= delta * 0.001;
           this.time_text.text = Math.round(countdown)
        }
    }
}