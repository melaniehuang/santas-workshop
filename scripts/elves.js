window.onload = function() {
  var scene = new Phaser.Game(500, 900, Phaser.AUTO, "phaser-example", { 
    preload: preload, 
    create: create,
    update: update, 
    render: render
  });
  
  var map;
  var layer;
  
  function preload () {
    scene.load.atlasJSONHash("elf", "/assets/sprites/elf_walk.png", "/assets/sprites/elf_walk.json");

    scene.load.tilemap("map", "assets/tiles/tilemap.csv", null, Phaser.Tilemap.CSV);
    scene.load.image("wood", "assets/tiles/tilemap-wood.png");
  }

  function create () {
    scene.stage.backgroundColor = 0x422B1D;

    map = scene.add.tilemap("map", 80, 80);
    map.addTilesetImage("wood");
    
    layer = map.createLayer(0);
    layer.resizeWorld(0);

    var elf = scene.add.sprite(128, 137, "elf");
    elf.animations.add("run");
    elf.animations.play("run", 12, true);
  }

  function update () {
  }
  
  function render () {
  }
};