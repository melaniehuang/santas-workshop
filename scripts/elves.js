var mouse_moved = false;
var touch_started = false;

var elf_sprite_sheet;
var elf_frames = [
  {"name":"elf_walk00", "frame":{"x":0, "y": 0, "width": 128, "height": 128}},
  {"name":"elf_walk01", "frame":{"x":128, "y": 0, "width": 128, "height": 128}},
  {"name":"elf_walk02", "frame":{"x":256, "y": 0, "width": 128, "height": 128}},
  {"name":"elf_walk03", "frame":{"x":384, "y": 0, "width": 128, "height": 128}}
];
var elf;
var elf_walk;
var elf_stand;

function preload() {
  elf_sprite_sheet = loadSpriteSheet("data/elf_walk.png", elf_frames);
  elf_walk = loadAnimation(elf_sprite_sheet);
  elf_stand = loadAnimation(new SpriteSheet("data/elf.png",[
    {"name":"elf_stand", "frame":{"x":0, "y": 0, "width": 128, "height": 128}}
  ]));
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  createSprite(0, 0, 10, 10);
  background(45,21,11);  
  
  elf = createSprite(windowWidth/2, windowHeight/2, 128, 128);
  elf.addAnimation('walk', elf_walk);
  elf.addAnimation('stand', elf_stand);
}

function draw() {
  background(45,21,11);
  fill(66,43,29);
  rect(20,20,windowWidth-40,windowHeight-40);  
  
  var eventX;
  
  if (isTouch()) {
    eventX = touchX;
  } else {
    eventX = mouseX;
  }

  if (eventX < elf.position.x - 10) {
    elf.changeAnimation('walk');
    elf.mirrorX(-1);
    elf.velocity.x = - 2;
  }
  else if (eventX > elf.position.x + 10) {
    elf.changeAnimation('walk');
    elf.mirrorX(1);
    elf.velocity.x = 2;
  }
  else {
    elf.changeAnimation('stand');
    elf.velocity.x = 0;
  }

  drawSprites();
}

function touchStarted() {
  touch_started = true;
}

function mouseMoved() {
  mouse_moved = true;
}

function isTouch() {
  return touch_started && !mouse_moved;
}