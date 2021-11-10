
//GLOBAL CLOCK ELEMENT
var clock = document.querySelector('#main');

function renderTime() {
  	var time = new Date();
  	clock.textContent = time.toLocaleString(navigator.language || 'en-US', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false}).replaceAll(":"," ");
}

function testRequest() {
  const url = "https://pokeapi.co/api/v2/pokemon/charmander"
  const data = fetch(url).then(response => response.json())
  .then(output => {console.log(output)})
}

function init() {
  var time = new Date();
  //PRELOAD TIME
  renderTime()
  // Update the time every second
  setInterval(renderTime, 1000);
  testRequest()
}

// Init the environment when all is ready
window.onload = init;
