class ChickenSmall extends MovableObject {
    y = 370;
    height = 50;
    width = 50;
    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/3_w.png'
    ];
    
    IMAGES_DEAD = [
        'img/3_enemies_chicken/chicken_small/2_dead/dead.png'
    ];

    // chicken_sound = new Audio('audio/chicken.mp3');
    // intervalMove;

    constructor(){
        super().loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);
        this.x = 400 + Math.random() * 1200;
        this.speed = 0.12 + Math.random() *  0.4;
        this.animate();
    }
 
    animate(){
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60); // speed

        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 100);
    }
}