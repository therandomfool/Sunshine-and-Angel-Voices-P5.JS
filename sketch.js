let outerD = 250;
let speed = 5;

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(random(255));



  fill(0)
  noStroke()
  for (x1 = -8; x1 < width; x1 += 0.001) {
    triangle(x1, 0, mouseX, mouseY, x1 += 8, 0)
    triangle(x1, 800, mouseX, mouseY, x1 += 8, 800)
  }


  for (y1 = 0; y1 < height; y1 += 0.001) {
    triangle(0, y1, mouseX, mouseY, 0, y1 += 8)
    triangle(800, y1, mouseX, mouseY, 800, y1 += 8)
  }

  noStroke()
  fill(176, 115, 181)
  circle(mouseX, mouseY, 150)

  //outer circles
  strokeWeight(20)
  stroke(176, 115, 181)
  noFill()
  circle(mouseX, mouseY, outerD)

  strokeWeight(15)
  stroke(157, 115, 181)
  noFill()
  circle(mouseX, mouseY, outerD + 30)

  strokeWeight(20)
  stroke(157, 115, 181)
  noFill()
  circle(mouseX, mouseY, outerD + 200)

  strokeWeight(15)
  stroke(137, 115, 181)
  noFill()
  circle(mouseX, mouseY, outerD + 230)

  strokeWeight(25)
  stroke(137, 115, 181)
  noFill()
  circle(mouseX, mouseY, outerD + 400)

  strokeWeight(30)
  stroke(117, 115, 181)
  noFill()
  circle(mouseX, mouseY, outerD + 430)

  outerD += speed;

  //see if outerD is out of range
  if (outerD > width) {
    speed *= -1;
    //outerD = 250;   
  }

  if (outerD + 430 < 150) {
    speed *= -1;
    outerD = 400;
  }

}