const container = document.querySelector(".container");
const numberGrid = 32 * 32;

for (let i = 0; i < numberGrid; i++) {
  const grid = document.createElement("div");
  grid.className = "gridColor";
  container.appendChild(grid);
}
