// expose.js

window.addEventListener('DOMContentLoaded', init);
var selectHorn;


function init() {
  selectHorn = document.getElementById('horn-select')
}

selectHorn = document.getElementById('horn-select')
if(selectHorn){
  selectHorn.addEventListener('change', (event) => {

    if(event.target.value == 'air-horn'){
      selectHorn.setAttribute('src', "assets/images/air-horn.svg");
    }
    console.log(selectHorn);
  });
}