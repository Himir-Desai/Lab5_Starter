// expose.js

window.addEventListener("DOMContentLoaded", init);
const confetti = new JSConfetti();

function init() {
  document
    .getElementById("horn-select")
    .addEventListener("change", updateImage);

  document
    .getElementById("volume-controls")
    .addEventListener("input", updateVolume);

  document.querySelector("button").addEventListener("click", playSound);
}

function updateImage() {
  const select = document.getElementById("horn-select");
  const image = document.querySelector("header + img");
  const audio = document.querySelector("audio");
  const selectedValue = select.value;

  image.src = `assets/images/${selectedValue}.svg`;
  audio.src = `assets/audio/${selectedValue}.mp3`;
}

function updateVolume() {
  const volumeInput = document
    .getElementById("volume-controls")
    .querySelector("input");
  const volumeIcon = document
    .getElementById("volume-controls")
    .querySelector("img");
  const volumeValue = parseInt(volumeInput.value);
  const audio = document.querySelector("audio");
  audio.volume = volumeValue / 100;

  if (volumeValue === 0) {
    volumeIcon.src = "assets/icons/volume-level-0.svg";
  } else if (volumeValue >= 1 && volumeValue < 33) {
    volumeIcon.src = "assets/icons/volume-level-1.svg";
  } else if (volumeValue >= 33 && volumeValue < 67) {
    volumeIcon.src = "assets/icons/volume-level-2.svg";
  } else {
    volumeIcon.src = "assets/icons/volume-level-3.svg";
  }
}

function playSound() {
  const audio = document.querySelector("audio");
  audio.play();

  const select = document.getElementById("horn-select");
  if (select.value === "party-horn") {
    confetti.addConfetti();
  }
}
