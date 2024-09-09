class Chicken extends MovableObject  {
    y = 340;
    height = 80;
    width = 80;

    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ];

    IMAGES_DEAD = [
        'img/3_enemies_chicken/chicken_normal/2_dead/dead.png'
    ];

    // chicken_sound = new Audio('audio/chicken.mp3');
    // intervalMove;

    constructor(){
        super().loadImage(this.IMAGES_WALKING[0]);
        this.loadAllImages();
        this.x = 800 + Math.random() * 1200;
        this.speed = 0.15 + Math.random() * 0.5;
        this.animate();
    }

    loadAllImages() {
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);
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