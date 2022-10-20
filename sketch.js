function setup() {
  let canv = createCanvas(1600, 1600);
  canv.parent("backdrop");
}
function draw() {
  background(0)
}

function polySin(count) {
  for (let i = 0; i < count; i++) {
    let xpos = i * (width / count) - width / 2;
    line(xpos, 0, xpos,sin(xpos + time)*100);
  }
}

function guides3d() {
  camera(cos(time) * 200, 100, sin(time) * 100, 0, 0, 0, 0, -1, 0);
  fill(255);
  background(255);
  lights();
  strokeWeight(2);
  stroke(255, 0, 0,);
  line(-100, 0, 0, 100, 0, 0); // X = red
  stroke(0, 255, 0,);
  line(0, -100, 0, 0, 100, 0); // Y = green
  stroke(0, 0, 255);
  line(0, 0, -100, 0, 0, 100); // Z = blue
}
let vertexes;
let poly;



