// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;

function setup(){
  createCanvas(windowWidth, windowHeight);
  count = 0;
  cycle = 100;
}

function windowResized(){ // ウィンドウがリサイズされるたびにこの関数が自動的に実行される
  resizeCanvas(windowWidth, windowHeight); // キャンバスをリサイズする（createCanvasではないので注意）
}

function draw(){
  background(160, 192, 255);
   count = (count + 1) % cycle;
  if(keyIsDown("A".charCodeAt(0))){ count += 5; }
  if(keyIsDown(" ".charCodeAt(0))){ count += 10; }
  size = count
  // BLANK[1]
  ellipse(width / 2, height / 2, size);



}
