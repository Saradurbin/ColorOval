//Stanford empty project

// DEFINE variables here
var Sara;
var Durbin;
var wall1;
var wall2;
var wall3;
var wall4;
function setup() {
createCanvas(800,600);
//INSTANTIATE variables here
Sara= createSprite(100, 150, 200, 250);
Durbin= createSprite(300,350,400,450)//wall1 = createSprite();
walls = Group ();
wall1=createSprite(0,-25,2400,50)
wall2=createSprite(800+50,0+650/2,100,650)
wall3=createSprite(0,625,2400,50)
wall4=createSprite(-25,0+650/2,50,1200)
walls.add(wall1);
walls.add(wall2);
walls.add(wall3);
walls.add(wall4);

for(var i = 0; i < walls.length ; i++)
{walls.get(i).immovable = true; }

Sara.friction= .98
Durbin.friction= .98
}








function draw() {
background(200);
Sara.bounce(walls);
Durbin.bounce(walls)
//UPDATE variables here
drawSprites();
    if(keyDown(37)){

//Put what you want to happen when left is pressed in here
Sara.addSpeed(.05, 180);
//Durbin.addSpeed(.05, 180);
}
if(keyDown(65)){

//Put what you want to happen when left is pressed in here
//Sara.addSpeed(.05, 180);
Durbin.addSpeed(.05, 180);
}

if(keyDown(39)){
//Put what you want to happen when right is pressed in here
Sara.addSpeed(.05, 360);
//Durbin.addSpeed(.05,360);
}
if(keyDown(68)){
//Put what you want to happen when right is pressed in here
//Sara.addSpeed(.05, 360);
Durbin.addSpeed(.05,360);
}
if( keyDown(38)){
//Put what you want to happen when right is pressed in here
Sara.addSpeed(.05,270);
//Durbin.addSpeed(.05,270);
}
if( keyDown(87)){
//Put what you want to happen when right is pressed in here
//Sara.addSpeed(.05,270);
Durbin.addSpeed(.05,270);
}
if( keyDown(40)){
//Put what you want to happen when right is pressed in here
Sara.addSpeed(.05,90);
//Durbin.addSpeed(.05,90);
}
if( keyDown(83)){
//Put what you want to happen when right is pressed in here
//Sara.addSpeed(.05,90);
Durbin.addSpeed(.05,90);
}
}
