class WinScene extends Phaser.Scene{
    constructor(){
        super("WinScene")
    }

    preload(){
        this.load.bitmapFont("Pixel", "assets/pixel font.png", "assets/pixel font.xml")
    }

    create(){
        if(player1_points > player2_points){ //who won
            let win_text = this.add.bitmapText(gameWidth / 2, 260, "Pixel", "Player 1 WINS", 50).setOrigin(0.5)
        }
        else{
            let win_text = this.add.bitmapText(gameWidth / 2, 260, "Pixel", "Player 2 WINS", 50).setOrigin(0.5)
        }
        this.add.bitmapText(gameWidth / 2, 360, "Pixel", player1_points + " - " + player2_points, 40).setOrigin(0.5)
        this.add.bitmapText(gameWidth / 2, 500, "Pixel", "Press SPACEBAR", 20).setOrigin(0.5)
        
        SPACEBAR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }

    update(){
        if(Phaser.Input.Keyboard.JustDown(SPACEBAR)){
            this.scene.start("menuScene")
        }
    }
}