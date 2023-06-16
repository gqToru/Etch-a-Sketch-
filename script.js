const container = document.querySelector(".container");

for (let i = 0; i < 16; i++) {
  const grid = document.createElement("div");
  grid.className = "gridColor";
  container.appendChild(grid);
}
