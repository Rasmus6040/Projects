function Player(){
	this.health = 255;
	this.w = height/20;
	this.x = width/2-this.w;
	this.y = height/2-this.w;
	this.speed = 5;

	this.update = function(){
		if(p1a){
			trail[trail.length] = new Trail(this.x, this.y, 255, 255, 255);
			if(keyIsDown(LEFT_ARROW) && this.x > 0){
				this.x += -this.speed;
			}
			if(keyIsDown(UP_ARROW) && this.y > 0){
				this.y += -this.speed;
			}
			if(keyIsDown(RIGHT_ARROW) && this.x < width-this.w){
				this.x += this.speed;
			}
			if(keyIsDown(DOWN_ARROW) && this.y < height-this.w){
				this.y += this.speed;
			}
		}
	}
	this.draw = function(){
		if(p1a){
			fill(255);
			rect(this.x, this.y, this.w, this.w);
			fill(255);
			rect(8, 8, 104, 24);
			fill(51);
			rect(10, 10, 100, 20);
			fill(255-this.health, this.health, 0);
			rect(10, 10, this.health/255*100, 20);
			fill(255);
			textSize(17);
			text("player 1", 33, 25)
		}
	}
}
