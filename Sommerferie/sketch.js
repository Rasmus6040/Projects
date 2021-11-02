let dice1;
let dice2;
let newRound = true;
let player1 = new Array;
let player2 = new Array;
let gamer1 = true;
let gamer2 = false;
let show = new Array;
let showing = false;
let moving = false;
let selected;

//Vigtig kommentar under function place

function setup(){
  createCanvas(600,400);
  dice1 = new Dice(-60);
  dice2 = new Dice(10);
  for(let i = 0; i < 15; i++){
    for(let j = 0; j < 2; j++){
      if(j == 0){
        player1[i] = new Brick(i, j);
      }else if(j == 1){
        player2[i] = new Brick(i, j);
      }
    }
  }
}

function draw(){
  Background();
  dice1.update();
  dice2.update();
  for(let i = 0; i < player1.length; i++){
    player1[i].update();
  }
  for(let i = 0; i < player2.length; i++){
    player2[i].update();
  }
  if(showing){
    try{
      show[0].update();
    }catch(err){
    }
    try{
      show[1].update();
    }catch(err){
    }
  }
}

function Place(i, j){
  this.space = 0;
  this.enemy = 0;
  this.enemyXY;
  if(j == 0){
    for(let o = 0; o < player1.length; o++){
      if(player1[o].place == i){
        this.space++;

      }else if(player2[o].place == i){
        console.log("hit enemy");
        this.enemy++;
        this.enemyXY = o;
      }
    }
  }
  if(j == 1){
    for(let o = 0; o < player2.length; o++){
      if(player2[o].place == i){
        this.space++;
      }else if(player1[o].place == i){
        this.enemy++;
        this.enemyXY = o;
        console.log("hit enemy player 1");
      }
    }
  }
  this.placex = [
    400/24, 400/24, 400/24, 400/24, 400/24, 400/24, 400/24, 400/24, 400/24, 400/24, 400/24, 400/24,
    400/24*23, 400/24*23, 400/24*23, 400/24*23, 400/24*23, 400/24*23, 400/24*23, 400/24*23, 400/24*23,
    400/24*23, 400/24*23, 400/24*23, 200, 200, 800
  ];
  this.placey = [
    400/24, 400/24*3, 400/24*5, 400/24*7, 400/24*9, 400/24*11, 400/24*13, 400/24*15, 400/24*17, 400/24*19, 400/24*21, 400/24*23,
    400/24*23, 400/24*21, 400/24*19, 400/24*17, 400/24*15, 400/24*13, 400/24*11, 400/24*9, 400/24*7, 400/24*5, 400/24*3, 400/24, 100, 300, 100
  ];

  /*
  ////SKAL SKRIVES LÆNGERE NEDE I KODEN
  ////VIGTIGT!!!!!!!


  if(this.enemy > 1){
    this.placing = [800, 100];
  }else if(this.enemy == 1 && j == 0){
      player2[this.enemyXY].xy = [200, 100];
      player2[this.enemyXY].place = 24;
  }else if(this.enemy == 1 && j == 1){
      player1[this.enemyXY].xy = [200, 300];
      player1[this.enemyXY].place = 25;
  }

  */

  if(this.enemy > 1){
    this.placing = [800, 100];
  }else if(i < 12){
    this.placing = [round(this.placex[i]+this.space*35), round(this.placey[i])];
  }else{
      this.placing = [round(this.placex[i]-this.space*35), round(this.placey[i])];
  }
  return this.placing;
}

