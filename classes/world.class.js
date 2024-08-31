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
    canvas;
    ctx;



    constructor(){
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas; // greift auf globale variable canvas nicht in constructor
        this.draw();
    }


    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // darstellung von character, enemies, und clouds
        this.ctx.drawImage(this.character.img, this.character.x, this.character.y, this.character.width, this.character.height);
        this.enemies.forEach(enemy =>{
            this.ctx.drawImage(enemy.img, enemy.x, enemy.y, enemy.width, enemy.height);
        });

        this.clouds.forEach(cloud =>{
            this.ctx.drawImage(cloud.img, cloud.x, cloud.y, cloud.width, cloud.height);
        });

        // draw() wird immer wieder aufgerufen
        let self = this; // erkennt keine this also muss in variable this einpacken
        requestAnimationFrame(function() {
            self.draw();
        });
    }
}