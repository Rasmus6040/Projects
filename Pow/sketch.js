let menu = new Menu();
let menuS = true;
let play = false;
let menuO = false;
let menuI = false;
let GameOver = false;
let menuP = false;
let p1 = true;
let p1s = true;
let p2 = false;
let p2s = false;

let player;
let player2;
let p1a = false;
let p2a = false;
let score = 0;
let level;
let trail = new Array;
let enemy = new Array;
let coin = new Array;
let coins = 0;
let counter = 0;
function setup(){
	createCanvas(600, 600);
}

function draw(){
	background(51);
	Controller();
}

/*function KeyPressed(){
	if(keyCode == SPACE){
		if(menuP){
			menuP = false;
		}else{
			menuP = true;
		}

	}
}
*/
