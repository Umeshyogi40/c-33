var snow1,snow2,bg3; 
var char1,char2;
var boyImg,boy;
function preload (){
  snow1=loadImage("snow4.webp")
  snow2 = loadImage("snow5.webp")
  bg3 = loadImage("snow3.jpg")
  boyImg = loadImage("boy.jpg")

}
function setup() {

  createCanvas(800,400);
  boy = createSprite(60,350,40,40)
  boy.addImage(boyImg)
  boy.scale=0.1;
  
}

function draw() {
  background(bg3);  
  if (frameCount%50===0){
  char1=createSprite(random(50,750),50,20,20)
  char1.addImage(snow1);
  char1.velocityY=3;
  char1.scale=0.1
  }
  if (frameCount%70===0){
    char2=createSprite(random(60,730),45,20,20)
    char2.addImage(snow2);
    char2.velocityY=2;
    char2.scale=0.05
    }
  drawSprites();
}