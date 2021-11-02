function Level(){
  this.levelS = 0;
  this.level = 1;
  this.bossHealth = 0;

  this.check = function(){
    this.levelS++;
    textSize(20);
    fill(255);
    text("Score: " + int(score/10), 10, 55);
    text("Level: " + this.level, 10, 78);
    if(this.bossHealth > 0){
      this.bossHealth += -1;
      fill(255);
      rect(488, 8, 104, 24);
      fill(51);
      rect(490, 10, 100, 20);
      fill(255-this.bossHealth/2000*255, this.bossHealth/2000*255, 0)
      rect(490, 10, this.bossHealth/2000*100, 20);
    }
    if(this.levelS > 300 && this.bossHealth <= 0){
      this.levelS = 0;
      this.level++;
      if(this.level == 2){
        enemy[enemy.length] = new Enemy1();
      }else if(this.level == 3){
        enemy[enemy.length] = new Enemy1();
        enemy[enemy.length] = new Enemy1();
      }else if(this.level == 4){
        enemy[enemy.length] = new Enemy1(random(50, 500), random(50, 500), random(1, 2), 8, 30, 255, 0, 255);
        enemy[enemy.length] = new Enemy1();
      }else if(this.level == 5){
        enemy[enemy.length] = new Enemy3();
      }else if(this.level == 6){
        enemy[enemy.length] = new Enemy3();
        enemy[enemy.length] = new Enemy1();
      }else if(this.level == 7){
        enemy[enemy.length] = new Enemy1(random(50, 500), random(50, 500), random(1, 2), 8, 30, 255, 0, 255);
      }else if(this.level == 8){
        enemy[enemy.length] = new Enemy3();
      }else if(this.level == 9){
        enemy[enemy.length] = new Enemy1(random(50, 500), random(50, 500), random(1, 2), 8, 30, 255, 0, 255);
      }else if(this.level == 10){
        this.bossHealth = 2000;
        enemy = new Array;

        enemy[enemy.length] = new Enemy1(50, 50, 3, 3, 30, 0, 255, 255);
        enemy[enemy.length] = new Enemy1(50, 150, 3, 3, 30, 0, 255, 255);
        enemy[enemy.length] = new Enemy1(50, 250, 3, 3, 30, 0, 255, 255);
        enemy[enemy.length] = new Enemy1(50, 350, 3, 3, 30, 0, 255, 255);
        enemy[enemy.length] = new Enemy1(50, 450, 3, 3, 30, 0, 255, 255);
        enemy[enemy.length] = new Enemy1(50, 550, 3, 3, 30, 0, 255, 255);

        enemy[enemy.length] = new Enemy1(550, 50, -3, -3, 30, 0, 255, 255);
        enemy[enemy.length] = new Enemy1(550, 150, -3, -3, 30, 0, 255, 255);
        enemy[enemy.length] = new Enemy1(550, 250, -3, -3, 30, 0, 255, 255);
        enemy[enemy.length] = new Enemy1(550, 350, -3, -3, 30, 0, 255, 255);
        enemy[enemy.length] = new Enemy1(550, 450, -3, -3, 30, 0, 255, 255);
        enemy[enemy.length] = new Enemy1(550, 550, -3, -3, 30, 0, 255, 255);

      }else if(this.level == 11){
        enemy = new Array;
        enemy[enemy.length] = new Enemy1(random(50, 500), random(50, 500), random(2, 4), 8, 30, 255, 0, 255);
      }else if(this.level == 12){
        enemy[enemy.length] = new Enemy1(random(50, 500), random(50, 500), random(2, 4), 8, 30, 255, 0, 255);
        enemy[enemy.length] = new Enemy1(random(50, 500), random(50, 500), random(2, 4), 8, 30, 255, 0, 255);
        enemy[enemy.length] = new Enemy1(random(50, 500), random(50, 500), random(2, 4), 8, 30, 255, 0, 255);
      }else if(this.level == 13){
        enemy[enemy.length] = new Enemy3();
        enemy[enemy.length] = new Enemy3();
        enemy[enemy.length] = new Enemy3();
      }else if(this.level == 14){
        enemy[enemy.length] = new Enemy3();
        enemy[enemy.length] = new Enemy3();
        enemy[enemy.length] = new Enemy3();
      }
    }
  }
}
