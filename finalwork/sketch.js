// 最終課題を制作しよう
let x, y, vx, vy;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = 0;
  vx = 10;
  vy = 5;
  angle = 0
}


function draw(){
    if(keyIsDown("D".charCodeAt(0))){
      background(84,195,241);
      Dango(x, y, 50);
      y += 2;
      if(y > height * 4/ 5){ y = 0; }
      // y = constrain(y, 0, height * 4/ 5);
      fill(169, 110, 45);
      rect(0, height * 4/ 5, width, height);

      push();
      textSize(50);
      fill(0);
      textStyle(BOLD);
      text("だんご!だんご!だんご!", width /3, height * 14 / 15);
      pop();
    }

    else {
      push();

      background(29, 32, 136);

      noStroke();
      fill(255,255,0);
      ellipse(width/5, height/5, 100)

      fill(29, 32, 136);
      ellipse(width/5 + 10, height/5 - 10, 100);


      noStroke();
      fill(255,255,0);
      star(x, y, 10, angle);
      x -= vx;
      y += vy;
      angle += 0.1;


      if(x > width){ x = 0; }
      else if(x < 0){ x = width; }
      if(y > height / 3){ y = 0; }
      if(y < 0){ y = height; }

      pop();

      fill(135, 88, 36);
      rect(0, height * 4/ 5, width, height);

      push();
      textSize(20);
      fill(0);
      text("「願い事」", width * 4/9, height * 10 / 11);
      pop();
    }
}


function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function Dango(x,y,r){
  push();

  strokeWeight(4);
  fill(43);
  line(x-140, y-140, x, y);
  fill(255, 192, 203);
  ellipse(x-105, y-105, r);
  fill(245, 255, 250);
  ellipse(x-70, y-70, r);
  fill(46, 139, 87);
  ellipse(x-35, y-35, r);

  pop();
}


function star(cx, cy, r, angle){
  beginShape();
  for(var i = 0; i < 20; i++){
    var theta = TWO_PI * i * 2 / 5 - HALF_PI;
    theta += angle;
    var x = cx + cos(theta) * r;
    var y = cy + sin(theta) * r;
    vertex(x,y);
  }
  endShape(CLOSE);
}
