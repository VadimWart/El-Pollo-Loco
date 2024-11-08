class World {
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    lastThrowTime = 0;
    character = new Character();
    statusBar = new StatusBar();
    statusBarCoin = new StatusBarCoin();
    statusBarBottles = new StatusBarBottles();
    statusBarEndboss = new StatusBarEndboss();
    setHitBottles = new Set(); //  Set ist eine spezielle Art von Collection, die nur einzigartige Werte speichert.
    throwableObject = [];
    coins = [];
    bottles = [];
    endbossAlert = false;


    constructor(canvas, keyboard){
        this.audioManager = new AudioManager();
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas; // greift auf globale variable canvas nicht in constructor
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    }

    setWorld() {
        this.character.world = this;
    }

    run() {
        setInterval(()  => {
            this.checkCollisions();
            this.checkThrowObjects();
            this.checkCollisionsBottles();
            this.checkCollisionsCoins();
            this.checkCollisionsByEndboss();
            this.checkBottleCollisionWithAllEnemies();
            this.jumpOnEnemy();
        }, 100);
    }

    draw() {
        // world löschen
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);
        // darstellung von Objekten wie character, enemies, und clouds ... .
        this.addObjectsToMap(this.level.backgroundObjects);
        this.addToMap(this.character);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.endboss);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.bottles);
        this.addObjectsToMap(this.throwableObject);
        this.ctx.translate(-this.camera_x, 0);
        // ------- Space for fixed objrcts -------
        this.addToMap(this.statusBar);
        this.addToMap(this.statusBarCoin);
        this.addToMap(this.statusBarBottles);
        this.addToMap(this.statusBarEndboss);
        this.ctx.translate(this.camera_x, 0);

        this.ctx.translate(-this.camera_x, 0);
        
        // draw() wird immer wieder aufgerufen
        let self = this; // erkennt keine this also muss in variable this einpacken
        requestAnimationFrame(function() {
            self.draw();
        });
    }

    checkThrowObjects() {
        let now = Date.now();
        if (this.keyboard.D && this.bottles.length > 0 && now - this.lastThrowTime >= 800) {
          let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100);
        //   this.audioManager.playThrowingSound();
          this.throwableObject.push(bottle);
          this.bottles.pop();
          this.statusBarBottles.setPercentage(this.statusBarBottles.percentage - 12.5);
          this.lastThrowTime = now;
        }
    }

    /**
     * Checks if a bottle colliding with an enemy
     * 
     */
    checkBottleCollisionWithAllEnemies() {
        this.throwableObject.forEach((bottle, bottleIndex) => {
        this.checkBottleCollisionWithEnemies(bottle, bottleIndex);
        this.checkBottleCollisionWithEndBoss(bottle, bottleIndex);
        });
    }

    checkBottleCollisionWithEnemies(bottle, bottleIndex) {
        this.level.enemies.forEach((enemy, enemyIndex) => {
        if (bottle.isColliding(enemy)) {
            // this.audioManager.playKillSound();
            enemy.hitEnemy();
            this.deleteEnemy(enemyIndex);
            this.deleteBottle(bottleIndex);
        }
        });
    }

    checkBottleCollisionWithEndBoss(bottle, bottleIndex) {
        this.level.endboss.forEach((endboss, endbossIndex) => {
        if (bottle.isColliding(endboss) && !this.setHitBottles.has(bottle)) {
            endboss.hitEndboss();
            this.statusBarEndboss.setPercentage(endboss.energy);
            this.setHitBottles.add(bottle);
            this.deleteBottle(bottleIndex);
        }
        });
    }

    jumpOnEnemy() {
        this.level.enemies.forEach((enemy, index) => {
            if (this.character.isColliding(enemy) && this.character.isAboveGround() && this.character.speedY < 0) {
                this.character.jumpOfEnemy();
                enemy.hitEnemy();
                this.deleteEnemy(index);
            }
        });
    }

    checkCollisions() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                this.character.hit();
                this.statusBar.setPercentage(this.character.energy);
            }
        });
    }

    checkCollisionsBottles() {
        this.level.bottles.forEach((bottle, index) =>{
            if (this.character.isColliding(bottle)) {
                this.audioManager.playPopSound();
                this.collectBottles(bottle, index);
                this.statusBarBottles.setPercentage(this.statusBarBottles.percentage + 12.5);
          }
        });
    }

    checkCollisionsCoins() {
        this.level.coins.forEach((coin, index) => {
            if (this.character.isColliding(coin)) {
                this.audioManager.playCoinSound();
                this.collectCoins(coin, index);
                this.statusBarCoin.setPercentage(this.statusBarCoin.percentage + 12.5);
            }
        });
    }

    checkCollisionsByEndboss() {
        this.level.endboss.forEach((endboss) => { // Iteriere durch das endboss-Array
            if (this.character.isColliding(endboss)) { // Prüfe auf Kollision mit dem Endboss
                this.character.hitByEndboss();
                this.statusBar.setPercentage(this.character.energy);
            }
        });
    }   

    // function und forEach für darstellung von Objekten
    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }

    // function von darstellung von Objekten
    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }

        mo.draw(this.ctx);

        if (mo.otherDirection) {
            this.flipImageBack(mo);   
        }
    }

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }

    collectBottles(bottle, index) {
        // this.audioManager.playBottleSound();
        this.bottles.push(bottle);// Füge die Flasche dem Inventar des Charakters hinzu
        this.level.bottles.splice(index, 1);// Entferne die Flasche aus dem Level
    }

    collectCoins(coin, index) {
        // this.audioManager.playBottleSound();
        this.coins.push(coin);// Füge die Coins dem Inventar des Charakters hinzu
        this.level.coins.splice(index, 1);// Entferne die Coins aus dem Level
    }

    /**
     * Delete enemy from the array
     * 
     */
    deleteEnemy(index) {
        setTimeout(() => {
        level1.enemies.splice(index, 1);
        }, 400); 
    }

    /**
     * Delete bottle from the array
     * 
     */
    deleteBottle(index) {
        setTimeout(() => {
        this.throwableObject.splice(index, 1);
        }, 100); 
    }
}