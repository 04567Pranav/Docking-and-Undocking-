var bg
var iss,issimg,spacecraft,scimg,scimg2,scimg3,scimg4
var hasDocked=false


function preload(){
  bg=loadImage("spacebg.jpg")
  issimg=loadImage("iss.png")
  scimg=loadImage("spacecraft1.png")
  scimg2=loadImage("spacecraft2.png")
  scimg3=loadImage("spacecraft3.png")
  scimg4=loadImage("spacecraft4.png")
}


function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);

  iss =createSprite(330,130)
  iss.addImage(issimg)
  iss.scale= 0.40

  spacecraft =createSprite(285,240)
  spacecraft.addImage(scimg)
  spacecraft.scale= 0.24


}

function draw() {
  background(bg);  

  if(!hasDocked){
    spacecraft.x = spacecraft.x + random(-1,1)

    if(keyDown("Up_ARROW")){
      spacecraft.y = spacecraft.y -2
    }

    if(keyDown("Left_ARROW")){
      spacecraft.addImage(scimg3)
      spacecraft.x=spacecraft.x-2
    }

    if(keyDown("Right_ARROW")){
      spacecraft.addImage(scimg2)
      spacecraft.x=spacecraft.x +2
    }

    if(keyDown("Down_ARROW")){
      spacecraft.addImage(scimg)
    }
  }

  if(spacecraft.y<=(iss.y+70)&& spacecraft.x<=(iss.x-10)){
    hasDocked=true;
    textSize(25);
    fill("green");
    text("Docking Succsseful",200,300)
  
  }




  drawSprites();
}