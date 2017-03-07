function setup() {
createCanvas(400,400); // p1 changes the width, p2 changes the height
}

function draw() {
  background( mouseX,255,255 ); //p1 changes the color, //if we have parameters, they are red, blue and green
  rect( mouseX, 50,100,160, 200); // p1 moves the rectangle on the x axis, p2 y-axis, p3 width, p4 height 
}