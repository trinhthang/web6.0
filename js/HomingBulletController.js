//setClale,loadingBar
//mask, stencil
class HomingBulletController{
  constructor(x, y, spriteName){
    this.sprite = Nakama.bulletGroup.create(x, y, 'assets', spriteName);
    this.sprite.anchor = new Phaser.Point(0.5, 0.5);
    this.sprite.body.checkWorldBounds = true;
    this.sprite.body.outOfBoundsKill = true;
  }
  update(){
    var enemyAlive = Nakama.enemyGroup.getFirstAlive();

    if (enemyAlive !=null && !enemyAlive.alive){
      enemyAlive = Nakama.enemyGroup.getFirstAlive();
    }
    if (enemyAlive != null){
      var direction = new Phaser.Point(enemyAlive.x - this.sprite.position.x, enemyAlive.y - this.sprite.position.y);
      
      this.sprite.body.velocity = direction.setMagnitude(HomingBulletController.HOMING_BULLET_SPEED);
      this.sprite.angle = Math.atan(direction.x/-direction.y)*180/Math.PI;
      // var vector = new Phaser.Point(0,-1);

      // if (Math.atan(direction.x/-direction.y) <= Math.atan(1/ 3)){
      //   this.sprite.body.velocity = direction.setMagnitude(HomingBulletController.HOMING_BULLET_SPEED);
      //   this.sprite.angle = Math.atan(direction.x/-direction.y)*180/Math.PI;
      // } else {
      //   if (direction.x > 0){
      //     vector.x = 1;
      //     vector.y = -3;
      //   } else if (direction.x < 0){
      //     vector.x = -1;
      //     vector.y = -3;
      //   } else {
      //     vector.x  = 0;
      //     vector.y  = -1;
      //   }
      //   this.sprite.body.velocity = vector.setMagnitude(HomingBulletController.HOMING_BULLET_SPEED);
      //   this.sprite.angle = Math.atan(vector.x/-vector.y)*180/Math.PI;
      // }
    } else {
      this.sprite.body.velocity = new Phaser.Point(0,-1).setMagnitude(HomingBulletController.HOMING_BULLET_SPEED);
      this.sprite.angle = 0;
    }
  }
}
HomingBulletController.HOMING_BULLET_SPEED = 400;
