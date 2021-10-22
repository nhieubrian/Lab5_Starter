// explore.js

window.addEventListener('DOMContentLoaded', init);
var synth = window.speechSynthesis;
var getOptions = document.getElementById("voice-select"); 
var button;
var inputText = document.querySelector("textarea");
var voices;
var images;

function init() {

  setTimeout(() => {
    voices = synth.getVoices();
    console.log(voices);
  
    for(var i = 0; i < voices.length; i++){
      var option = document.createElement('option');
      option.textContent = voices[i].name + ' (' + voices[i].lang + ')';
  
      option.setAttribute('data-lang', voices[i].lang)
      option.setAttribute('data-name', voices[i].name)
      getOptions.appendChild(option)
  
    }
  }, 10);

  button = document.querySelector('button');
}

voices = synth.getVoices();
images = document.images;
button = document.querySelector('button');
if(button){
  button.addEventListener('click', (event) => {

    let text = new SpeechSynthesisUtterance(inputText.value);
    console.log(text);
    var voice = getOptions.selectedOptions[0].getAttribute('data-name');
    for(var i = 0; i < voices.length; i++){
      if(voices[i].name == voice){
        text.voice = voices[i];
      }
    }

    synth.speak(text);

    text.addEventListener('start', function(event) {
      images[0].setAttribute("src", "assets/images/smiling-open.png");
    })

    text.addEventListener('end', function(event) {
      images[0].setAttribute("src", "assets/images/smiling.png");
    })
  })
}