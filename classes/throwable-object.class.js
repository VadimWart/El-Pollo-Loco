class ThrowableObject extends MovableObject {
    width = 60;
    height = 60;
    isBrocken = false;

    IMAGES_BOTTLE_ROTATION = [
        'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png',
    ];
    
    IMAGES_BOTTLE_SPLASH = [
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png',
    ];


    constructor(x, y) {
        super().loadImage(this.IMAGES_BOTTLE_ROTATION[0]);
        this.loadAllImages();
        this.x = x;
        this.y = y;
        this.trow();
        this.animate();
    }

    loadAllImages() {
        this.loadImages(this.IMAGES_BOTTLE_ROTATION);
        this.loadImages(this.IMAGES_BOTTLE_SPLASH);
    }

    trow() {
        this.speedY = 15;
        this.applyGravity();
        this.intervalTrow = setInterval(() => {
            this.bottleOnTheGround();
                if (this.isBrocken) {
                    this.stopBottleAnimate();
                } else {
                    this.x += 2;
                }
        }, 10);
    }

    stopBottleAnimate() {
        clearInterval(this.applyGravity);
        clearInterval(this.intervalTrow);
    }

    animate() {
        this.intervalBottle = setInterval(() => {
            if (this.isBrocken && this.isAboveGround()) {
                this.playAnimation(this.IMAGES_BOTTLE_SPLASH);
            } else {
                this.playAnimation(this.IMAGES_BOTTLE_ROTATION);
            }
        }, 50);
    }

    bottleOnTheGround() {
        if (this.y >= 360) {
            this.isBrocken = true;
            setTimeout(() => {
                this.x = -5000;
            }, 100);
        }
    }
}