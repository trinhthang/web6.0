class EnemyController{
  constructor(x, y, spriteName, configs){
    this.sprite = Nakama.enemyGroup.create(x, y, 'assets', spriteName);
    // this.sprite = Nakama.game.add.sprite(x, y, 'assets', spriteName);
    // Nakama.game.physics.arcade.enable(this.sprite);
    this.sprite.collideWorldBounds = true;
    this.configs = configs;
    this.sprite.health = this.configs.health;
    // console.log(this.configs.health);
    this.sprite.body.velocity.x = EnemyController.ENEMY_SPEED;
  }
  update(){
    if (this.sprite.position.x >= EnemyController.MAX_X) {
      this.sprite.body.velocity.x = -EnemyController.ENEMY_SPEED;
    }
    if (this.sprite.position.x <= EnemyController.MIN_X) {
      this.sprite.body.velocity.x = EnemyController.ENEMY_SPEED;
    }
  }
}
EnemyController.ENEMY_SPEED = 400;
EnemyController.MAX_X = 600;
EnemyController.MIN_X = 0;
