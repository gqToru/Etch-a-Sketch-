const gridContainer = document.getElementById("gridContainer");
const createGridButton = document.getElementById("createGridButton");

function createGrid() {
  let sizeofGrid = prompt("Enter the size of the grid");
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }
  if (sizeofGrid < 16 || sizeofGrid > 100) {
    alert("Size cannot exceed 100 tiles");
    sizeofGrid = 0;
    createGrid();
  }
  for (let i = 0; i < sizeofGrid; i++) {
    for (let j = 0; j < sizeofGrid; j++) {
      const gridItem = document.createElement("div");
      gridItem.classList.add("grid-item");
      gridItem.addEventListener("mouseover", function () {
        gridItem.classList.add("markedTile");
      });
      gridContainer.appendChild(gridItem);
    }
  }
}

createGridButton.addEventListener("click", createGrid);
