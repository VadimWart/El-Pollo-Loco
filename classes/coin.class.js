class Coin extends MovableObject {
    width = 120;
    height = 120;

    IMAGES = [
        'img/8_coin/coin_1.png',
        'img/8_coin/coin_2.png'
    ];


    constructor() {
        super().loadImage(this.IMAGES[0]);
        this.loadImages(this.IMAGES);
        this.animate();
        this.x = 250 + Math.random() * 1800; 
        this.y = 50 + Math.random() * 300;
        
    } 

    animate() {
        this.coinBlink(); 
    }
    
    coinBlink() {
        setInterval(() => {
            this.playAnimation(this.IMAGES);
        }, 250);
    }
}  