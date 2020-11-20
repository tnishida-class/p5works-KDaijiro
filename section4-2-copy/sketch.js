// テキスト「アニメーション」
let x, y, vx, vy;
const g = 1; // 重力加速度
const vyMax = 30;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  vx = 8;
  vy = 8;
}

function draw(){
  background(160, 192, 255);
  ellipse(x, y, 20, 20);
  x += vx;
  y += vy;

  // 重力（コメント機能でオンオフ切り替えて実行してみましょう）
  vy = constrain(vy + g, -vyMax, vyMax);
  // ↑
  // vy = vy + g;
  // if(vy > vyMax) vy = vyMax;
 // if(vy < -vyMax) vy = -vyMax;

  // 端の処理パターン (1) 反対側から出てくる
  if(x > width){ x = 0; }
  else if(x < 0){ x = width; }
  if(y > height){ y = 0; }
  if(y < 0){ y = height; }
  // 次のように、同じ画面端の処理を条件分岐を使わないで書くこともできます（考えてみてください）。
  // x = (x + width) % width;
  // y = (y + height) % height;

}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
