class AudioManager {
    constructor() {
        this.walking_sound = new Audio('audio/running.mp3');
        this.background_sound = new Audio('audio/background_sound.mp3');
        this.chicken_sound = new Audio('audio/chicken_dead.mp3');
        this.endboss_sound = new Audio('audio/endboss_dead.mp3');
        this.walking_sound = new Audio('audio/running.mp3');
        this.walking_sound = new Audio('audio/running.mp3');
        this.walking_sound = new Audio('audio/running.mp3');
        this.walking_sound = new Audio('audio/running.mp3');
        this.walking_sound = new Audio('audio/running.mp3');
    }

    playWalkingSound() {
        this.walking_sound.play();
    }

    stopWalkingSound() {
        this.walking_sound.pause();
    }
}