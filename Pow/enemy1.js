function Enemy1(x = random(50, 500), y = random(50, 500), sx = random(1, 3), sy = random(1, 3), w = height/20, c1 = 255, c2 = 0, c3 = 0){
	this.w = w;
	this.x = x;
	this.y = y;
	this.speedx = sx;
	this.speedy = sy;
	this.color = [c1, c2, c3];

	this.update = function(){
		trail[trail.length] = new Trail(this.x, this.y, c1, c2, c3);
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
		fill(this.color[0], this.color[1], this.color[2]);
		rect(this.x, this.y, this.w, this.w);
	}

}
