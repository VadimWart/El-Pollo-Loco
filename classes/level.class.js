class level {
    enemies;
    clouds;
    backgroundObjects;
    coins;
    bottles;
    level_end_x = 2250;

    constructor(enemies, coins, bottles, clouds, backgroundObjects,){
       this.enemies = enemies;
       this.coins = coins;
       this.bottles = bottles;
       this.clouds = clouds;
       this.backgroundObjects = backgroundObjects;
    }
}