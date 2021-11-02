function Trail(x, y, c1, c2, c3){
  this.x = x;
  this.y = y;
  this.w = height/20;
  this.fade = 50;

  this.update = function(){
    this.fade -= 1;
  }
  this.draw = function(){
    noStroke();
    fill(c1, c2, c3, this.fade*2);
    rect(this.x, this.y, this.w, this.w);
  }


}
