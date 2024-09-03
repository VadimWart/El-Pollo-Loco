class MovableObject {
    x = 120;
    y = 280;
    img;
    height = 150;
    width = 100;
    imageCache = {}; // JSON/Objekt um bilder abzuspeichern, charachter und chicken animieren
    currentImage = 0;
    speed = 0.15;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    /**
     * 
     * @param {Array} arr - ['img/image1.png', 'img/image2.png', ... ] 
     */
    loadImages(arr){
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    moveRight() {
        console.log("Moving right");
    }

    moveLeft() {
        setInterval(() => {
            this.x -= this.speed; // pixel
        }, 1000 / 60); // speed
    }
}
