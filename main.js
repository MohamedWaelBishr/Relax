let video = document.getElementById("vid");
let wavesbtn = document.getElementById("waves");
let rainbtn = document.getElementById("rain");
let firebtn = document.getElementById("fire");
let nightbtn = document.getElementById("night");
let quotation = document.getElementById("quotation");

function wavesFunction() {
  video.src = "./assets/Vid/waves.mp4";
  quotation.innerHTML="'Waves are like children of the ocean. They're meaningful to us, surfers. Have you ever closed your eyes while riding a wave against the setting sun? Brilliant experience'";
}
function rainFunction() {
  video.src = "./assets/Vid/rain.mp4";
  quotation.innerHTML = "'The best thing one can do when it's raining is to let it rain'";
}
function fireFunction() {
  video.src = "./assets/Vid/fire.mp4";
  quotation.innerHTML = "'Playing with fire is bad for those who burn themselves. For the rest of us, it is a very great pleasure'";
}
function nightFunction() {
  video.src = "./assets/Vid/night.mp4";
  quotation.innerHTML = " 'I often think that the night is more alive and more richly colored than the day'";
}


// Get the container element
var btnContainer = document.getElementById("BT");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("btn");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");

    // If there's no active class
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }

    // Add the active class to the current/clicked button
    this.className += " active";
  });
}