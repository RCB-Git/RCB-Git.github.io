function setup() {
  let canv = createCanvas(windowWidth, windowHeight);
  canv.parent("background");

}

let time;
let active;
function draw() {
  time = window.performance.now().toFixed(5) / 1000 * .15;
  active = window.performance.now().toFixed(0) / 1000;
  document.getElementById("debug").innerHTML = (active) + "seconds";
  Switcher();


}
let TState;
let PState = 4;
const numProjects = PState;
const timeBetween = 5;
let override = true;
function Switcher() {

  if ((active.toFixed(0)) % timeBetween == 0) {
    if (override) {
      TState = 2;
      PState++;
      PState %= numProjects;
    }
    override = false;
  } else
    override = true;
  document.getElementById("Active_Project").innerHTML = PState;

  push();

  switch (PState) {
    case 0:
      //polySin();
      polySin();
      break;
    case 1:
      background(255, 0, 0);
      break;
    case 2:
      background(0, 255, 0);
      break;
    case 3:
      background(0, 0, 255);
      break;

  }
  pop();

  if (TState > 0) {
    background(255, 255, 255, 25);
    TState -= -.01;
  }

}

function polySin() {
  background(54, 60, 66, 15);
  push();
  strokeWeight(2)
  stroke(170);
  let spacing = height / 6;
  let count = width / 40;
  push();
  strokeWeight(2)
  stroke(180);
  translate(width / 2, -height / 1.8, 0)
  for (let i = 0; i < spacing; i++) {
    translate(0, spacing, 0);
    for (let i = 0; i < count; i++) {
      let xpos = i * (width / count) - width / 2;
      line(xpos, 0, xpos, sin(xpos + time) * (height / 25));
    }
  }
  pop();

}




