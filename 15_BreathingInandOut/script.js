const container = document.getElementById("container");
const text = document.getElementById("text");

const totalTime = 19000;
const breatheTime = 4000;
const holdTime = 7000;

function breatheAnimation() {
  text.innerText = "Breathe In!";
  container.className = "container grow";

  setTimeout(() => {
    text.innerText = "Hold";

    setTimeout(() => {
      text.innerText = "Breathe Out!";
      container.className = "container shrink";
    }, holdTime);
  }, breatheTime);
}

setInterval(breatheAnimation, totalTime);

// Init
breatheAnimation();
