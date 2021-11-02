function Enemy3(){
	this.w = height/20;
	this.x = random(0, width-this.w);
	this.y = random(0, height-this.w);
	this.speed = 1;
	this.factor = 40;
	this.choose = 0;
	if(p2a){
		this.choose = floor(random(2));
		if(!p1a){
			this.choose = 1;
		}
	}

	this.update = function(){
		trail[trail.length] = new Trail(this.x, this.y, 0, 0, 255);
		if(this.choose == 0){
			if(this.x-player.x < 0){
				this.x += -this.speed*(this.x-player.x)/this.factor;
			}else{
				this.x += -this.speed*(this.x-player.x)/this.factor;
			}
			if(this.y-player.y < 0){
				this.y += -this.speed*(this.y-player.y)/this.factor;
			}else{
				this.y += -this.speed*(this.y-player.y)/this.factor;
			}
		}else if(this.choose == 1){
			if(this.x-player2.x < 0){
				this.x += -this.speed*(this.x-player2.x)/this.factor;
			}else{
				this.x += -this.speed*(this.x-player2.x)/this.factor;
			}
			if(this.y-player2.y < 0){
				this.y += -this.speed*(this.y-player2.y)/this.factor;
			}else{
				this.y += -this.speed*(this.y-player2.y)/this.factor;
			}
		}

	}
	this.draw = function(){
		fill(0, 0, 255);
		rect(this.x, this.y, this.w, this.w);
	}

}
