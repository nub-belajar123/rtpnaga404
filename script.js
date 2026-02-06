let rtpValue = 96.50;

const rtpText = document.getElementById("rtp");
const progressBar = document.getElementById("progress");

function updateRTP() {
  // gerak naik turun kecil
  rtpValue += (Math.random() * 0.3 - 0.15);

  if (rtpValue < 94) rtpValue = 94;
  if (rtpValue > 98) rtpValue = 98;

  rtpText.innerText = rtpValue.toFixed(2) + "%";
  progressBar.style.width = rtpValue + "%";
}

setInterval(updateRTP, 2000);

const games = [
  { id: "game1", value: 96.20 },
  { id: "game2", value: 97.10 },
  { id: "game3", value: 95.80 }
];

function updateGames() {
  games.forEach(game => {
    game.value += (Math.random() * 0.3 - 0.15);

    if (game.value < 94) game.value = 94;
    if (game.value > 98) game.value = 98;

    document.getElementById(game.id).innerText =
      game.value.toFixed(2) + "%";
  });
}

setInterval(updateGames, 3000);
