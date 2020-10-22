// ギリシャ国旗
function setup() {
  const blue = color(0, 51, 160);
  createCanvas(270, 180);
  // noStroke();
  background(255);

  let d = height / 9; // 縞1本の太さ

  for(let i = 0; i < 9; i++){
    if(i % 2 == 0){
      fill(0,51,160);
    }
    else{
      fill(255);
    }
    // BLANK[1] (hint: 縞の色を交互に変えるには2で割った余りを使おう)
      rect(0, i * d, width, (i + 1) * d);

  }
  fill(255);
  rect(0,0,5*d,5*d);

  fill(blue);
  let size = d * 2;
  rect(0, 0, size, size);
  rect(0,3*d,size,size);
  rect(3*d,0,size,size);
  rect(3*d,3*d,size,size);
  // BLANK[2] (hint: 白い十字を描くには rect を二つ描こう)
}
