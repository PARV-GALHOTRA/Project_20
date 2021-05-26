var tom, jerry;
var tomImg1, tomImg2, tomImg3, jerryImg1 , jerryImg2, jerryImg3, bgImg;

function preload() {
 jerryImg1 = loadAnimation("images/mouse1.png");
 jerryImg2 = loadAnimation("images/mouse2.png","images/mouse3.png")
 jerryImg3 = loadAnimation("images/mouse4.png");
 tomImg1 = loadAnimation("images/cat1.png");
 tomImg2 = loadAnimation("images/cat2.png","images/cat3.png");
 tomImg3 = loadAnimation("images/cat4.png");
 bgImg = loadImage("images/garden.png")
}

function setup(){
    createCanvas(1000,600);   
    
    tom = createSprite(670,520,150,100);
    tom.addAnimation("tom", tomImg1); 
    tom.scale = 0.15;

    jerry = createSprite(100,510,150,100);
    jerry.addAnimation("jerry", jerryImg1);
    jerry.scale = 0.15;

}

function draw() {

    background(bgImg);
    
    if(tom.x-jerry.x <(tom.width-jerry.width)/2){
      tom.velocityX = 0;
      tom.addAnimation("tom", tomImg3);
      jerry.addAnimation("jerry", jerryImg3);  
    }

    drawSprites();
}


function keyPressed(){

  if(keyCode === LEFT_ARROW){
    tom.velocityX = -5;
    tom.addAnimation("tom", tomImg2); 
    jerry.addAnimation("jerry", jerryImg2); 
  }

}