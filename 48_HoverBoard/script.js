const container = document.getElementById("container");
const colors = [
  "#056CF2", "#05AFF2", "#F2E205", "#F28705", "#A62103", // Existing colors
  "#FF5733", "#33FF57", "#5733FF", "#FFD700", "#FF69B4", // New colors
  "#8A2BE2", "#00FFFF", "#7FFF00", "#D2691E", "#FF7F50", 
  "#6495ED", "#DC143C", "#00FA9A", "#FFDAB9", "#B22222"
];
const SQUARES = 700;

const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

const setColor = (square) => {
  const color = getRandomColor();
  square.style.background = color;
  square.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
};

const removeColor = (square) => {
  square.style.background = "#1d1d1d";
  square.style.boxShadow = "0 0 2px #000";
};

for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  square.addEventListener("mouseover", () => setColor(square));
  square.addEventListener("mouseout", () => removeColor(square));
  container.appendChild(square);
}
