class BulletController{
  constructor(x, y, direction, spriteName){
    this.sprite = Nakama.bulletGroup.create(x, y, 'assets', spriteName);
    //this.sprite = Nakama.game.add.sprite(x, y, 'assets', spriteName);
    //Nakama.game.physics.arcade.enable(this.sprite);
    this.sprite.angle = Math.atan(direction.x/-direction.y)*180/Math.PI;
    this.sprite.anchor = new Phaser.Point(0.5, 0.5);
    this.sprite.body.checkWorldBounds = true;
    this.sprite.body.outOfBoundsKill  = true;
    this.sprite.body.velocity  = direction.setMagnitude(BulletController.BULLET_SPEED);
  }
}
BulletController.BULLET_SPEED = 1500;
