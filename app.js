// Create grid to store divs
const container = document.getElementById('container');

function createDivs() {
    // Define gride size
    let gridSize = prompt("How large do you want your grid?");
    // Select rainbow or black squares
    let colorSelection = prompt("Please enter rainbow or black");
    let gridSizeNum = parseInt(gridSize);
    // Check to make sure grid size is accetable
    if (gridSizeNum > 25 || gridSizeNum < 4 || isNaN(gridSizeNum) == true) {
        alert("Please enter a valid number between 4 and 25");
        createDivs();
    } else {
        // Create cells with either ranbow or black colors
        const cellDimension = 500/gridSizeNum;
        let root = document.documentElement;
        root.style.setProperty('--height', cellDimension + 'px');
        root.style.setProperty('--width', cellDimension + 'px');
        for (let i = 0; i < (gridSizeNum*gridSizeNum); i++) {    
            const cell = document.createElement('div');
            cell.classList = 'cell';
            container.appendChild(cell);
            if (colorSelection == 'rainbow')
                cell.addEventListener("mouseover", rainbowColors);
            else {
                cell.addEventListener("mouseover", blackShading);
            }
        }
    }
}

// Creates array of child nodes in container and removes divs so new grid can be created
function deleteDivs() {
    let grid = Array.from(container.childNodes);
    grid.forEach((element) => {
        container.removeChild(element);           
    })
}

// Generates a random color
function rainbowColors(e) {
    let colorA = Math.floor(Math.random() * 256);
    let colorB = Math.floor(Math.random() * 256);
    let colorC = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${colorA}, ${colorB}, ${colorC})`;
}

// Shades the cell black on mouseover
function blackShading(e) {
    if (e.target.style.backgroundColor = 'white') {
        e.currentTarget.style.backgroundColor = 'black';
    }
} 