function Start(i,j){
  if(j == 0 || j == 2){
    if(i == 0){
      this.xy = Place(0, j);
      this.place = 0;
    }else if(i == 1){
      this.xy = Place(0, j);
      this.place = 0;
    }else if(i == 2){
      this.xy = Place(11,j);
      this.place = 11;
    }else if(i == 3){
      this.xy = Place(11,j);
      this.place = 11;
    }else if(i == 4){
      this.xy = Place(11,j);
      this.place = 11;
    }else if(i == 5){
      this.xy = Place(11,j);
      this.place = 11;
    }else if(i == 6){
      this.xy = Place(11,j);
      this.place = 11;
    }else if(i == 7){
      this.xy = Place(18,j);
      this.place = 18;
    }else if(i == 8){
      this.xy = Place(18,j);
      this.place = 18;
    }else if(i == 9){
      this.xy = Place(18,j);
      this.place = 18;
    }else if(i == 10){
      this.xy = Place(18,j);
      this.place = 18;
    }else if(i == 11){
      this.xy = Place(18,j);
      this.place = 18;
    }else if(i == 12){
      this.xy = Place(16,j);
      this.place = 16;
    }else if(i == 13){
      this.xy = Place(16,j);
      this.place = 16;
    }else if(i == 14){
      this.xy = Place(16,j);
      this.place = 16;
    }
    if(j == 0){
      return this.xy;
    }else if(j == 2){
      return this.place;
    }
  }
  else if(j == 1 ||j == 3){
    if(i == 0){
      this.xy = Place(23, j);
      this.place = 23;
    }else if(i == 1){
      this.xy = Place(23, j);
      this.place = 23;
    }else if(i == 2){
      this.xy = Place(5,j);
      this.place = 5;
    }else if(i == 3){
      this.xy = Place(5,j);
      this.place = 5;
    }else if(i == 4){
      this.xy = Place(5,j);
      this.place = 5;
    }else if(i == 5){
      this.xy = Place(5,j);
      this.place = 5;
    }else if(i == 6){
      this.xy = Place(5,j);
      this.place = 5;
    }else if(i == 7){
      this.xy = Place(7,j);
      this.place = 7;
    }else if(i == 8){
      this.xy = Place(7,j);
      this.place = 7;
    }else if(i == 9){
      this.xy = Place(7,j);
      this.place = 7;
    }else if(i == 10){
      this.xy = Place(12,j);
      this.place = 12;
    }else if(i == 11){
      this.xy = Place(12,j);
      this.place = 12;
    }else if(i == 12){
      this.xy = Place(12,j);
      this.place = 12;
    }else if(i == 13){
      this.xy = Place(12,j);
      this.place = 12;
    }else if(i == 14){
      this.xy = Place(12,j);
      this.place = 12;
    }
    if(j == 1){
      return this.xy;
    }else if(j == 3){
      return this.place;
    }
  }
}

function Brick(i, j){
  if(j == 0){
    this.place = Start(i, 2);
  }else{
    this.place = Start(i, 3);
  }
  this.xy = Start(i, j);

  this.update = function(){
    if(j == 0){
      fill(255);
    }else if(j == 1){
      fill(50);
    }
    ellipse(this.xy[0],this.xy[1],400/12,400/12);
  }
}

function ShowBrick(i,j){
  this.xy = Place(i, j);
  this.place = i;
  if(this.xy == [800, 100]){
    this.place = 26;
  }
  this.exist = true;

  this.update = function(){
    fill(125);
    ellipse(this.xy[0],this.xy[1],400/12,400/12);
  }
}

function Dice(d){
  this.value = ceil(random(6));
  this.update = function(){
    stroke(0);
    fill(255);
    rect(475, height/2+d, 50, 50);
    fill(0);
    if(this.value == 1){
      ellipse(500,height/2+d+25, 8, 8);
    }else if(this.value == 2){
      ellipse(485,height/2+d+10, 8, 8);
      ellipse(515,height/2+d+40, 8, 8);
    }else if(this.value == 3){
      ellipse(515,height/2+d+10, 8, 8);
      ellipse(500,height/2+d+25, 8, 8);
      ellipse(485,height/2+d+40, 8, 8);
    }else if(this.value == 4){
      ellipse(485,height/2+d+10, 8, 8);
      ellipse(515,height/2+d+40, 8, 8);
      ellipse(515,height/2+d+10, 8, 8);
      ellipse(485,height/2+d+40, 8, 8);
    }else if(this.value == 5){
      ellipse(485,height/2+d+10, 8, 8);
      ellipse(515,height/2+d+40, 8, 8);
      ellipse(515,height/2+d+10, 8, 8);
      ellipse(500,height/2+d+25, 8, 8);
      ellipse(485,height/2+d+40, 8, 8);
    }else if(this.value == 6){
      ellipse(485,height/2+d+10, 8, 8);
      ellipse(515,height/2+d+10, 8, 8);
      ellipse(485,height/2+d+25, 8, 8);
      ellipse(515,height/2+d+25, 8, 8);
      ellipse(515,height/2+d+40, 8, 8);
      ellipse(485,height/2+d+40, 8, 8);
    }
  }

}

