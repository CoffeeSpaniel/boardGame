// JAVASCRIPT BEGINS

/*                  **********************************************
                    ********************************************** 

                                     ARROW SPAWNER

                    ********************************************** 
                    *********************************************/
// axis =
const HORIZONTAL = "horizontal";
const VERTICAL = "vertical";
//  plus or neg if needed for up and left
//rotation for the arrow direction
// which arrow (player1 or 2)

function movementFunction(axis, coord, plusOrNegOne, rotation, whichArrow) {
  for (let i = 1; i <= 3; i++) {
    let movement = coord * 1 + plusOrNegOne * i;

    if (axis == HORIZONTAL) {
      if (
        movement <= 0 ||
        movement > columns ||
        occupied.includes(findIdentity(movement, playerCoordY)) == true
      ) {
        break;
      }

      let movementValue = [movement, playerCoordY];

      movementArray.push(movementValue);
      let arrowClass = document.getElementById(
        findIdentity(movement, playerCoordY)
      );
      arrowClass.classList.add("arrow");
      // this makes sure to highlight weapon or player within range with an outline
      if (
        arrowClass.classList.contains("player") == true ||
        arrowClass.classList.contains("weapon") == true
      ) {
        arrowClass.style.outline = "4px groove rgba(255,26,242,0.6)";
      } else {
        arrowClass.style.setProperty(
          "background-image",
          "url(css/" + whichArrow + ".webp)"
        );
        arrowClass.style.setProperty("background-size", "cover");

        arrowClass.style.transform = "rotate(" + rotation + "deg)";
      }
      // this stops playing being able to jump over other player
      if (arrowClass.classList.contains("player") == true) {
        break;
      }
    }
    if (axis == VERTICAL) {
      if (
        movement <= 0 ||
        movement > rows ||
        occupied.includes(findIdentity(playerCoordX, movement))
      ) {
        break;
      }

      let movementValue = [playerCoordX, movement];

      movementArray.push(movementValue);

      let arrowClass = document.getElementById(
        findIdentity(playerCoordX, movement)
      );
      arrowClass.classList.add("arrow");

      if (
        arrowClass.classList.contains("player") == true ||
        arrowClass.classList.contains("weapon") == true
      ) {
        arrowClass.style.outline = "4px groove rgba(255,26,242,0.6)";
      } else {
        arrowClass.style.setProperty(
          "background-image",
          "url(css/" + whichArrow + ".webp)"
        );
        arrowClass.style.setProperty("background-size", "cover");

        arrowClass.style.transform = "rotate(" + rotation + "deg)";
      }
      // this stops playing being able to jump over other player
      if (arrowClass.classList.contains("player") == true) {
        break;
      }
    }
  }
}

/*                  **********************************************
                    ********************************************** 

                                     MASTER ARROW SPAWNER

                    ********************************************** 
                    *********************************************/

// this function runs each four directions for arrows to spawn from indicating available movement to the player

function masterMovement(playerID, whichPlayer) {
  playerCoordX = findCoord(playerID)[0] * 1;
  playerCoordY = findCoord(playerID)[1] * 1;

  if (whichPlayer === 1) {
    whichArrow = "arrow1";
  }
  if (whichPlayer === 2) {
    whichArrow = "arrow2";
  }

  // right
  movementFunction(HORIZONTAL, playerCoordX, 1, 0, whichArrow);
  // down
  movementFunction(VERTICAL, playerCoordY, 1, 90, whichArrow);
  // left
  movementFunction(HORIZONTAL, playerCoordX, -1, 180, whichArrow);
  // up
  movementFunction(VERTICAL, playerCoordY, -1, 270, whichArrow);
}

masterMovement(player1.location, 1);

/*                  **********************************************
                    ********************************************** 

                             CLICK MOVEMENT FUNCTIONALITY

                    ********************************************** 
                    *********************************************/

let playerLocation = player1.location;
let direction = VERTICAL;
let steps = 0;
let UDLR = "R";
let previousLocation1 = getLocation(player1.location);
let previousLocation2 = getLocation(player2.location);
let droppedItem = "";
let whoseTurn = "player1";
let whoTurn = player1;
let nextStep = 1;

