class ChickenSmall extends MovableObject {
    y = 370;
    height = 50;
    width = 50;
    intervalMove;

    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/3_w.png'
    ];
    
    IMAGES_DEAD = [
        'img/3_enemies_chicken/chicken_small/2_dead/dead.png'
    ];


    constructor(){
        super().loadImage(this.IMAGES_WALKING[0]);
        this.audioManager = new AudioManager();
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);
        this.x = 400 + Math.random() * 1200;
        this.speed = 0.12 + Math.random() *  0.4;
        this.animate();
    }
 
    animate(){
        this.smallChickenMove();
        this.smallChickenAnimatiionDeadWalk();
    }

    smallChickenMove() {
        let intervalMove = setInterval(() => {
            this.moveLeft();
        }, 1000 / 60); // speed
    }

    smallChickenAnimatiionDeadWalk() {
        let intervalDeadMove = setInterval(() => {
             if (this.isDead()) {
                this.audioManager.playChickenSound();
                clearInterval(this.intervalMove);
                this.playAnimation(this.IMAGES_DEAD);
                clearInterval(intervalDeadMove);
            } else {
                this.playAnimation(this.IMAGES_WALKING);
            }    
        }, 100);
    }
}