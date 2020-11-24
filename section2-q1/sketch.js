// 小手調べ
function setup(){
  noFill();
  for(let i = 0; i < 10; i++){
    if(i<5){
    stroke(0,0,255);
    }
    else{
      stroke(255,0,0);
    }
    x=(i+1)*10;
    ellipse(50,50,x);
 }
}
