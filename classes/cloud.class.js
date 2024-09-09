class Cloud extends MovableObject {
    width = 500;
    height = 250;

    constructor(){
        super().loadImage('img/5_background/layers/4_clouds/1.png');
        this.x = Math.random() * 2400; // cloud range
        this.y = 10 + Math.random() * 30;
        this.animate();
        
    }

    animate() { // wolken animation
        setInterval(() => {
            this.moveLeft(); // CLoud Direction
        }, 1000 / 60); // speed
    }

}