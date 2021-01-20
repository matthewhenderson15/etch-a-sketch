//Create 16x16 grid of divs
const container = document.getElementById('container');

function createDivs() {
    let gridSize = prompt("How large do you want your grid?");
    let gridSizeNum = parseInt(gridSize);
    if (gridSizeNum > 100 || gridSizeNum < 4 || isNaN(gridSizeNum) == true) {
        alert("Please enter a valid number between 4 and 100");
        createDivs();
    } else {
        const cellDimension = 500/gridSizeNum;
        let root = document.documentElement;
        root.style.setProperty('--height', cellDimension + 'px');
        root.style.setProperty('--width', cellDimension + 'px');
        for (let i = 0; i < (gridSizeNum*gridSizeNum); i++) {    
            const row = document.createElement('div');
            row.classList = 'row';
            container.appendChild(row);
        }
    }
}

function deleteDivs() {
    let grid = Array.from(container.childNodes);
    grid.forEach((element) => {
        container.removeChild(element);           
    })
}