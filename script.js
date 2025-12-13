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
