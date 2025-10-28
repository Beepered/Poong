class Ball extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, playerID, speed) {
    super(scene, x, y, "ball");
    scene.BallGroup.add(this);
    scene.add.existing(this);
    scene.physics.add.existing(this);

    //stats
    this.playerID = playerID;
    this.canReflect = true;
    this.reflectTime = 0;
    this.maxReflectTime = 0.1;

    if (this.playerID == 1) {
      //fired from left paddle
      this.body.velocity.x = speed;
      this.tint = 0xffffff;
    } else {
      //fired from right paddle
      this.body.velocity.x = -speed;
      this.tint = 0x000000;
    }

    if (random_balls) {
      this.tint = Phaser.Display.Color.RandomRGB().color;
      this.setScale(Phaser.Math.FloatBetween(0.65, 3));
    }

    this.reflectSound = scene.sound.add("reflect");
    this.pointSound = scene.sound.add("point");
  }

  update(time, delta) {
    if (this.y <= this.height) {
      this.y = this.height;
      this.body.velocity.y *= -1;
    } else if (this.y >= gameHeight - this.height) {
      this.y = gameHeight - this.height;
      this.body.velocity.y *= -1;
    }

    //giving points
    if (this.x <= -this.width) {
      player2_points++;
      this.pointSound.play();
      this.destroy();
    } else if (this.x >= gameWidth + this.width) {
      player1_points++;
      this.pointSound.play();
      this.destroy();
    }

    if (!this.canReflect) {
      this.reflectTime -= delta * 0.001;
      if (this.reflectTime <= 0) {
        this.canReflect = true;
      }
    }
  }

  reflect(paddle) {
    //reflect off paddle
    if (this.canReflect) {
      this.reflectSound.play();
      this.body.velocity.x *= -1;
      if (increasing_speed) {
        //increase speed on reflection
        this.body.velocity.x *= 1.1;
      }
      this.playerID = paddle.playerID;
      if (this.y < paddle.y - 4) {
        //hit top of paddle
        this.body.velocity.y = -50 * Phaser.Math.Between(1, 2.5);
      } else if (this.y > paddle.y + 4) {
        //hit bottom of paddle
        this.body.velocity.y = 50 * Phaser.Math.Between(1, 2.5);
      }
      if (this.playerID == 1) {
        this.tint = 0xffffff;
      } else {
        this.tint = 0x000000;
      }

      this.canReflect = false;
      this.reflectTime = this.maxReflectTime;
    }
  }

  ballReflect() {
    //reflect off another ball
    this.reflectSound.play();
    this.body.velocity.x *= -1;
    if (increasing_speed) {
      //increase speed on reflection
      this.body.velocity.x *= 1.1;
    }
    if (this.body.velocity.y == 0) {
      while (this.body.velocity.y == 0) {
        //make sure it does not stay at 0
        this.body.velocity.y = 80 * Phaser.Math.Between(-2, 2);
      }
    } else {
      this.body.velocity.y *= Phaser.Math.Between(2, 3);
    }

    if (this.playerID == 1) {
      //switch player id
      this.playerID = 0;
      this.tint = 0x000000;
    } else {
      this.playerID = 0;
      this.tint = 0xffffff;
    }

    if (random_balls) {
      this.tint = Phaser.Display.Color.RandomRGB().color;
    }
  }
}
