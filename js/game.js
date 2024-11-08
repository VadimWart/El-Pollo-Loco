let canvas;
let world;
let keyboard = new Keyboard();
let isMuted = false;

let background_sound = new Audio("audio/background_sound.mp3");
let win_sound = new Audio("audio/win.mp3");
let game_over_sound = new Audio("audio/game_over.mp3");

function init() {
  startLevel();
  canvas = document.getElementById("canvas");
  world = new World(canvas, keyboard);
  mobileButtons();
}

window.addEventListener("keydown", (e) => {
  if (e.keyCode == 39) {
    keyboard.RIGHT = true;
  }

  if (e.keyCode == 37) {
    keyboard.LEFT = true;
  }

  if (e.keyCode == 38) {
    keyboard.UP = true;
  }

  if (e.keyCode == 40) {
    keyboard.DOWN = true;
  }

  if (e.keyCode == 32) {
    keyboard.SPACE = true;
  }

  if (e.keyCode == 68) {
    keyboard.D = true;
  }
});

window.addEventListener("keyup", (e) => {
  if (e.keyCode == 39) {
    keyboard.RIGHT = false;
  }

  if (e.keyCode == 37) {
    keyboard.LEFT = false;
  }

  if (e.keyCode == 38) {
    keyboard.UP = false;
  }

  if (e.keyCode == 40) {
    keyboard.DOWN = false;
  }

  if (e.keyCode == 32) {
    keyboard.SPACE = false;
  }

  if (e.keyCode == 68) {
    keyboard.D = false;
  }
});

function mobileButtons() {
  document.getElementById("btnLeft").addEventListener("touchstart", (e) => {
    e.preventDefault();
    keyboard.LEFT = true;
  });
  document.getElementById("btnLeft").addEventListener("touchend", (e) => {
    e.preventDefault();
    keyboard.LEFT = false;
  });
  document.getElementById("btnRight").addEventListener("touchstart", (e) => {
    e.preventDefault();
    keyboard.RIGHT = true;
  });
  document.getElementById("btnRight").addEventListener("touchend", (e) => {
    e.preventDefault();
    keyboard.RIGHT = false;
  });
  document.getElementById("btnJump").addEventListener("touchstart", (e) => {
    e.preventDefault();
    keyboard.SPACE = true;
  });
  document.getElementById("btnJump").addEventListener("touchend", (e) => {
    e.preventDefault();
    keyboard.SPACE = false;
  });
  document.getElementById("btnThrow").addEventListener("touchstart", (e) => {
    e.preventDefault();
    keyboard.THROW = true;
  });
  document.getElementById("btnThrow").addEventListener("touchend", (e) => {
    e.preventDefault();
    keyboard.THROW = false;
  });
}

function pauseSounds() {
  background_sound.pause();
  background_sound.currentTime = 0;
  win_sound.pause();
  win_sound.currentTime = 0;
  game_over_sound.pause();
  game_over_sound.currentTime = 0;
}

function startLevel() {
  initLevel();
}

function startGame() {
  let startScreen = document.getElementById("startScreen");
  let endScreenWin = document.getElementById("endScreenWin");
  let endScreenLose = document.getElementById("endScreenLose");
  init();
  background_sound.play();
  startScreen.style.display = "none";
  endScreenWin.style.display = "none";
  endScreenLose.style.display = "none";
}

function restartGame() {
  clearAllIntervals();
  pauseSounds();

  let endScreenWin = document.getElementById("endScreenWin");
  let endScreenLose = document.getElementById("endScreenLose");
  let startScreen = document.getElementById("startScreen");

  endScreenWin.style.display = "none";
  endScreenLose.style.display = "none";
  startScreen.style.display = "none";

  init();
  background_sound.play();
}

function goToMenu() {
  clearAllIntervals();
  pauseSounds();

  let startScreen = document.getElementById("startScreen");
  let endScreenWin = document.getElementById("endScreenWin");
  let endScreenLose = document.getElementById("endScreenLose");

  endScreenWin.style.display = "none";
  endScreenLose.style.display = "none";
  startScreen.style.display = "block";
}

function openWinScreen() {
  clearAllIntervals();
  background_sound.pause();
  win_sound.play();
  let endScreenWin = document.getElementById("endScreenWin");
  endScreenWin.style.display = "flex";
}

function openLoseScreen() {
  clearAllIntervals();
  background_sound.pause();
  game_over_sound.play();
  let endScreenLose = document.getElementById("endScreenLose");
  endScreenLose.style.display = "flex";
}

function clearAllIntervals() {
  for (let i = 1; i < 9999; i++) {
    window.clearInterval(i);
  }
}

function toggleMute() {
  const muteButton = document.querySelector(".button-mute");
  const mobileMuteBtn = document.getElementById("muteBtn");

  if (!isMuted) {
    mobileMuteBtn.innerText = "UNMUTE";
    background_sound.muted = true;
    win_sound.muted = true;
    game_over_sound.muted = true;
    world.audioManager.muteGameSounds();
    world.character.audioManager.muteGameSounds();
    world.level.endboss.forEach((endboss) => {
      endboss.audioManager.muteGameSounds();
    });
    isMuted = true;
  } else {
    mobileMuteBtn.innerText = "MUTE";
    background_sound.muted = false;
    win_sound.muted = false;
    game_over_sound.muted = false;
    world.audioManager.unmuteGameSounds();
    world.character.audioManager.unmuteGameSounds();
    world.level.endboss.forEach((endboss) => {
      endboss.audioManager.unmuteGameSounds();
    });
    isMuted = false;
  }
}

function checkOrientation() {
  const landscapeScreen = document.getElementById("landscapeScreen");
  const gameContainer = document.querySelector(".game-container");
  const overlay = document.querySelector(".overlay");
  const muteBtn = document.querySelector(".button-mute");

  if (window.innerWidth < 1200 && window.innerHeight < window.innerWidth) {
    landscapeScreen.style.display = "none";
    muteBtn.style.display = "none";
    gameContainer.style.display = "block";
    overlay.style.display = "flex";
  } else if (
    window.innerWidth < 1200 &&
    window.innerHeight > window.innerWidth
  ) {
    landscapeScreen.style.display = "flex";
    muteBtn.style.display = "none";
    gameContainer.style.display = "none";
    overlay.style.display = "flex";
  } else {
    landscapeScreen.style.display = "none";
    muteBtn.style.display = "block";
    gameContainer.style.display = "block";
    overlay.style.display = "flex";
  }
}

window.addEventListener("resize", checkOrientation);
window.addEventListener("orientationchange", checkOrientation);
window.addEventListener("load", checkOrientation);
