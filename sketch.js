var fixedRect, movingRect;

function setup() {
  createCanvas(600,600);

  fixedRect = createSprite(200,200,50,100);
  movingRect = createSprite(400,200,100,50);

  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";
}

function draw() {
  background("black");

  movingRect.x =  mouseX;
  movingRect.y =  mouseY;

  if(movingRect.x - fixedRect.x < movingRect.width/2+fixedRect.width/2 &&
    fixedRect.x - movingRect.x < movingRect.width/2+fixedRect.width/2&&
    movingRect.y - fixedRect.y < movingRect.height/2+fixedRect.height/2 &&
    fixedRect.y - movingRect.y < movingRect.height/2+fixedRect.height/2){
    fixedRect.shapeColor = "blue";
    movingRect.shapeColor = "blue";
  }

  else {
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }

  drawSprites();
}