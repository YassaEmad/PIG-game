"use strict";
const player0 = document.querySelector(".player_0");
const player1 = document.querySelector(".player_1");
const score0 = document.getElementById("score_0");
const score1 = document.getElementById("score_1");
const current0 = document.getElementById("current_0");
const current1 = document.getElementById("current_1");
const dice = document.querySelector(".dice");
const roll = document.querySelector(".roll");
const btnew = document.querySelector(".new");
const hold = document.querySelector(".hold");

// start cond
let state, scores, current_score, activePlayer;
const inital = function () {
  score0.textContent = 0;
  score1.textContent = 0;
  dice.classList.add("hidden");
  current0.textContent = 0;
  current1.textContent = 0;
  document;
  player0.classList.remove("player--winner");
  player1.classList.remove("player--winner");
  player0.classList.add("active");
  player1.classList.remove("active");

  document.getElementById("name_0").textContent = "PLAYER 1";
  document.getElementById("name_1").textContent = "PLAYER 2";

  state = true;
  scores = [0, 0];
  current_score = 0;
  activePlayer = 0;
};

inital();
const switching = function () {
  document.getElementById(`current_${activePlayer}`).textContent = 0;
  current_score = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle("active");
  player1.classList.toggle("active");
};

roll.addEventListener("click", function () {
  if (state) {
    const random = Math.trunc(Math.random() * 6) + 1;
    dice.src = `dice-${random}.png`;
    dice.classList.remove("hidden");

    if (random !== 1) {
      current_score += random;
      document.getElementById(`current_${activePlayer}`).textContent =
        current_score;
    } else {
      switching();
    }
  }
});

hold.addEventListener("click", function () {
  if (state) {
    scores[activePlayer] += current_score;
    document.getElementById(`score_${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 20) {
      state = false;
      dice.classList.add("hidden");
      document
        .querySelector(`.player_${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player_${activePlayer}`)
        .classList.remove("active");
      document.getElementById(`name_${activePlayer}`).textContent =
        "Winner🥇🥇";
    } else {
      switching();
    }
  }
});

btnew.addEventListener("click", inital);
