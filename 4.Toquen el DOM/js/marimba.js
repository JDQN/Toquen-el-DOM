const DO = new Audio("soundsMarimba/marimba0.mp3");
const RE = new Audio("soundsMarimba/marimba1.mp3");
const MI = new Audio("soundsMarimba/marimba2.mp3");
const FA = new Audio("soundsMarimba/marimba3.mp3");
const SOL = new Audio("soundsMarimba/marimba4.mp3");
const LA = new Audio("soundsMarimba/marimba5.mp3");
const SI = new Audio("soundsMarimba/marimba6.mp3");
const DO4 = new Audio("soundsMarimba/marimba7.mp3");
const RE4 = new Audio("soundsMarimba/marimba8.mp3");
const MI4 = new Audio("soundsMarimba/marimba9.mp3");

const soundMarimba = audio => {
  const clone = audio.cloneNode();
  clone.play();
  setTimeout(() => (clone.volume = 0.8), 400);
  setTimeout(() => (clone.volume = 0.6), 800);
  setTimeout(() => (clone.volume = 0.4), 1200);
  setTimeout(() => (clone.volume = 0.2), 1600);
  setTimeout(() => (clone.volume = 0), 2000);
};

/* NOTA 1 DO MARIMBA */
const DOKey = document.getElementById("DO-key");
const playDO = () => {
  soundMarimba(DO);
  DOKey.classList.add("active");
  setTimeout(() => DOKey.classList.remove("active"), 200);
};
DOKey.addEventListener("click", playDO);

/* NOTA 2 RE MARIMBA */
const REKey = document.getElementById("RE-key");
const playRE = () => {
  soundMarimba(RE);
  REKey.classList.add("active");
  setTimeout(() => REKey.classList.remove("active"), 200);
};
REKey.addEventListener("click", playRE);

/* NOTA 3 MI MARIMBA */
const MIKey = document.getElementById("MI-key");
const playMI = () => {
  soundMarimba(MI);
  MIKey.classList.add("active");
  setTimeout(() => MIKey.classList.remove("active"), 200);
};
MIKey.addEventListener("click", playMI);

/* NOTA 4 FA MARIMBA */
const FAKey = document.getElementById("FA-key");
const playFA = () => {
  soundMarimba(FA);
  FAKey.classList.add("active");
  setTimeout(() => FAKey.classList.remove("active"), 200);
};
FAKey.addEventListener("click", playFA);


/* NOTA 5 SOL MARIMBA */
const SOLKey = document.getElementById("SOL-key");
const playSOL = () => {
  soundMarimba(SOL);
  SOLKey.classList.add("active");
  setTimeout(() => SOLKey.classList.remove("active"), 200);
};
SOLKey.addEventListener("click", playSOL);


/* NOTA 6 LA MARIMBA */
const LAKey = document.getElementById("LA-key");
const playLA = () => {
  soundMarimba(LA);
  LAKey.classList.add("active");
  setTimeout(() => LAKey.classList.remove("active"), 200);
};
LAKey.addEventListener("click", playLA);

/* NOTA 7 SI MARIMBA */
const SIKey = document.getElementById("SI-key");
const playSI = () => {
  soundMarimba(SI);
  SIKey.classList.add("active");
  setTimeout(() => SIKey.classList.remove("active"), 200);
};
SIKey.addEventListener("click", playSI);

/* NOTA 8 DO4 MARIMBA */
const DO4Key = document.getElementById("DO4-key");
const playDO4 = () => {
  soundMarimba(DO4);
  DO4Key.classList.add("active");
  setTimeout(() => DO4Key.classList.remove("active"), 200);
};
DO4Key.addEventListener("click", playDO4);


/* NOTA 9 RE4 MARIMBA */
const RE4Key = document.getElementById("RE4-key");
const playRE4 = () => {
  soundMarimba(RE4);
  RE4Key.classList.add("active");
  setTimeout(() => RE4Key.classList.remove("active"), 200);
};
RE4Key.addEventListener("click", playRE4);


/* NOTA 10 RE4 MARIMBA */
const MI4Key = document.getElementById("MI4-key");
const playMI4 = () => {
  soundMarimba(MI4);
  MI4Key.classList.add("active");
  setTimeout(() => MI4Key.classList.remove("active"), 200);
};
MI4Key.addEventListener("click", playMI4);


 


window.addEventListener("keydown", ({ keyCode }) => {
  /* Tecla  Z = DO TECLA 1 */
  if (keyCode === 90) return playDO();

  /* Tecla  X = RE TECLA 2 */
  if (keyCode === 88) return playRE();

  /* Tecla  C = MI TECLA 3 */
  if (keyCode === 67) return playMI();

  /* Tecla  V = FA TECLA 4 */
  if (keyCode === 86) return playFA();

  /* Tecla  B = SOL TECLA 5 */
  if (keyCode === 66) return playSOL();

  /* Tecla  N = LA TECLA 6 */
  if (keyCode === 78) return playLA();

  /* Tecla M = LA TECLA 7 */
  if (keyCode === 77) return playSI();

  /* Tecla , = DO4 TECLA 188 */
  if (keyCode === 188) return playDO4();

  /* Tecla . = RE4 TECLA 188 */
  if (keyCode === 190) return playRE4();

  /* Tecla - = MI4 TECLA 188 */
  if (keyCode === 189) return playMI4();

}); 