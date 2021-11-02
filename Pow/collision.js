function Collision(){
	if(p1){
		for(var i = 0; i < coin.length; i++){
			this.l = dist(player.x, player.y, coin[i].x, coin[i].y);
			if(l < coin[i].d){
				coin.splice(i, 1);
				coins++;
			}
		}
		for(var i = 0; i < enemy.length; i++){
			if(player.x+player.w > enemy[i].x && player.x < enemy[i].x+enemy[i].w && player.y+player.w > enemy[i].y && player.y < enemy[i].y+enemy[i].w ){
				if(player.health < 0){
					GameOver = true;
					enemy = new Array;
					trail = new Array;
					p1a = false;
					play = false;
				}else{
					player.health -= 5;
				}
			}
		}
	}else if(p2){
		for(var i = 0; i < enemy.length; i++){
			if(player.x+player.w > enemy[i].x && player.x < enemy[i].x+enemy[i].w && player.y+player.w > enemy[i].y && player.y < enemy[i].y+enemy[i].w ){
				if(player.health < 0){
					p1a = false;
					trail = new Array;
				}else{
					player.health -= 5;
				}
			}
			if(player2.x+player2.w > enemy[i].x && player2.x < enemy[i].x+enemy[i].w && player2.y+player2.w > enemy[i].y && player2.y < enemy[i].y+enemy[i].w ){
				if(player2.health < 0){
					p2a = false;
					trail = new Array;
				}else{
					player2.health -= 5;
				}
			}
		}
		if(!p1a && !p2a){
			GameOver = true;
			play = false;
		}
	}
	score++;
}
