// expose.js

window.addEventListener('DOMContentLoaded', init);
var selectHorn;
var audioHorn;
var images;
var vol;
var button;
var horn;
var jsConfetti;
var volLevel;
var value;

function init() {
  selectHorn = document.getElementById('horn-select')
  audioHorn = document.getElementsByClassName('hidden')
  images = document.images;
  vol = document.getElementById("volume");
  button = document.querySelector('button');
  jsConfetti = new JSConfetti();
}

selectHorn = document.getElementById('horn-select')
audioHorn = document.getElementsByClassName('hidden')
if(selectHorn){
  selectHorn.addEventListener('change', (event) => {
    horn = event.target.value;
    images[0].setAttribute("src", `assets/images/${horn}.svg`)
    audioHorn[0].setAttribute("src", `assets/audio/${horn}.mp3`)
  });
}

vol = document.getElementById("volume")
if(vol){
  vol.addEventListener('input', (event) => {
    value = event.target.value;
    volLevel = audioHorn[0];
    volLevel.volume = value / 100;
    if(value == 0){
      images[1].setAttribute("src", "assets/icons/volume-level-0.svg")
    }
    else if(value >= 1 && value < 33){
      images[1].setAttribute("src", "assets/icons/volume-level-1.svg")
    }
    else if(value >= 33 && value < 67){
      images[1].setAttribute("src", "assets/icons/volume-level-2.svg")
    }
    else{
      images[1].setAttribute("src", "assets/icons/volume-level-3.svg")
    }
  });
}

button = document.querySelector('button');
if(button){
  button.addEventListener('click', (event) => {
    if(horn == 'party-horn' && value != 0){
      jsConfetti.addConfetti();
    }
    let play = audioHorn[0];
    play.play();
  })
}