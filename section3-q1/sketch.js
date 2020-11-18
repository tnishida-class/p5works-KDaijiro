// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  balloon("プログラミング出来たら面白いけど難しい",20,30,0,255);
}

function balloon(t,x,y,bc,tc){
  // X,yを設定しないと吹き出しを動かせない
  //bc,tc　背景やテキストの色を設定する
  let w = textWidth(t);
  //テキストに適切な横幅
  let h = textAscent() + textDescent();
  let p = 5;//余白の大きさ
  fill(bc);
  rect(x, y, w + p * 2, h + p * 2);
  fill(tc);
  text(t, p+x, h + p+y);//（テキスト,始まりのx座標,始まりのy座標）
  fill(bc);
  triangle(x + w + p * 2, y+(h + p * 2)*2/3,x + w + p * 2, y+(h + p * 2)/3,2*x + w + p * 2,y+(h + p * 2)/2)
}
