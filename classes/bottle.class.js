class Bottle extends DrawableObject {
    y = 340;
    width = 60;
    height = 80;

    IMAGES = [
        'img/6_salsa_bottle/1_salsa_bottle_on_ground.png',
        'img/6_salsa_bottle/2_salsa_bottle_on_ground.png'
    ];
  
    constructor() {
         super();
        let randomImage = this.IMAGES[Math.floor(Math.random() * this.IMAGES.length)];
        this.x = 400 + Math.random() * 1500;
        this.loadImage(randomImage); // Zufälliges Bild laden
        this.loadImages(this.IMAGES); // Alle Bilder für Animationen vorladen
      }
}