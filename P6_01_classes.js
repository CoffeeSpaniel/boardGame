// JAVASCRIPT BEGINS

class Player {
  constructor(name, image, portrait, location, isTurn) {
    this.name = name;
    this.image = image;
    this.portrait = portrait;
    this.location = location;
    this.isTurn = isTurn;
    this.cssClass = "player";
    this.weapon = "unarmed";
    this.health = 100;
    this.defend = false;
    this.prevWeapon = "unarmed";
  }
  getImage() {
    return this.image;
  }
  get Position() {
    return this.location;
  }

  set Position(value) {
    this.location = value;
  } 

  get Weapon() {
    return this.weapon;
  }

  set Weapon(value) {
    this.weapon = value;
  }

  get IsTurn() {
    return this.isTurn;
  }

  set IsTurn(value) {
    this.isTurn = value;
  }
}

let player1 = new Player(
  "player1",
  "css/player1.webp",
  "css/knight1.png",
  "",
  true
);
let player2 = new Player(
  "player2",
  "css/player2.webp",
  "css/knight2.png",
  "",
  false
);

class Weapon {
  constructor(name, image, portrait, damage, player1, player2, arrayNum) {
    this.name = name;
    this.image = image;
    this.portrait = portrait;
    this.damage = damage;
    //images for end game
    this.player1 = player1;
    this.player2 = player2;
    //weapon array for spawning
    this.arrayNum = arrayNum;

    //add position
  }
}
let unarmed = new Weapon(
  "unarmed",
  "css/fist.webp",
  "css/portraitFist.png",
  20,
  "css/knight1Fist.png",
  "css/knight2Fist.png"
);
let deadfish = new Weapon(
  "deadfish",
  "css/deadfish.webp",
  "css/portraitDeadFish.png",
  25,
  "css/knight1Fish.png",
  "css/knight2Fish.png",
  2
);
let sword = new Weapon(
  "sword",
  "css/sword.webp",
  "css/portraitSword.png",
  35,
  "css/knight1Sword.png",
  "css/knight2Sword.png",
  1
);
let axe = new Weapon(
  "axe",
  "css/axe.webp",
  "css/portraitAxe.png",
  30,
  "css/knight1Axe.png",
  "css/knight2Axe.png",
  0
);

let weaponArray = [axe, sword, deadfish];

class Obstacle {
  constructor(name, image) {
    this.name = name;
    this.image = image;
  }
}

let rock1 = new Obstacle("rock1", "css/rock1.png");
let rock2 = new Obstacle("rock2", "css/rock2.webp");
let tree1 = new Obstacle("tree1", "css/tree1.png");
let tree2 = new Obstacle("tree2", "css/tree2.png");
let tree3 = new Obstacle("tree3", "css/tree3.png");

obstacleArray = [tree1, tree2, tree3, rock1, rock2];



let Arrow = {
  title: "arrow",
  image: "css/arrow.webp",
};
