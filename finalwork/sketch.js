// 最終課題を制作しよう
let x, y, vx, vy;
let cx = 0;
let p = 0;

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
      y += 5;
      // if(y-140 > height * 4/ 5){ y = 0; }
      y = constrain(y, 0, height * 4/ 5);
      fill(169, 110, 45);
      rect(0, height * 4/ 5, width, height);

      push();

      textSize(40);
      fill(0);
      textStyle(BOLD);
      text("「だんごおおおおおおおおおお」", width*3/10, height * 14 / 15);
      // cx += 5;
      // if(cx > width){cx=-400;}
      pop();

      push();
      Pacman(p, height * 3/5, height*2/5,84,195,241);
      // Pacman(p, height * 7/10, height / 5);
      p += 10;

      if(p - height*2/5 / 2 > width){ p = -height*2/5 }
      // if(p > width){ p = 0}
      pop();

      if(dist(p+height / 5, height * 7/10, x-35, y-35) < height/5) {
        y = 0;
      }
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
      text("　　　　　　　「願い事は？」 　　　「だんご　だんご　だんご」", width /5, height * 10 / 11);
      pop();

      push();
      Pacman(p, height * 3/5, height*2/5,29, 32, 136);
      p += 5;
      if(p - height*2/5 / 2 > width){ p = -height*2/5 }
      pop();

    }
}


function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function Dango(x,y,r){
  push();

  strokeWeight(4);
  fill(77,181,106);
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

function Pacman(px,py,pr,bc,bc2,bc3){
  noStroke();
  fill(255, 255, 0);
  ellipse(px, py, pr);

  fill(bc,bc2,bc3);
  triangle(px, py, px+pr, py+pr/2, px+pr, py-pr/2);

  stroke('black');
  strokeWeight(8);
  point(px+pr/5, py-pr/4);
}
