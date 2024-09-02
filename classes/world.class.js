class World {

    character = new Character();
    enemies = [
        new Chicken(),
        new Chicken(),
        new Chicken(),
    ];
    clouds = [
        new Cloud()
    ];
    backgroundObjects = [
        new BackgroundObject('img/5_background/layers/air.png', 0),
        new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 0),
        new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 0),
        new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 0),
        
    ];
    canvas;
    ctx;



    constructor(){
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas; // greift auf globale variable canvas nicht in constructor
        this.draw();
    }


    draw() {
        // world löschen
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // darstellung von Objekten wie character, enemies, und clouds ... .
        this.addObjectsToMap(this.backgroundObjects);
        this.addToMap(this.character);
        this.addObjectsToMap(this.clouds);
        this.addObjectsToMap(this.enemies);
        
        
        // draw() wird immer wieder aufgerufen
        let self = this; // erkennt keine this also muss in variable this einpacken
        requestAnimationFrame(function() {
            self.draw();
        });
    }

    // function und forEach für darstellung von Objekten
    addObjectsToMap(objects){
        objects.forEach(o => {
            this.addToMap(o);
        });
    }

    // function von darstellung von Objekten
    addToMap(mo) {
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
    }
}