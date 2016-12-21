window.onload = function() {
  var date = new Date();
  var day = date.getDate();
  var month = date.getMonth();

  var todaysDate = [];
  todaysDate.push(day);
  todaysDate.push(month);
  console.log(todaysDate);

  //countdown til xmas 25 11
  //work out timezones
  var xmasDay = ["25", "11"];
  console.log(xmasDay); 

  var scene = new Phaser.Game(500, 900, Phaser.AUTO, "phaser-example", { 
    preload: preload, 
    create: create,
    update: update, 
    render: render
  });

  var elf;
  var elves;

  var map;
  var layer;
  
  var yLocation = Array(118, 280, 440, 600, 760);
  var spriteImages = Array("elf", "elf2", "elf3", "elf4", "elf5", "elf6", "elf7");

  function preload () {
    scene.load.atlasJSONHash("elf", "/assets/sprites/elf-walk.png", "/assets/sprites/elf_walk.json");
    scene.load.atlasJSONHash("elf2", "/assets/sprites/elf-walk-red.png", "/assets/sprites/elf_walk.json");
    scene.load.atlasJSONHash("elf3", "/assets/sprites/elf-carry.png", "/assets/sprites/elf_walk.json");
    scene.load.atlasJSONHash("elf4", "/assets/sprites/elf-carry-skateboard.png", "/assets/sprites/elf_walk.json");
    scene.load.atlasJSONHash("elf5", "/assets/sprites/elf-overhead-present-blue.png", "/assets/sprites/elf_walk.json");
    scene.load.atlasJSONHash("elf6", "/assets/sprites/elf-overhead-candycane.png", "/assets/sprites/elf_walk.json");
    scene.load.atlasJSONHash("elf7", "/assets/sprites/elf-overhead-present-magenta.png", "/assets/sprites/elf_walk.json");

    scene.load.tilemap("map", "assets/tiles/tilemap.csv", null, Phaser.Tilemap.CSV);
    scene.load.image("wood", "assets/tiles/tilemap-wood.png");
  }

  function create () {

    scene.stage.backgroundColor = 0x422B1D;
    scene.physics.setBoundsToWorld();

    map = scene.add.tilemap("map", 80, 80);
    map.addTilesetImage("wood");
    
    layer = map.createLayer(0);
    layer.resizeWorld();

    elves = scene.add.group();
    elves.enableBody = true;
    elves.physicsBodyType = Phaser.Physics.ARCADE;
    
    for (var y = 0; y < 8; y++){
      elf = elves.create(0, yLocation[Math.floor(Math.random()*yLocation.length)], spriteImages[Math.floor(Math.random()*spriteImages.length)]);
      elf.anchor.set(0.5,0.5);
      elf.animations.add("run")
      elf.animations.play("run", 10, true);

      elf.checkWorldBounds = true;
      elf.events.onOutOfBounds.add(elfOut, this);
      elf.body.velocity.x = Math.floor((Math.random() * 100) + 50);
    }
  }

  function elfOut(elf) {
    elf.reset(elf.x, 0);
    elf.reset(elf.y, yLocation[Math.floor(Math.random()*yLocation.length)]);
    elf.key = spriteImages[Math.floor(Math.random()*spriteImages.length)];
    elf.loadTexture(elf.key,0,false);
    elf.body.velocity.x = Math.floor((Math.random() * 100) + 50);
  }

  function update() {
  }
  
  function render () {
  }
};

// elf.scale.x = -1;