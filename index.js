//GLOBAL CLOCK ELEMENT
var clock = document.querySelector('#clock');

function renderTime() {
    clock.innerHTML = "";
  	var time = new Date();
    timeStr = time.toLocaleString(navigator.language || 'en-US', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false}).replaceAll(":"," ");
    if (timeStr.length <= 7) {timeStr = "0" + timeStr}

    for (var i = 0; i < 8; i++) {
      var item = document.createElement('div');
      var background = document.createElement('div');
      var background1 = document.createElement('div');
      var background2 = document.createElement('div');
      var background3 = document.createElement('div');
      var background4 = document.createElement('div');
      var background5 = document.createElement('div');
      var background6 = document.createElement('div');
      var background7 = document.createElement('div');
      var background8 = document.createElement('div');
      var background9 = document.createElement('div');

      item.innerHTML = `${timeStr[i]}`;
      item.classList.add("character");
      background.classList.add("background");
      background1.classList.add("background1");
      background2.classList.add("background2");
      background3.classList.add("background3");
      background4.classList.add("background4");
      background5.classList.add("background5");
      background6.classList.add("background6");
      background7.classList.add("background7");
      background8.classList.add("background8");
      background9.classList.add("background9");

      clock.appendChild(item)
      item.appendChild(background)
      item.appendChild(background1)
      item.appendChild(background2)
      item.appendChild(background3)
      item.appendChild(background4)
      item.appendChild(background5)
      item.appendChild(background6)
      item.appendChild(background7)
      item.appendChild(background8)
      item.appendChild(background9)
    }
}

// function testRequest() {
//   const url = "https://pokeapi.co/api/v2/pokemon/charmander"
//   const data = fetch(url).then(response => response.json())
//   .then(output => {console.log(output)})
// }

function init() {
  var time = new Date();
  //PRELOAD TIME
  renderTime()
  // Update the time every second
  setInterval(renderTime, 1000);
  // testRequest()
}

// Init the environment when all is ready
window.onload = init;


//comit desde sublime