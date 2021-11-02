function Controller(){
	if(play){
		if(!p1s && !p2s){
			Collision();
      if(p1){
        player.update();
        player.draw();
      }else if(p2){
        player.update();
        player.draw();
        player2.update();
        player2.draw();
      }
      level.check();
			for(var i = 0; i < coin.length; i++){
				coin[i].draw();
			}

			counter--;
			if(counter < 0){
				coin[coin.length] = new Coin();
				counter = random(0, 1000);
			}

      for(var i = trail.length; i > 0; i--){
        trail[i-1].update();
        if(trail[i-1].fade == 0){
          trail.splice(i-1, 1);
        }
        trail[i-1].draw();
      }
			for(var i = 0; i < enemy.length; i++){
				enemy[i].update();
				enemy[i].draw();
			}
		}else if(p1s){
			player = new Player();
      p1a = true;
			enemy[0] = new Enemy1();
			p1s = false;
      level = new Level();
		}else if(p2s){
      player = new Player();
      player2 = new Player2();
      p1a = true;
      p2a = true;
			enemy[0] = new Enemy1();
			p2s = false;
      level = new Level();
		}
	}else if (menuO) {
    if(enemy.length < 10){
      enemy[enemy.length] = new Enemy1(random(50, 500), random(50, 500), random(-8, 8), random(-8, 8), 30, random(255), random(255), random(255));
    }
    for(var i = 0; i < enemy.length; i++){
      enemy[i].update();
      enemy[i].draw();
    }
    for(var i = trail.length; i > 0; i--){
      trail[i-1].update();
      if(trail[i-1].fade == 0){
        trail.splice(i-1, 1);
      }
      trail[i-1].draw();
    }
		menu.checkO();
		menu.updateO();
	}else if (menuI) {
    if(enemy.length < 10){
      enemy[enemy.length] = new Enemy1(random(50, 500), random(50, 500), random(-8, 8), random(-8, 8), 30, random(255), random(255), random(255));
    }
    for(var i = 0; i < enemy.length; i++){
      enemy[i].update();
      enemy[i].draw();
    }
    for(var i = trail.length; i > 0; i--){
      trail[i-1].update();
      if(trail[i-1].fade == 0){
        trail.splice(i-1, 1);
      }
      trail[i-1].draw();
    }
    menu.checkI();
		menu.updateI();
	}else if (menuS) {
    if(enemy.length < 10){
      enemy[enemy.length] = new Enemy1(random(50, 500), random(50, 500), random(-8, 8), random(-8, 8), 30, random(255), random(255), random(255));
    }
    for(var i = 0; i < enemy.length; i++){
      enemy[i].update();
      enemy[i].draw();
    }
    for(var i = trail.length; i > 0; i--){
      trail[i-1].update();
      if(trail[i-1].fade == 0){
        trail.splice(i-1, 1);
      }
      trail[i-1].draw();
    }
    menu.check();
		menu.update();
	}else if(GameOver){
    if(enemy.length < 10){
      enemy[enemy.length] = new Enemy1(random(50, 500), random(50, 500), random(-8, 8), random(-8, 8), 30, random(255), random(255), random(255));
    }
    for(var i = 0; i < enemy.length; i++){
      enemy[i].update();
      enemy[i].draw();
    }
    for(var i = trail.length; i > 0; i--){
      trail[i-1].update();
      if(trail[i-1].fade == 0){
        trail.splice(i-1, 1);
      }
      trail[i-1].draw();
    }
    menu.checkG();
		menu.updateG();
	}
}
