const animatedGif = document.getElementById("animated-gif");
const pauseButton = document.getElementById("pause-button");
let isPaused = false;
let gifSrc = animatedGif.src;

pauseButton.addEventListener("click", () => {
  if (isPaused) {
    animatedGif.src = gifSrc;
    pauseButton.textContent = "Pause";
  } else {
    gifSrc = animatedGif.src; 
    animatedGif.src = ""; 
    pauseButton.textContent = "Play";
  }
  isPaused = !isPaused;
});