// JAVASCRIPT BEGINS

// *****************
// RANDOM TILE FUNCTION
// *****************

// creates a random tile ID from one to last tile ID
// this is for tile assignment

function randomise() {
  const randomNumber = Math.random();

  const randomTile = randomNumber * 100 * quantityOfTiles;

  const rounding = Math.floor(randomTile);

  const assignedTile = (rounding % quantityOfTiles) + 1;

  return assignedTile;
}

// *************** COORDINATES AND ID CONVERSION ********************

//input an id to find the coordinates
function findCoord(id) {
  let Coord = document.getElementById(id).className;

  Coord = Coord.replace("y", "");
  Coord = Coord.replace("boardTile x", "");
  Coord = Coord.split(" ");
  if (Coord.includes(" player")) {
    Coord.replace(" player", "");
  }
  CoordArray = [Coord[0], Coord[1]];

  return CoordArray;
}

// returns a location (all classes and id)

function getLocation(id) {
  let location = document.getElementById(id);
  return location;
}  

//input a coordinate to find an id

function findIdentity(coordX, coordY) {
  let Identity = "boardTile x" + coordX + " y" + coordY;
  Identity = document.getElementsByClassName(Identity)[0].id;
  return Identity;
}

// SPAWNING

//SETS HOW MANY DIFFERENT TYPES OF WEAPONS AND OBJECTS THERE ARE HERE

let numOfObstacles = 5;
let numOfWeapons = 3;

// this is for array random selecetion

function random(number) {
  const randomNumber = Math.random();

  const randomSpawn = randomNumber * 100 * number;

  const rounding = Math.floor(randomSpawn);

  const assigned = rounding % number;

  return assigned;
} 

// ARRAYS

let occupied = [];
let playerArray = [];
let obstacleArray = [];
let movementArray = [];
