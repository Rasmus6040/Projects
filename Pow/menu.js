function Menu(){
	this.b1 = 0;
	this.b2 = 0;
	this.b3 = 0;

	this.bgupdate = function(){

	}
	this.bgrender = function(){

	}


	this.check = function(){
		if(mouseX < 175+250 && mouseX > 175 && mouseY < 187 && mouseY > 112){
			this.b1 = 50;
		}else if (mouseX < 175+250 && mouseX > 175 && mouseY < 262+75 && mouseY > 262) {
			this.b2 = 50;
		}else if (mouseX < 175+250 && mouseX > 175 && mouseY < 412+75 && mouseY > 412) {
			this.b3 = 50;
		}else{
			this.b1 = 0;
			this.b2 = 0;
			this.b3 = 0;
		}
	}
	this.update = function(){
		fill(255-this.b1);
		rect(175, 112, 250, 75);
		fill(255-this.b2);
		rect(175, 262, 250, 75);
		fill(255-this.b3);
		rect(175, 412, 250, 75);

		textSize(45);
		fill(51+this.b1);
		text("Play", 255, 163);
		fill(51+this.b2);
		text("Options", 220, 313);
		fill(51+this.b3);
		text("Info", 265, 463);
	}
	this.checkO = function(){
		if(mouseX < 175+250 && mouseX > 175 && mouseY < 187 && mouseY > 112){
			if(p1){
				this.b1 = 170;
				this.b2 = 0;
			}else{
				this.b1 = 50;
			}

		}else if (mouseX < 175+250 && mouseX > 175 && mouseY < 262+75 && mouseY > 262) {
			if(p2){
				this.b2 = 170;
				this.b1 = 0;
			}else{
				this.b2 = 50;
				this.b1 = 150;
			}
		}else if (mouseX < 175+250 && mouseX > 175 && mouseY < 412+75 && mouseY > 412) {
			this.b3 = 50;
		}else{
			this.b1 = 0;
			this.b2 = 0;
			this.b3 = 0;
			if(p1){
				this.b1 = 150;
			}else if(p2){
				this.b2 = 150;
			}
		}
	}
	this.updateO = function(){
		fill(255-this.b1);
		rect(175, 112, 250, 75);
		fill(255-this.b2);
		rect(175, 262, 250, 75);
		fill(255-this.b3);
		rect(175, 412, 250, 75);

		textSize(40);
		fill(51+this.b1);
		text("Single Player", 182, 163);
		fill(51+this.b2);
		text("Two Player", 200, 313);
		fill(51+this.b3);
		text("Back", 260, 463);
	}
	this.checkI = function(){
		if(mouseX < 50+240 && mouseX > 50 && mouseY < 492+75 && mouseY > 492){
			this.b1 = 50;
			this.b2 = 0;
		}else if(mouseX < 310+240 && mouseX > 310 && mouseY < 492+75 && mouseY > 492){
			this.b2 = 50;
			this.b1 = 0;
		}else{
			this.b1 = 0;
			this.b2 = 0;
		}
	}
	this.updateI = function(){
		noStroke();
		fill(255-this.b1);
		rect(50, 492, 240, 75);
		fill(255-this.b2);
		rect(310, 492, 240, 75);
		fill(255);
		rect(50, 50, 500, 420);

		textSize(40);
		fill(51+this.b1);
		text("Donate", 108, 543);
		fill(51+this.b2);
		text("Back", 395, 543);
		textSize(25)
		fill(51);
		text("I've created this game, so that I could get an understanding of programming. Today most people just think that games, websites and programs are easely made, and it suprised me to see how everything worked. I didn't have that understanding then I began.                                          The game is simply about douching objects, and over time beating your highscore",
					70, 50, 480, 420)
	}
	this.checkG = function(){
		if (mouseX < 50+240 && mouseX > 50 && mouseY < 392+75 && mouseY > 392) {
			this.b2 = 50;
			this.b3 = 0;
		}else if (mouseX < 310+240 && mouseX > 310 && mouseY < 392+75 && mouseY > 392) {
			this.b3 = 50;
			this.b2 = 0;
		}else{
			this.b2 = 0;
			this.b3 = 0;
		}
	}
	this.updateG = function(){
		noStroke();
		fill(255-this.b2);
		rect(50, 392, 240, 75);
		fill(255-this.b3);
		rect(310, 392, 240, 75);

		textSize(110);
		fill(255);
		text("GameOver", 30, 200);
		textSize(40);
		text("Your score was: " + int(score/10) + ",            well played", 30, 250, 540, 100);
		fill(51+this.b2);
		text("Play again", 78, 443);
		fill(51+this.b3);
		text("Menu", 378, 443);
	}
}
