
let avatar = document.getElementById('avatar');
let wall = document.getElementById('gameboard');

var img = document.getElementById('maze');
var canvas = document.createElement('canvas');
canvas.width = img.width;
canvas.height = img.height;
canvas.getContext('2d').drawImage(img, 0, 0, img.width, img.height);
var pixelData = canvas.getContext('2d');
console.log(pixelData.get);


avatar.style.left = '0px';
avatar.style.top = '0px';

document.addEventListener('keydown', function getKeyAndMove(e){
	var key_code=e.which||e.keyCode;
	switch(key_code){
		case 37: //left arrow key
			moveLeft();
			break;
		case 38: //Up arrow key
			moveUp();
			break;
		case 39: //right arrow key
			moveRight();
			break;
		case 40: //down arrow key
			moveDown();
			break;						
	}
}
	);



function moveLeft(){
	if(parseInt(avatar.style.left)>5){
	avatar.style.left=parseInt(avatar.style.left)-5 +'px';}}

function moveRight(){
	avatar.style.left=parseInt(avatar.style.left)+5 +'px';}

function moveUp(){
	avatar.style.top=parseInt(avatar.style.top)-5 +'px';}

function moveDown(){
	avatar.style.top=parseInt(avatar.style.top)+5 +'px';}

function check (){

}