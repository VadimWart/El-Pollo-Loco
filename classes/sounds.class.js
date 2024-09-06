class AudioManager {
    constructor() {
        this.walking_sound = new Audio('audio/running.mp3');
        this.background_sound = new Audio('audio/background_sound.mp3');
        this.chicken_sound = new Audio('audio/chicken_dead.mp3');
        this.endboss_sound = new Audio('audio/endboss_dead.mp3');
        this.game_over_sound = new Audio('audio/game_over.mp3');
        this.hurt_sound = new Audio('audio/hurt_character.mp3');
        this.jump_sound = new Audio('audio/jump.mp3');
        this.win_sound = new Audio('audio/win.mp3');
    }

    playWalkingSound() {
        this.walking_sound.play();
    }

    stopWalkingSound() {
        this.walking_sound.pause();
    }

    playBackgroundSound() {
        this.background_sound.play();
    }

    stopBackgroundSound() {
        this.background_sound.pause();
    }

    playChickenSound() {
        this.chicken_sound.play();
    }

    stopChickenSound() {
        this.chicken_sound.pause();
    }

    playEndbossSound() {
        this.endboss_sound.play();
    }

    stopEndbossSound() {
        this.endboss_sound.pause();
    }

    playGameOverSound() {
        this.game_over_sound.play();
    }

    stopGameOverSound() {
        this.game_over_sound.pause();
    }

    playHurtSound() {
        this.hurt_sound.play();
    }

    stopHurtSound() {
        this.hurt_sound.pause();
    }

    playJumpSound() {
        this.jump_sound.play();
    }

    stopJumpSound() {
        this.jump_sound.pause();
    }

    playWinSound() {
        this.win_sound.play();
    }

    stopWinSound() {
        this.win_sound.pause();
    }
}