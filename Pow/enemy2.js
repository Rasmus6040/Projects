function Enemy2(){
	this.w = height/20;
	this.x = random(0, width-this.w);
	this.y = random(0, height-this.w);
	this.speedx = random(1, 2);
	this.speedy = 8;

	this.update = function(){
		if(this.x < 0 || this.x > width-this.w){
			this.speedx *= -1;
		}
		if(this.y < 0 || this.y > height-this.w){
			this.speedy *= -1;
		}
		this.x += this.speedx;
		this.y += this.speedy;
	}
	this.draw = function(){
		fill(255, 0, 255);
		rect(this.x, this.y, this.w, this.w);
	}

}
