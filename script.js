const sketchPad = document.querySelector("#sketch-pad");
let rows = [];
let dimensions = 16;
let randomColor = false;

function createGrid(dimensions) {
    for (let i = 0; i < dimensions; i++) {
        rows[i] = document.createElement("div");
        rows[i].setAttribute("class", "row");

        for (let j = 0; j < dimensions; j++) {
            let gridItems = [];
            
            gridItems[j] = document.createElement("div");
            gridItems[j].setAttribute("class", "grid-items");

            gridItems[j].style.padding = `${300/dimensions}px`;

            gridItems[j].addEventListener("mouseover", addColor);

            rows[i].appendChild(gridItems[j]);
        }
        sketchPad.appendChild(rows[i]);
    }
}

function resetGrid() { 
    rows = [];

    let previousGridItems = document.querySelectorAll(".row");
    for (let i = 0; i < previousGridItems.length; i++) {
        previousGridItems[i].remove();
    }
    createGrid(dimensions);
}

function changeDimensions() {
    dimensions = prompt("How many rows?");
    resetGrid();
}

function addColor(e) {
    if (randomColor) {
        randomValues = [];

        for (let i = 0; i < 3; i++) {
            randomValues.push(Math.random() * 255);
        }
        e.target.style.backgroundColor = `rgb(${randomValues[0]},${randomValues[1]},${randomValues[2]})`
    } else {
        e.target.style.backgroundColor = "black"
    }
}

const dimensionButton = document.querySelector("#dimensions");
const resetButton = document.querySelector("#reset");
const randomColorBtn = document.querySelector("#random");

createGrid(16);
dimensionButton.onclick = changeDimensions;
resetButton.onclick = resetGrid;
randomColorBtn.onclick = () => {randomColor = true};

