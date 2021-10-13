// JAVASCRIPT BEGINS

/*                  **********************************************
                    ********************************************** 

                                       END GAME START

                    ********************************************** 
                    *********************************************/

function startEndGame() {
  console.log("this is the end game");

  // this removes functionality of gameboard while in endgame
  document
    .getElementsByTagName("body")[0]
    .removeEventListener("click", movePlayer);
  // this fades the game board background
  gameBoard.style.filter = "brightness(50%)";

  if (player1.weapon === "unarmed") {
    player1.weapon = unarmed;
  }

  if (player2.weapon === "unarmed") {
    player2.weapon = unarmed;
  }

/*                  **********************************************
                    ********************************************** 

                                  END GAME BOARD CONSTRUCTOR

                    ********************************************** 
                    *********************************************/

  let finalBattle = document.getElementById("endGameContainer");
  let victoryWindow = document.getElementById("container");

  // constructs layout

  $(finalBattle).css({
    display: "grid",
    "grid-template-columns": "1fr 1fr 1fr 1fr",
    "grid-template-rows": "1fr 2fr 1fr",

    height: "75%",
    width: "75%",
    "background-color": "silver",
    "z-index": "1000",
    position: "fixed",
  });
  finalBattle.style.setProperty(
    "grid-template-areas",
    "header1 header1 header2 header2",
    "player1 player1 player2 player2",
    "footer1 battle1 battle1 footer1"
  );

  let header1 = document.createElement("div");
  header1.classList.add("header1");
  $(header1).css("grid-area", "1 / 1 / 2 / 3");
  finalBattle.appendChild(header1);

  let header2 = document.createElement("div");
  header2.classList.add("header2");
  $(header2).css("grid-area", "1 / 3 / 2 / 5");
  finalBattle.appendChild(header2);

  let player1Window = document.createElement("div");
  player1Window.classList.add("player1Window");
  finalBattle.appendChild(player1Window);

  $(player1Window).css({
    "grid-area": "2 / 1 / 3 / 3",
    border: "2px solid rgba(18,112,164,0.77)",
    margin: "2px",
  });

  let player2Window = document.createElement("div");
  player2Window.classList.add("player2Window");
  finalBattle.appendChild(player2Window);

  $(player2Window).css({
    "grid-area": "2 / 3 / 3 / 5",
    border: "2px solid rgba(18,112,164,0.77)",

    margin: "2px",
  });

  let footer1 = document.createElement("div");
  footer1.classList.add("footer1");
  $(footer1).css("grid-area", "3 / 1 / 4 / 2");
  finalBattle.appendChild(footer1);

  let battle1 = document.createElement("div");
  battle1.classList.add("battle1");

  
  $(battle1).css("grid-area", "3 / 2 / 4 / 4");
  finalBattle.appendChild(battle1);

  battle1.innerHTML += '<p id= "battleText">FIGHT!</p>';

  let footer2 = document.createElement("div");
  footer2.classList.add("footer2");
  $(footer2).css("grid-area", "3 / 4 / 4 / 5");
  finalBattle.appendChild(footer2);

  // populates layout

  header1.innerHTML += '<p class= "size1 lobster centeredText">Player 1</p>';
  header2.innerHTML += '<p class= "size2 lobster centeredText">Player 2</p>';

  let buttonAttack1 = document.createElement("BUTTON");
  let buttonAttack2 = document.createElement("BUTTON");
  let textAttack1 = document.createTextNode("Attack!");
  let textAttack2 = document.createTextNode("Attack!");
  buttonAttack1.appendChild(textAttack1);
  buttonAttack1.classList.add("attack1");
  buttonAttack2.appendChild(textAttack2);
  buttonAttack2.classList.add("attack2");

  let buttonDefend1 = document.createElement("BUTTON");
  let buttonDefend2 = document.createElement("BUTTON");
  let textDefend1 = document.createTextNode("Defend!");
  let textDefend2 = document.createTextNode("Defend!");
  buttonDefend1.appendChild(textDefend1);
  buttonDefend1.classList.add("defend1");
  buttonDefend2.appendChild(textDefend2);
  buttonDefend2.classList.add("defend2");

  // appending buttons to div
  footer1.appendChild(buttonAttack1);
  footer1.appendChild(buttonDefend1);
  footer2.appendChild(buttonAttack2);
  footer2.appendChild(buttonDefend2);

  let player1Portrait = document.createElement("div");
  player1Portrait.classList.add("Portrait1");
  $(player1Portrait).css({ width: "100%", height: "75%" });
  $(player1Portrait).css("text-align", "center");

  let portrait1 = document.createElement("img");
  portrait1.src = player1.weapon.player1;

  $(portrait1).css("text-align", "center");

  let player2Portrait = document.createElement("div");
  player2Portrait.classList.add("Portrait2");
  $(player2Portrait).css({ width: "100%", height: "75%" });
  $(player2Portrait).css("text-align", "center");

  let portrait2 = document.createElement("img");
  portrait2.src = player2.weapon.player2;
  $(portrait2).css("text-align", "center", "position", "relative");

  let player1Container = document.createElement("div");
  player1Container.classList.add("player1Container");
  $(player1Container).css({
    width: "100%",
    height: "25%",
    display: "flex",
    "flex-direction": "row",
  });

  let player2Container = document.createElement("div");
  player2Container.classList.add("player2Container");
  $(player2Container).css({
    width: "100%",
    height: "25%",
    display: "flex",
    "flex-direction": "row",
  });

  let player1Weapon = document.createElement("div");
  player1Weapon.classList.add("player1Weapon");
  $(player1Weapon).css({
    width: "50%",
    height: "100%",
    "background-color": "#e4eeb5",
    "border-style": "ridge",
  });

  let weapon1 = document.createElement("img");
  if (player1.weapon === "unarmed") {
    weapon1.src = "css/portraitFist.png";
  } else {
    weapon1.src = player1.weapon.portrait;
  }

  let player2Weapon = document.createElement("div");
  player2Weapon.classList.add("player2Weapon");
  $(player2Weapon).css({
    width: "50%",
    height: "100%",
    "background-color": "#e4eeb5",
    "border-style": "ridge",
   
  });

  let weapon2 = document.createElement("img");
  if (player2.weapon === "unarmed") {
    weapon2.src = "css/portraitFist.png";
  } else {
    weapon2.src = player2.weapon.portrait;
  }

  let player1Health = document.createElement("div");
  player1Health.classList.add("player1Health");
  $(player1Health).css({
    width: "50%",
    height: "100%",
    "background-color": "beige",
    "border-style": "ridge",
  });
  player1Health.innerHTML += '<p id= "healthText1">100%</p>';

  let health1 = document.createElement("img");
  health1.classList.add("health1");
  $(health1).css({
    width: "100%",
    height: "100%",
    float: "left",
  });
  health1.src = "css/blood.png";

  let player2Health = document.createElement("div");
  player2Health.classList.add("player2Health");
  $(player2Health).css({
    width: "50%",
    height: "100%",
    "background-color": "beige",
    "border-style": "ridge",
  });
  player2Health.innerHTML += '<p id= "healthText2">100%</p>';

  let health2 = document.createElement("img");
  health2.classList.add("health2");
  $(health2).css({
    width: "100%",
    height: "100%",
    float: "right",
  });
  health2.src = "css/blood.png";

  let startBattleText = document.createElement("h1");
  startBattleText.classList.add("startBattleText");

  let shield1 = document.createElement("img");
  shield1.src = "css/shield.png";
  $(shield1).css({
    float: "left",
    display: "none",
    position: "relative",
    padding: "10px",
  });

  let shield2 = document.createElement("img");
  shield2.src = "css/shield.png";
  $(shield2).css({
    float: "right",
    display: "none",
    position: "relative",
    margin: "10px",
  });

  $(startBattleText).css({
    position: "fixed",
  });

  let alan = document.createElement("img");
  alan.classList.add("alan");
  alan.src = "css/alan.webp";
  $(alan).css({
    display: "none",
    width: "14%",
    height: "30%",
    position: "fixed",
  });

  player1Window.appendChild(player1Portrait);
  player1Portrait.appendChild(portrait1);
  player1Window.appendChild(player1Container);
  player1Container.appendChild(player1Weapon);
  player1Weapon.appendChild(weapon1);
  player1Container.appendChild(player1Health);
  player1Health.appendChild(health1);
  player1Portrait.appendChild(shield1);

  player2Window.appendChild(player2Portrait);
  player2Portrait.appendChild(portrait2);
  player2Window.appendChild(player2Container);
  player2Container.appendChild(player2Weapon);
  player2Weapon.appendChild(weapon2);
  player2Container.appendChild(player2Health);
  player2Health.appendChild(health2);
  player2Portrait.appendChild(shield2);

  victoryWindow.appendChild(startBattleText);
  victoryWindow.appendChild(alan);

  ////////////////////////////////////////////////////////////

  /*
                      **********************************************
                      ********************************************** 

                                    END GAME LOGIC

                      ********************************************** 
                      *********************************************/

  // shortens all animations by 20%
  document.documentElement.style.setProperty("--animate-duration", ".8s");

  // UX alert at start of fight

  function startAlert() {
    startBattleText.innerHTML += "LET BATTLE COMMENCE!";
    startBattleText.classList.add("animate__animated", "animate__rollIn");
    startBattleText.addEventListener("animationend", () => {
      startBattleText.classList.remove("animate__animated", "animate__rollIn");
      startBattleText.classList.add("animate__animated", "animate__pulse");
      $(alan).css({ display: "block", margin: 0 });
      alan.classList.add("animate__animated", "animate__headShake");
      startBattleText.addEventListener("animationend", () => {
        alan.classList.remove("animate__animated", "animate__headShake");
        $(alan).css({ display: "none", margin: 0 });
        startBattleText.classList.remove("animate__animated", "animate__pulse");
        startBattleText.classList.add("animate__animated", "animate__rollOut");
        startBattleText.addEventListener("animationend", () => {
          startBattleText.classList.remove(
            "animate__animated",
            "animate__rollOut"
          );
          $(startBattleText).css("display", "none");
        });
      });
    });
  }

  startAlert();

  let battleText = document.getElementById("battleText");

                      /**********************************************
                      ********************************************** 

                                    DAMAGE CALCULATOR

                      ********************************************** 
                      *********************************************/

  // generates damage variance based on chance
  // 20% of Critical (full damage)
  // 30% of Strong Attack (5 less damage)
  // 50% of Regular Attack (10 less damage)

  // output is penalty as a number (0, 5, 10)

  let defenseFactor = 1;

  function damageMultiplier() {
    const randomNumber = Math.random();
    const random = randomNumber * 10;
    const rounded = Math.floor(random);
    let output = 0;

    if (rounded > 7) {
      output = 0;
      return output;
    }
    if (rounded < 5) {
      output = 10;
      return output;
    } else {
      output = 5;
      return output;
    }
  }

                      /**********************************************
                      ********************************************** 

                                    POP UP WINNER 

                      ********************************************** 
                      *********************************************/

  function winner(player) {
    $(startBattleText).css("display", "block");

    startBattleText.innerHTML = `<p> Player ${player} wins !!!</p>`;
    startBattleText.classList.add(
      "animate__animated",
      "animate__pulse",
      "animate__infinite"
    );

    if (player === 1) {
      portrait2.classList.add("animate__animated", "animate__hinge");
      portrait2.addEventListener("animationend", () => {
        $(portrait2).css("display", "none");
      });
    } else {
      portrait1.classList.add("animate__animated", "animate__hinge");
      portrait1.addEventListener("animationend", () => {
        $(portrait1).css("display", "none");
      });
    }

    buttonDefend2.disabled = true;
    buttonAttack2.disabled = true;
    buttonDefend1.disabled = true;
    buttonAttack1.disabled = true;

    buttonAttack1.removeEventListener("click", eventhandler);
    buttonAttack2.removeEventListener("click", eventhandler);
    buttonDefend1.removeEventListener("click", eventhandler);
    buttonDefend2.removeEventListener("click", eventhandler);
  }

                      /**********************************************
                      ********************************************** 

                                    BUTTON FUNCTIONALITY

                      ********************************************** 
                      *********************************************/

  function attacking1() {
    if (player2.defend === true) {
      defenseFactor = 2;
    } else {
      defenseFactor = 1;
    }

    let attackStrength = player1.weapon.damage - damageMultiplier();
    attackStrength = attackStrength / defenseFactor;

    player2.health = player2.health - attackStrength;
    $(health2).css("width", "" + player2.health + "%");
    battleText.innerHTML = `Player1 attacks causing ${attackStrength} damage!`;
    // resets defense to default no after a a block
    healthText2.innerHTML = `${player2.health} %`;
    player2.defend = false;
    shield2.classList.add("animate__animated", "animate__rotateOut");
    shield2.addEventListener("animationend", () => {
      $(shield2).css({
        display: "none",
      });
      shield2.classList.remove("animate__animated", "animate__rotateOut");
    });

    portrait2.classList.add("animate__animated", "animate__wobble");
    portrait2.addEventListener("animationend", () => {
      portrait2.classList.remove("animate__animated", "animate__wobble");
    });

    if (player2.health <= 0) {
      healthText2.innerHTML = "Rest in Peace";
      healthText1.innerHTML = "Victorious!";
      winner(1);
    }
    player2.isTurn = true;
    player1.isTurn = false;

    fightTime(2);
  }

  function attacking2() {
    if (player1.defend === true) {
      defenseFactor = 2;
    } else {
      defenseFactor = 1;
    }
    let attackStrength = player2.weapon.damage - damageMultiplier();
    attackStrength = attackStrength / defenseFactor;

    player1.health = player1.health - attackStrength;
    $(health1).css("width", "" + player1.health + "%");
    battleText.innerHTML = `Player2 attacks causing ${attackStrength} damage!`;
    // resets defense to default no after a a block
    healthText1.innerHTML = `${player1.health} %`;
    player1.defend = false;
    shield1.classList.add("animate__animated", "animate__rotateOut");
    shield1.addEventListener("animationend", () => {
      $(shield1).css({
        display: "none",
      });
      shield1.classList.remove("animate__animated", "animate__rotateOut");
    });

    portrait1.classList.add("animate__animated", "animate__wobble");
    portrait1.addEventListener("animationend", () => {
      portrait1.classList.remove("animate__animated", "animate__wobble");
    });

    if (player1.health <= 0) {
      healthText1.innerHTML = "Rest in Peace";
      healthText2.innerHTML = "Victorious!";
      winner(2);
    }

    player1.isTurn = true;
    player2.isTurn = false;

    fightTime(1);
  }

  function defending1() {
    player1.defend = true;
    battleText.innerHTML = "Player1 defends the next attack";
    $(shield1).css({
      display: "block",
    });
    shield1.classList.add("animate__animated", "animate__tada");
    shield1.addEventListener("animationend", () => {
      shield1.classList.remove("animate__animated", "animate__tada");
      $(shield1).css({
        display: "block",
      });
    });

    player2.isTurn = true;
    player1.isTurn = false;
    fightTime(2);
  }

  function defending2() {
    player2.defend = true;
    battleText.innerHTML = "Player2 defends the next attack";
    $(shield2).css({
      display: "block",
    });
    shield2.classList.add("animate__animated", "animate__tada");
    shield2.addEventListener("animationend", () => {
      shield2.classList.remove("animate__animated", "animate__tada");
      $(shield2).css({
        display: "block",
      });
    });
    player1.isTurn = true;
    player2.isTurn = false;
    fightTime(1);
  }

                     /**********************************************
                      ********************************************** 

                                    TURN BASE FUNCTIONALITY

                      ********************************************** 
                      *********************************************/

  function fightTime(player) {
   //console.log("test");

    // ensures buttons are appropriately enabled or disabled based on turn
    if (player === 1) {
      buttonDefend2.disabled = true;
      buttonAttack2.disabled = true;
      buttonDefend1.disabled = false;
      buttonAttack1.disabled = false;
      //  $(size1).css("width", "120%");
      //  $(size2).css("width", "80%");
    } else {
      buttonDefend2.disabled = false;
      buttonAttack2.disabled = false;
      buttonDefend1.disabled = true;
      buttonAttack1.disabled = true;
      //$(size2).css("width", "120%");
      //$(size1).css("width", "80%");
    }
    // makes buttons functional
  }

                      /**********************************************
                      ********************************************** 

                            CONNECTING FUNCIONALITY TO BUTTONS 

                      ********************************************** 
                      *********************************************/

  buttonAttack1.onclick = function () {
    attacking1();
  };
  buttonAttack2.onclick = function () {
    attacking2();
  };
  buttonDefend1.onclick = function () {
    defending1();
  };
  buttonDefend2.onclick = function () {
    defending2();
  };

  if (player1.isTurn === true) {
    fightTime(1);
  } else {
    fightTime(2);
  }

  // }
}
