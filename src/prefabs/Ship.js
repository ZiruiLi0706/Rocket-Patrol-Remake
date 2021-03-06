
class Ship extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, texture, frame, pointValue){
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        this.points = pointValue;   // store pointValue
        this.moveSpeed = game.settings.spaceshipSpeed;         // pixels per frame
    }

    update(){
        this.x -= 2;

        if(this.x < -this.width){
            this.x = game.config.width;
        }
    }
    reset(){
        this.x = game.config.width + 50;
        this.alpha = 1;
    }
}
