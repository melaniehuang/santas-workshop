var elf;

function setup() {
  createCanvas(windowWidth, windowHeight);
  createSprite(400, 200, 50, 50);
  background(45,21,11);
  var animatedSprite = loadAnimation("/data/walk00.png","/data/walk01.png","/data/walk02.png","/data/walk03.png");
  
  elf = createSprite(windowWidth/2, windowHeight/2, 32, 32);
  elf.addAnimation("moving", animatedSprite);

}

function draw() {
  background(45,21,11);
  fill(66,43,29);
  rect(20,20,windowWidth-40,windowHeight-40);  
  
  if(mouseX < elf.position.x - 10) {
    elf.changeAnimation("moving");
    elf.mirrorX(-1);
    elf.velocity.x = - 2;
  }
  else if(mouseX > elf.position.x + 10) {
    elf.changeAnimation("moving");
    elf.mirrorX(1);
    elf.velocity.x = 2;
  }
  else {
    elf.changeAnimation("floating");
    elf.velocity.x = 0;
  }

  drawSprites();
}
