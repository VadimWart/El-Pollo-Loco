class StatusBar extends DrawableObject {
    x = 50;
    y = 0;
    width = 200;
    height = 60;
    percentage = 100;

    IMAGES = [
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/0.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/20.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/40.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/60.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/80.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/100.png'

    ];


    constructor() {
        super();
        // Lade alle Bilder ins imageCache
        this.loadImages(this.IMAGES);
        this.setPercentage(100); // Setze das anfängliche Bild basierend auf dem Prozentsatz
    }

    // Setzt den Prozentsatz und wählt das entsprechende Bild aus dem Cache
    setPercentage(percentage) {
        this.percentage = percentage; // => 0 ... 5
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path]; // Hole das Bild aus dem Cache
    }

    // Bestimmt das entsprechende Bild basierend auf dem Prozentsatz
    resolveImageIndex() {
        if(this.percentage == 100) {
            return 5;
        } else if (this.percentage > 80) {
            return 4;
        } else if (this.percentage > 60) {
            return 3;
        } else if (this.percentage > 40) {
            return 2;
        } else if (this.percentage > 20) {
            return 1;
        } else {
            return 0;
        }
    }
}