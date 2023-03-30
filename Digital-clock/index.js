const helem = document.getElementById("hours");
const melem = document.getElementById("minutes");
const selem = document.getElementById("seconds");
const apelem = document.getElementById("ampm");

function updateClock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = "AM";
  if (h > 12) {
    h -= 12;
    ampm = "PM";
  }
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  helem.innerText = h;
  melem.innerText = m;
  selem.innerText = s;
  apelem.innerText = ampm;
  setTimeout(() => {
    updateClock();
  }, 1000);
}
updateClock();
