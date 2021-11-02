function mousePressed(){
	if(play){
		enemy[enemy.length] = new Enemy1();
	}else if(menuS){
		if(mouseX < 175+250 && mouseX > 175 && mouseY < 187 && mouseY > 112){
			enemy = new Array;
			trail = new Array;
			play = true;
			if(p1){
				p1s = true;
			}else if(p2){
				p2s = true;
			}
			menuS = false;
		}else if (mouseX < 175+250 && mouseX > 175 && mouseY < 262+75 && mouseY > 262) {
			menuO = true;
			menuS = false;
		}else if (mouseX < 175+250 && mouseX > 175 && mouseY < 412+75 && mouseY > 412) {
			menuI = true;
			menuS = false;
		}
	}else if(menuO){
		if(mouseX < 175+250 && mouseX > 175 && mouseY < 187 && mouseY > 112){
			p1 = true;
			p2 = false;
		}else if (mouseX < 175+250 && mouseX > 175 && mouseY < 262+75 && mouseY > 262) {
			p2 = true;
			p1 = false;
		}else if (mouseX < 175+250 && mouseX > 175 && mouseY < 412+75 && mouseY > 412) {
			menuS = true;
			menuO = false;
			menu.b1 = 0;
			menu.b2 = 0;
		}
	}else if(menuI){
		if(mouseX < 310+240 && mouseX > 310 && mouseY < 492+75 && mouseY > 492){
			menuS = true;
			menuI = false;
		}
	}else if(GameOver){
		if (mouseX < 50+240 && mouseX > 50 && mouseY < 392+75 && mouseY > 392) {
			GameOver = false;
			play = true;
			if(p1){
				p1s = true;
				trail = new Array;
			}else if(p2){
				p2s = true;
				trail = new Array;
			}
			score = 0;
			enemy = new Array;
		}else if (mouseX < 310+240 && mouseX > 310 && mouseY < 392+75 && mouseY > 392) {
			GameOver = false;
			menuS = true;
			score = 0;

		}
	}
}
