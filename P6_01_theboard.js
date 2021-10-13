// JAVASCRIPT BEGINS

/*                  **********************************************
                    ********************************************** 

                                       BOARD SPAWN

                    ********************************************** 
                    *********************************************/

let gameBoard = document.getElementById("boardContainer");

// *****************
// set board size
// *****************

let columns = 15;
let rows = 10;

// *****************
//Board and coordinates creation based on columns and rows
// *****************
let quantityOfTiles = columns * rows;

for (let i = 1; i <= quantityOfTiles; i++) {
  let newTile = document.createElement("div");

  newTile.classList.add("boardTile");

  if (i % columns == 0) {
    newTile.classList.add("x" + columns);
  } else {
    newTile.classList.add("x" + (i % columns));
  }

  newTile.classList.add("y" + Math.ceil(i / columns));
  newTile.setAttribute("id", i);

  gameBoard.appendChild(newTile);
}

// *****************
//  BOARD ORGANISER
// *****************

gameBoard.style.setProperty(
  "grid-template-columns",
  "repeat(" + columns + ", 1fr)"
);
gameBoard.style.setProperty("grid-template-rows", "repeat(" + rows + ", 1fr)");

/*                  **********************************************
                    ********************************************** 

                                     OBJECT SPAWN

                    ********************************************** 
                    *********************************************/

function obstacleSpawn() {
  let spawnObstacle = document.getElementById(randomise());

  if (occupied.includes(spawnObstacle.id) == true) {
    obstacleSpawn(); // recursion instead of a while loop
  } else {
    occupied.push(spawnObstacle.id);
    spawnObstacle.classList.add("obstacle");

    spawnObstacle.style.setProperty(
      "background-image",
      "url(" + obstacleArray[random(numOfObstacles)].image + ")"
    );
    spawnObstacle.style.setProperty("background-size", "cover");
  }
}

// OBSTACLE SPAWN LOOP
// SET HOW MANY OBSTALES SPAWN BELOW

for (let i = 1; i <= 20; i++) {
  obstacleSpawn();
}

/*                  **********************************************
                    ********************************************** 

                                     WEAPON SPAWN

                    ********************************************** 
                    *********************************************/

let weaponPlacement = [];
let weaponItem = "";

function weaponSpawn(location, weapon) {
// checking it isnt double spawning  
  if (location === "randomSpawn") {
    location = document.getElementById(randomise());
    location = location.id;

    if (
      (occupied.includes(location) ||
        weaponPlacement.includes(location) === true) &&
      getLocation(location).classList.contains("dropping") === false
    ) {
      weaponSpawn("randomSpawn", "randomWeapon"); // recursion instead of a while loop
      return;
    }
  //spawning it in
  }
  location = getLocation(location);

  if (weapon === "unarmed" || weapon === unarmed) {
    location.removeAttribute("style");
    return;
  } else {
    location.classList.add("weapon");

    if (weapon === "randomWeapon") {
      weaponPlacement.push(location.id);
      weaponItem = random(numOfWeapons);
      location.style.setProperty(
        "background-image",
        "url(" + weaponArray[weaponItem].image + ")"
      );
      location.style.setProperty("background-size", "cover");
      location.classList.add(weaponArray[weaponItem].name);
    } else {
      if (weapon === "axe") {
        weaponItem = axe.arrayNum;
      }
      if (weapon === "sword") {
        weaponItem = sword.arrayNum;
      }
      if (weapon === "deadfish") {
        weaponItem = deadfish.arrayNum;
      }
      weaponItem = weaponArray[weaponItem];

      location.classList.add(weaponItem.name);
      location.style.setProperty(
        "background-image",
        "url(" + weaponItem.image + ")"
      );
      location.style.setProperty("background-size", "cover");
    }
  }
}

// WEAPON SPAWN LOOP
// SET HOW MANY WEAPONS SPAWN BELOW
// 5 is good

for (let i = 1; i <= 10; i++) {
  weaponSpawn("randomSpawn", "randomWeapon");
}
console.log(weaponPlacement);

/*                  **********************************************
                    ********************************************** 

                                     PLAYER SPAWN

                    ********************************************** 
                    *********************************************/

function spawnPlayer(which, identifier) {
// identifier is the position to spawn in 
// which is which player (1 or 2)

  if ((identifier === "randomise") == true) {
    identifier = randomise();
  }

  let playerSpawn = document.getElementById(identifier);

  let playerSpawnID = playerSpawn.id.toString();

  let whichPlayer = "";
  

  if (
    occupied.includes(playerSpawnID) ||
    weaponPlacement.includes(playerSpawnID) == true
  ) {
    spawnPlayer(which, "randomise");
    return;
  } else {
    if ((which === 1) == true) {
      whichPlayer = player1;
      appearance = player1.image;
    }

    if ((which === 2) == true) {
      whichPlayer = player2;
      appearance = player2.image;
    }
    whichPlayer.Position = playerSpawnID;

    playerSpawn.classList.add("player");
    playerSpawn.classList.add("" + whichPlayer["name"] + "");
  }
}
spawnPlayer(1, "randomise");

//this prevents player 2 spawning on top of player 1 in rare instances
weaponPlacement.push(player1.location);

spawnPlayer(2, "randomise");

let playerID = [""];

//this allows spawned weapons to be interacted with after spawning process
weaponPlacement = [];

//console.log(occupied);

/*                  **********************************************
                    ********************************************** 

                                     RULES POP UP

                    ********************************************** 
                    *********************************************/

let ruleSheet = document.getElementById("ruleSheet");

function rulePopUp() {
  console.log("the rules!");
  gameBoard.style.filter = "brightness(50%)";
  $(ruleSheet).css({
    display: "block",
  });
}

function ruleClose() {
  gameBoard.style.filter = "brightness(100%)";
  $(ruleSheet).css({
    display: "none",
  });
}

document.getElementById("theRules").addEventListener("click", rulePopUp);

document.getElementById("ruleClose").addEventListener("click", ruleClose);
