class AudioManager {
    constructor() {
        this.walking_sound = new Audio('audio/running.mp3');
    }

    playWalkingSound() {
        this.walking_sound.play();
    }

    stopWalkingSound() {
        this.walking_sound.pause();
    }
}