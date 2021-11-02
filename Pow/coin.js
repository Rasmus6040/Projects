function Coin(){
  this.d = 30;
  this.x = random(this.d/2, width-this.d/2);
  this.y = random(this.d/2, height-this.d/2);

  this.draw = function(){
    fill(255, 255, 0);
    ellipse(this.x, this.y, this.d, this.d);
  }

}
