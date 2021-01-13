var flag=0;
function preload(){
  pondimage=loadImage("pondImage.jpg");
  frogImage=loadImage("frog.png");
}

function setup() {
  createCanvas(2000,800);
  pond1 = createSprite(1200, 500, 50, 50);
  pond1.addImage(pondimage);
  pond2 = createSprite(400,500,50,50);
  pond2.addImage(pondimage);

  frog1 = createSprite(1300,550,20,20);
  frog1.addImage(frogImage);
  frog1.scale=0.1;

}

function draw() {
  background(255,255,255);
  
  if(flag===0){
    frog1.velocityY=-15;
  }
  if(frog1.y<250){
    flag=1;
  }
if(flag===1){
  frog1.velocityY=15;
}
if(frog1.y>550){
  flag=0;
}
if(frog1.y>500){
  frog1.visible=false;
}
else{
frog1.visible=true;
}
  drawSprites();
}
function mouseDragged(){
  frog1.setPosition(World.mouseX,World.mouseY);
}