function Background(){
  fill(200, 170, 135);
  rect(0,0,400,400);
  noStroke();
  for(var i = 0; i < 12; i++){
    if(i == 0 || i == 2 || i == 4 || i == 6 || i == 8 || i == 10){
      fill(255,170,135);
      triangle(0,i*400/12,400/7*2,400/24+i*400/12,0,400/12+i*400/12);
    }else{
      fill(50,10,10);
      triangle(0,i*400/12,400/7*2,400/24+i*400/12,0,400/12+i*400/12);
    }
  }
  for(var i = 0; i < 12; i++){
    if(i == 0 || i == 2 || i == 4 || i == 6 || i == 8 || i == 10){
      fill(50,10,10);
      triangle(400,i*400/12,400-400/7*2,400/24+i*400/12,400,400/12+i*400/12);
    }else{
      fill(255,170,135);
      triangle(400,i*400/12,400-400/7*2,400/24+i*400/12,400,400/12+i*400/12);
    }
  }
  fill(180, 150, 115);
  rect(0,400/2-5,400,10);
}

function mousePressed(){
  if(newRound){
    if(mouseX >= 450 && mouseX <= 550 && mouseY >= 100 && mouseY <= 300){
      dice1.value = ceil(random(6));
      dice2.value = ceil(random(6));
      newRound = false;
      showing = false;
    }
  }
  else if(moving == true){
    if(gamer1){
      for(let i = 0; i < player1.length; i++){
        if(dist(mouseX, mouseY, player1[i].xy[0],player1[i].xy[1]) < 400/24){
          showing = true;
          selected = i;
          //console.log(i);
          selected = i;
          if(player1[i].place+dice1.value < 24){
            show[0] = new ShowBrick(player1[i].place+dice1.value, 0);
          }
          if(player1[i].place+dice2.value < 24){
            show[1] = new ShowBrick(player1[i].place+dice2.value, 0);
          }
          if(show[0].place == 26 && show[1].place == 26){
            gamer1 = false;
            gamer2 = true;
            newRound = true;
            moving = false;
            showing = false;
          }
        }
      }
      if(dist(mouseX,mouseY,show[0].xy[0],show[0].xy[1]) < 400/24){
        for(let o = 0; o < player1.length; o++){
          if(player1[o].place == player1[selected].place){
            if(player1[selected].xy[0] < 200){
              if(player1[o].xy[0] > player1[selected].xy[0]){
                player1[o].xy[0] -= 35;
              }
            }else if(player1[selected].xy[0] > 200){
              //console.log("O.xy: " + player1[o].xy[0])
              if(player1[o].xy[0] < player1[selected].xy[0]){
                player1[o].xy[0] += 35;
              }
            }
          }
        }

        player1[selected].xy = [show[0].xy[0], show[0].xy[1]];
        player1[selected].place = show[0].place;
        gamer1 = false;
        gamer2 = true;
        newRound = true;
        moving = false;
        showing = false;
      }else if(dist(mouseX,mouseY,show[1].xy[0],show[1].xy[1]) < 400/24){
        for(let o = 0; o < player1.length; o++){
          if(player1[o].place == player1[selected].place){
            if(player1[selected].xy[0] < 200){
              if(player1[o].xy[0] > player1[selected].xy[0]){
                player1[o].xy[0] -= 35;
              }
            }else if(player1[selected].xy[0] > 200){
              if(player1[o].xy[0] < player1[selected].xy[0]){
                player1[o].xy[0] += 35;
              }
            }
          }
        }
        player1[selected].xy = [show[1].xy[0], show[1].xy[1]];
        player1[selected].place = show[1].place;
        gamer1 = false;
        gamer2 = true;
        newRound = true;
        moving = false;
        showing = false;
      }
    }else if(gamer2){
      for(let i = 0; i < player2.length; i++){
        if(dist(mouseX, mouseY, player2[i].xy[0],player2[i].xy[1]) < 400/24){
          showing = true;
          selected = i;
          if(player2[i].place-dice1.value >= 0){
            show[0] = new ShowBrick(player2[i].place-dice1.value, 1);
          }
          if(player2[i].place-dice2.value >= 0){
            show[1] = new ShowBrick(player2[i].place-dice2.value, 1);
          }
          if(show[0].place == 26 && show[1].place == 26){
            gamer1 = true;
            gamer2 = false;
            newRound = true;
            moving = false;
            showing = false;
          }
        }
      }
      if(dist(mouseX,mouseY,show[0].xy[0],show[0].xy[1]) < 400/24){
        for(let o = 0; o < player2.length; o++){
          if(player2[o].place == player2[selected].place){
            if(player2[selected].xy[0] < 200){
              if(player2[o].xy[0] > player2[selected].xy[0]){
                player2[o].xy[0] -= 35;
              }
            }else if(player2[selected].xy[0] > 200){
              if(player2[o].xy[0] < player2[selected].xy[0]){
                player2[o].xy[0] += 35;
              }
            }
          }
        }
        player2[selected].xy = [show[0].xy[0], show[0].xy[1]];
        player2[selected].place = show[0].place;
        gamer1 = true;
        gamer2 = false;
        newRound = true;
        moving = false;
        showing = false;
      }else if(dist(mouseX,mouseY,show[1].xy[0],show[1].xy[1]) < 400/24){
        for(let o = 0; o < player2.length; o++){
          if(player2[o].place == player2[selected].place){
            if(player2[selected].xy[0] < 200){
              if(player2[o].xy[0] > player2[selected].xy[0]){
                player2[o].xy[0] -= 35;
              }
            }else if(player2[selected].xy[0] > 200){
              if(player2[o].xy[0] < player2[selected].xy[0]){
                player2[o].xy[0] += 35;
              }
            }
          }
        }
        player2[selected].xy = [show[1].xy[0], show[1].xy[1]];
        player2[selected].place = show[1].place;
        gamer1 = true;
        gamer2 = false;
        newRound = true;
        moving = false;
        showing = false;
      }
    }
  }else if(gamer1){
    for(let i = 0; i < player1.length; i++){
      if(dist(mouseX, mouseY, player1[i].xy[0],player1[i].xy[1]) < 400/24){
        selected = i;
        showing = true;
        if(player1[i].place+dice1.value < 24){
          show[0] = new ShowBrick(player1[i].place+dice1.value, 0);
        }else{
          show[0] = new ShowBrick(26);
        }
        if(player1[i].place+dice2.value < 24){
          show[1] = new ShowBrick(player1[i].place+dice2.value, 0);
        }else{
          show[1] = new ShowBrick(26);
        }
        showing = true;
        moving = true;
        if(show[0].place == 26 && show[1].place == 26){
          gamer1 = false;
          gamer2 = true;
          newRound = true;
          moving = false;
          showing = false;
        }
      }
    }
  }else if(gamer2){
    for(let i = 0; i < player2.length; i++){
      if(dist(mouseX, mouseY, player2[i].xy[0],player2[i].xy[1]) < 400/24){
        selected = i;
        if(player2[i].place-dice1.value >= 0){
          show[0] = new ShowBrick(player2[i].place-dice1.value, 0);
        }else{
          show[0] = new ShowBrick(26);
        }
        if(player2[i].place-dice2.value < 24){
          show[1] = new ShowBrick(player2[i].place-dice2.value, 0);
        }else{
          show[1] = new ShowBrick(26);
        }
        showing = true;
        moving = true;
        if(show[0].place == 26 && show[1].place == 26){
          gamer1 = true;
          gamer2 = false;
          newRound = true;
          moving = false;
          showing = false;
        }
      }
    }
  }
}
