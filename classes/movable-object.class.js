class MovableObject {
    x = 120;
    y = 280;
    img;
    height = 150;
    width = 100;
    imageCache = []; // array um bilder abzuspeichern, charachter und chicken animieren

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    moveRight() {
        console.log("Moving right");
    }

    moveLeft() {
        console.log("Moving right");
    }
}
