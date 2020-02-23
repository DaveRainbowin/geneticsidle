var update = setInterval(updateBlob, 10000);
var random = Math.random();
var blobNum = 10;
function updateBlob() {
  random = Math.random();
  if (random >= 0.5) {
    blobNum++;
  } else if (random <= 0.1) {
    blobNum--;
  }
}