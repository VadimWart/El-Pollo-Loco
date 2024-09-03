class Cloud extends MovableObject {
    y = 50;
    width = 500;
    height = 250;
    speed = 0.15;

    constructor(){
        super().loadImage('img/5_background/layers/4_clouds/1.png');

        this.x = Math.random() * 500; // zahl zwischen 200 und 700
        this.animate();

    }

    animate() { // wolken animation
        this.moveLeft();
    }

    
    moveLeft() {
        setInterval(() => {
            this.x -= this.speed; // pixel
        }, 1000 / 60); // speed
    }

}