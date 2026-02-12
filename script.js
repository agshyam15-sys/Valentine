// YES button
document.getElementById("yes").onclick = function() {
  alert("You escaped the Upside Down with me ❤️");
};

// Moving NO button
document.getElementById("no").onmouseover = function() {
  this.style.position = "absolute";
  this.style.top = Math.random() * window.innerHeight + "px";
  this.style.left = Math.random() * window.innerWidth + "px";
};

// Lightning flashes randomly
function lightningFlash() {
  const lightning = document.querySelector(".lightning");
  lightning.style.opacity = 0.8;

  setTimeout(() => {
    lightning.style.opacity = 0;
  }, 100);
}

setInterval(() => {
  if (Math.random() > 0.7) {
    lightningFlash();
  }
}, 2000);

// Stranger Things style synth sound
document.addEventListener("click", function startMusic() {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  const ctx = new AudioContext();

  const osc1 = ctx.createOscillator();
  const gain = ctx.createGain();

  osc1.type = "sawtooth";
  osc1.frequency.setValueAtTime(55, ctx.currentTime);

  osc1.connect(gain);
  gain.connect(ctx.destination);

  gain.gain.setValueAtTime(0.03, ctx.currentTime);

  osc1.start();

  document.removeEventListener("click", startMusic);
});
