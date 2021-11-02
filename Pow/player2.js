function Player2(){
	this.health = 255;
	this.w = height/20;
	this.x = width/2+50;
	this.y = height/2-this.w;
	this.speed = 5;

	this.update = function(){
		if(p2a){
			trail[trail.length] = new Trail(this.x, this.y, 255, 255, 200);
			if(keyIsDown(65) && this.x > 0){
				this.x += -this.speed;
			}
			if(keyIsDown(87) && this.y > 0){
				this.y += -this.speed;
			}
			if(keyIsDown(68) && this.x < width-this.w){
				this.x += this.speed;
			}
			if(keyIsDown(83) && this.y < height-this.w){
				this.y += this.speed;
			}
		}
	}
	this.draw = function(){
		if(p2a){
			fill(255, 255, 200);
			rect(this.x, this.y, this.w, this.w);
			fill(255);
			rect(128, 8, 104, 24);
			fill(51);
			rect(130, 10, 100, 20);
			fill(255-this.health, this.health, 0);
			rect(130, 10, this.health/255*100, 20);
			fill(255);
			textSize(17);
			text("player 2", 153, 25)
		}
	}
}
