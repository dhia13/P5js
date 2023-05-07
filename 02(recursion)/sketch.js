let x = 150;
let y = 150;
let r = 250;
function setup() {
  createCanvas(600, 400);
  background(0);
}

function draw() {
  stroke(255);
  noFill();
  drawCircle(300, 200, 300);
  noLoop();
}
function drawCircle(x, y, r) {
  ellipse(x, y, r);
  if (r > 2) {
    drawCircle(x + r * 0.5, y, r * 0.5);
    drawCircle(x - r * 0.5, y, r * 0.5);
    drawCircle(x, y + r * 0.5, r * 0.5);
  }
}
