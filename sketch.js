var destroyer1,destroyer2,destroyer3,destroyer4,destroyer5;
var ocean;
var oceanImg;
var radar;
var radarImg;
var destroyer1Img,destroyer2Img,destroyer3Img,destroyer4Img,destroyer5Img;

function preload(){

  destroyer1Img = loadImage("Destroyer1.png");
  destroyer2Img = loadImage("Destroyer2.png");
  destroyer3Img = loadImage("Destroyer3.png");
  destroyer4Img = loadImage("Destroyer4.png");
  destroyer5Img = loadImage("Destroyer5.png");
  oceanImg = loadImage("OceanBackground.png");
  radarImg = loadImage("Radar.jpg");
}

function setup() {
  createCanvas(1515,800);

  destroyer5 = createSprite(240,290);
  destroyer5.addImage("destroyer5",destroyer5Img);
  destroyer5.scale = 0.3;
  destroyer5.setCollider("rectangle",0,0,800,300);
  destroyer5.debug = false;


  destroyer2 = createSprite(1400,560);
  destroyer2.addImage("destroyer2",destroyer2Img);
  destroyer2.scale = 0.3; 
  destroyer2.setCollider("rectangle",0,0,700,150);  
  destroyer2.debug = false; 
  
  destroyer3 = createSprite(1420,100);
  destroyer3.addImage("destroyer3",destroyer3Img);
  destroyer3.scale = 0.2;
  destroyer3.setCollider("rectangle",0,0,600,300);
  destroyer3.debug = false; 

  destroyer4 = createSprite(1420,300);
  destroyer4.addImage("destroyer4",destroyer4Img);
  destroyer4.scale = 0.2;
  destroyer4.setCollider("rectangle",0,0,600,350);
  destroyer4.debug = false;

  radar = createSprite(210,710,390,160);
  radar.addImage("radar",radarImg);
  radar.scale = 0.2;
  
}


function draw() {

   background(oceanImg);

   //adding velocities to destroyers

  if(keyDown("up")){
    destroyer5.velocityX = 0;
    destroyer5.velocityY = -0.58;
  }

  if(keyDown("down")){
    destroyer5.velocityX = 0;
    destroyer5.velocityY = 0.58;
  }

  if(keyDown("left")){
    destroyer5.velocityX = -0.58;
    destroyer5.velocityY = 0;
  }

  if(keyDown("right")){
    destroyer5.velocityX = 0.58;
    destroyer5.velocityY = 0;
  }

  destroyer2.velocityX = -0.60;
  
  destroyer3.velocityX = -0.57;
  
  destroyer4.velocityX = -0.50;

  if(destroyer5.collide(destroyer2)){
    destroyer5.destroy();
    destroyer2.destroy();
  }

  if(destroyer5.collide(destroyer3)){
    destroyer5.destroy();
    destroyer3.destroy();
  }

  if(destroyer5.collide(destroyer4)){
    destroyer5.destroy();
    destroyer4.destroy();
  }


drawSprites();
  
}