class MovableObject extends DrawableObject {
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 1;
    energy = 100;
    lastHit = 0;


    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }

    isAboveGround() {
        if (this instanceof ThrowableObject) { // trhowable object should always fall
            return true;
        } else {
            return this.y < 140;
        }
    }

    // character.isColliding(chicken);
    isColliding(mo) {
        return this.x + this.width > mo.x &&
            this.y + this.height > mo.y &&
            this.x < mo.x &&
            this.y < mo.y + mo.height;
    }

    hit() {
        this.energy -= 5;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime(); // time save
        }
    }

    hitEnemy() {
        this.energy = 0;
    }

    hitEndboss() {
        this.energy -= 20;
        if (this.energy < 0) {
          this.energy = 0;
        } else {
          this.lastHit = new Date().getTime();
        }
      }

    hitByEndboss() {
        // Logik, was passiert, wenn der Charakter den Endboss trifft
        this.energy -= 100; // Beispiel: Energie um 100 reduzieren
        if (this.energy < 0) {
          this.energy = 0; // Energie kann nicht unter 0 fallen
        } else {
          this.lastHit = new Date().getTime();
        }
    }

    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit; // Differenc in ms
        timepassed = timepassed / 1000; // Difference in sek
        return timepassed < 1;
    }

    isDead() {
        return this.energy == 0;
    }

    playAnimation(images) {
        // walk animation
        let i = this.currentImage % images.length; // let i = 0 % 6; % = rest
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    moveRight() {
        this.x += this.speed;
    }

    moveLeft() {           
        this.x -= this.speed;     
    }

    jump() {
        this.speedY = 20;
    }

    jumpOfEnemy() {
        this.speedY = 20;
    }
}

