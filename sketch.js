
function setup() {
  createCanvas(400, 400);
  colorMode(HSB);
  frameRate(60)
}

function draw() {
  background(0);
  noStroke()
  let mapSecond = map(second(), 0, 59, 0, width);
  fill(mapSecond,150,150)
  rect(0,180,mapSecond,50);

  
}