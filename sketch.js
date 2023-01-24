var backGround1;
var spaceShuttle,spaceShuttle1;
var holeImg;
var gameState=1;
var blackhole;
var hole;
let ground;
var bg_img;
var vy = 0;
var g = 0.05;

function preload(){
  backGround1=loadImage("Space1.jpg");
  spaceShuttle=loadImage("Spaceshuttle.png");
  holeImg=loadImage("Blackhole.jpg");
  bg_img = loadImage("bg.png");
};

function setup(){
  createCanvas(1500,700);
  
  spaceShuttle1 = createSprite(750,500,30,100);
  spaceShuttle1.addImage(spaceShuttle);
  spaceShuttle1.setCollider("rectangle",0,0,200,200)
  spaceShuttle1.scale=0.5;

  frameRate(80);

  

  rectMode(CENTER);
  textSize(15);

  blackhole= new Blackhole();
  

}

function draw(){
  


  if(gameState===1){



    background(backGround1);

    blackhole.show();

  if (keyIsDown(UP_ARROW)) {
    spaceShuttle1.position.y -= 10;
  }
  if (keyIsDown(DOWN_ARROW)) {
    spaceShuttle1.position.y += 10;
  }
  if (keyIsDown(LEFT_ARROW)) {
    spaceShuttle1.position.x -= 10;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    spaceShuttle1.position.x += 10;
  }
    
    if(spaceShuttle1.isTouching(blackhole)){
      gameState=2;
    }
  }


if(gameState===2){



//blackhole.hide();

background(51);
image(bg_img,0,0);
fill(255);
text("Vertical Velocity: "+round(vy),800,75);
pop();
//caida
vy +=g;
spaceShuttle1.position.y+=vy;
}



  drawSprites();
}

