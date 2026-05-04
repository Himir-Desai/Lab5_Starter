// explore.js
window.addEventListener("DOMContentLoaded", init);

function init() {
  const synth = window.speechSynthesis;
  synth.addEventListener("voiceschanged", populateVoiceList);

  document.querySelector("button").addEventListener("click", speakText);
}

function populateVoiceList() {
  const synth = window.speechSynthesis;
  const voiceSelect = document.getElementById("voice-select");
  let voices = synth.getVoices();
  for (const voice of voices) {
    const option = document.createElement("option");
    option.textContent = `${voice.name} (${voice.lang})`;

    if (voice.default) {
      option.textContent += " — DEFAULT";
    }

    option.setAttribute("data-lang", voice.lang);
    option.setAttribute("data-name", voice.name);
    voiceSelect.appendChild(option);
  }
}

function speakText() {
  const synth = window.speechSynthesis;
  const textInput = document.getElementById("text-to-speak").value;
  const voiceSelect = document.getElementById("voice-select");
  const selectedOption =
    voiceSelect.selectedOptions[0]?.getAttribute("data-name");
  const utterThis = new SpeechSynthesisUtterance(textInput);
  const img = document.querySelector("img[alt='Smiling face']");

  utterThis.addEventListener("start", () => {
    img.src = "assets/images/smiling-open.png";
  });

  utterThis.addEventListener("end", () => {
    img.src = "assets/images/smiling.png";
  });

  const voices = synth.getVoices();
  if (selectedOption) {
    for (const voice of voices) {
      if (voice.name === selectedOption) {
        utterThis.voice = voice;
        break;
      }
    }
  }

  synth.speak(utterThis);
}