function movePlayer(e) {
  let arrowClick = document.getElementsByClassName("arrow"); // returns a collection of many
  //establishes whose turn it is and which data to use

  //removes player classes and style
  if (e.target.classList.contains("arrow")) {
    ///////////////////////////////////////////////////////////////////////////

    // establish which direction via coord system

    if (player1.isTurn === true) {
      playerLocation = player1.location;
    } else {
      playerLocation = player2.location;
    }

    playerLocation = findCoord(playerLocation);

    let destination = findCoord(e.target.id);

    if (destination[0] != playerLocation[0]) {
      direction = HORIZONTAL;
    } else {
      direction = VERTICAL;
    }

    //establish difference in coord eg 1, 2 or 3 consecutive moves

    if (direction === HORIZONTAL) {
      steps = destination[0] - playerLocation[0];

      if (steps > 0) {
        UDLR = "R";
      } else {
        UDLR = "L";
        //  TIMES -1 MAKES i POSITIVE AGAIN
        steps = steps * -1;
      }
    }

    if (direction === VERTICAL) {
      steps = destination[1] - playerLocation[1];

      if (steps > 0) {
        UDLR = "D";
      } else {
        UDLR = "U";
        //  TIMES -1 MAKES i POSITIVE AGAIN
        steps = steps * -1;
      }
    }

    function stepsFunction(numOfSteps, direction, UDLR) {
      for (let i = 1; i <= numOfSteps; i++) {
        //establishes whose turn it is and which data to use

        if (player1.isTurn === true) {
          droppedItem = player1.prevWeapon;

          whoseTurn = "player1";
          whoTurn = player1;
        } else {
          droppedItem = player2.prevWeapon;

          whoseTurn = "player2";
          whoTurn = player2;
        }
        let playerPosition = document.getElementsByClassName(whoseTurn)[0];

        playerPosition.classList.remove("player", "player1", "player2");
        playerPosition.removeAttribute("style");

        // this removes arrow indicators after a turn

        for (let i = arrowClick.length - 1; i >= 0; i--) {
          if (
            arrowClick[i].classList.contains("player") ||
            arrowClick[i].classList.contains("weapon") === true
          ) {
            arrowClick[i].style.removeProperty("outline");
            arrowClick[i].classList.remove("arrow");

            continue;
          } else {
            arrowClick[i].removeAttribute("style");
            arrowClick[i].classList.remove("arrow");
          }
        }

        ///NOW THAT THE PREVIOUS SPACE IS EMPTY

        // is the problem that dropping is a class not relevent to each player but a generic class ?

        // THIS LEAVES BEHIND PREVIOUS WEAPON

        if (
          previousLocation1.classList.contains("dropping") &&
          player1.isTurn === true
        ) {
          if (droppedItem != "unarmed") {
            previousLocation1.classList.remove("dropping");
            weaponSpawn(previousLocation1.id, droppedItem.name);
            player1.prevWeapon = droppedItem;
          }

          if (droppedItem === "unarmed") {
            previousLocation1.classList.remove("dropping");
          }
        }

        if (
          previousLocation2.classList.contains("dropping") &&
          player2.isTurn === true
        ) {
          console.log(previousLocation2.id);

          if (droppedItem != "unarmed") {
            previousLocation2.classList.remove("dropping");
            weaponSpawn(previousLocation2.id, droppedItem.name);
            player2.prevWeapon = droppedItem;
          }
          if (droppedItem === "unarmed") {
            previousLocation2.classList.remove("dropping");
          }
        }

        // this arms the player class with new weapon and removes from tile

        if (direction === HORIZONTAL) {
          if (UDLR === "R") {
            nextStep = findIdentity(
              Number(playerLocation[0]) + 1,
              playerLocation[1]
            );
          }
          if (UDLR === "L") {
            nextStep = findIdentity(
              Number(playerLocation[0]) - 1,
              playerLocation[1]
            );
          }
        }
        if (direction === VERTICAL) {
          if (UDLR === "D") {
            nextStep = findIdentity(
              playerLocation[0],
              Number(playerLocation[1]) + 1
            );
          }
          if (UDLR === "U") {
            nextStep = findIdentity(
              playerLocation[0],
              Number(playerLocation[1]) - 1
            );
          }
        }

        nextStep = document.getElementById(nextStep);

        if (nextStep.classList.contains("weapon")) {
          //resets previousLocation & previous Weapon of relevant player
          if (player1.isTurn === true) {
            previousLocation1 = nextStep;

            player1.prevWeapon = player1.weapon;
          } else {
            previousLocation2 = nextStep;
            player2.prevWeapon = player2.weapon;
          }

          if (nextStep.classList.contains("axe")) {
            whoTurn.weapon = axe;
            nextStep.classList.remove("axe");
          }
          if (nextStep.classList.contains("sword")) {
            whoTurn.weapon = sword;
            nextStep.classList.remove("sword");
          }
          if (nextStep.classList.contains("deadfish")) {
            whoTurn.weapon = deadfish;
            nextStep.classList.remove("deadfish");
          }

          nextStep.classList.remove("weapon");
          nextStep.removeAttribute("style");
          nextStep.classList.add("dropping");
        }

        nextStep.classList.add("player", whoseTurn);

        playerPosition = document.getElementsByClassName(whoseTurn)[0].id;

        //////////////////////////////////////////////////////////////////////////////////////////


        if (whoseTurn === "player1") {
          spawnPlayer(1, playerPosition);

          // runs masterMovement from new position
          masterMovement(player2.location, 2);
        } else {
          spawnPlayer(2, playerPosition);

          // runs masterMovement from new position
          masterMovement(player1.location, 1);
        }
        playerLocation = findCoord(playerPosition);
      }
    }
    stepsFunction(steps, direction, UDLR);

    if (player1.location === player2.location) {
      //console.log(player1.location);
      //console.log(player2.location);
      startEndGame();
    } else {
/*                  **********************************************
                    ********************************************** 

                                     TURN ALTERNATOR

                    ********************************************** 
                    *********************************************/

      // THIS CHANGES PLAYER TURN AT END OF MOVEMENT ASSUMING END GAME DIDNT HAPPEN
      if (player1.isTurn == true) {
        player1.isTurn = false;
        player2.isTurn = true;
      } else {
        player2.isTurn = false;
        player1.isTurn = true;
      }
    }
  }
}

document.getElementsByTagName("body")[0].addEventListener("click", movePlayer);
