var hitNumber = Math.floor(Math.random() * 10);
var score = 0;
var time = 60;
var clutter = "";

function scores() {
  document.querySelector("#scores").textContent = score;
}

function hit() {
  document.querySelector("#hit").textContent = hitNumber;
}

function all() {
  
  for (let i = 1; i <= 168; i++) {
    let random = Math.floor(Math.random() * 10);
    clutter += `<div class="ball">${random}</div>`;
  }
  document.querySelector("#middle").innerHTML = clutter;
}

function timer() {
  let set = setInterval(() => {
    time--;
    if (time > 0) {
      document.querySelector("#timee").textContent = time;
    } else {
      clearInterval(set);
     document.querySelector("#middle").innerHTML =`<h1 class="hh">Game Over</h1>`;
    }
  }, 1000);
}

function tap() {
  document.querySelector("#middle").addEventListener("click", function (dets) {
    var clicked = Number(dets.target.textContent);
    if (clicked === hitNumber) {
      score += 10;
      scores();
      hitNumber = Math.floor(Math.random() * 10);
      hit();
      all(); 
    }
  });
}

hit();
scores();
all();
timer();
tap();