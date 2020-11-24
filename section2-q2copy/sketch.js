// チェッカー
function setup() {
  createCanvas(200, 200);
  noFill();
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      if(i % 2 == 0 && j % 2 == 1 ){
        fill(128);
        rect(size*i,size*j,size,size) ;
       }
       else if (i % 2 == 1 && j % 2 == 0 ) {
        fill(128);
        rect(size*i,size*j,size,size) ;
       }

       if(i % 2 == 1 && j % 2 == 0 && j < 3){
         fill(255,0,0);
         ellipse((i*size + size / 2),(j*size + size /2),22);
       }
       else if(i % 2 == 0 && j % 2 == 1 && j < 3){
         fill(255,0,0);
         ellipse((i*size + size / 2),(j*size + size /2),22);
       }

       if(i % 2 == 0 && j % 2 == 1 && j > 4){
         fill(0);
         ellipse((i*size + size / 2),(j*size + size /2),22);
       }
       else if(i % 2 == 1 && j % 2 == 0 && j > 4){
         fill(0);
         ellipse((i*size + size / 2),(j*size + size /2),22);
       }
  // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
  }
 }
}
