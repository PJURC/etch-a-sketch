// Find the container element
let container = document.querySelector('#container');

// Find the grid customization button
let grid_button = document.querySelector('#grid-query');

// Create an initial grid
// Container width: 960px
grid_size = 16;
element_size = 0;
calculateGrid(grid_size);
createGrid(grid_size);

grid_button.addEventListener('click', () => {
    let grid_size = prompt("Enter new grid size (max 100): ");
    if(Number.isInteger(+grid_size) == false) {
        alert('Please input an integer value!');
        return;
    };
    if(grid_size <= 0 || grid_size > 100) {
        alert('Please input a positive integer less than 100')
        return;
    };

    // Remove all existing grid elements
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }

    // Recalculate and redraw grid
    calculateGrid(grid_size);
    createGrid(grid_size);
});

function calculateGrid(grid_size) {
    element_size = 960 / grid_size;
}

function createGrid(grid_size) {
    for (let i = 0; i < grid_size; i++) {
        for (let j = 0; j < grid_size; j++) {
            let grid_element = document.createElement('div');
            grid_element.classList.add('grid_element');
            grid_element.setAttribute('style', `width: ${element_size}px; height: ${element_size}px;`);
            container.appendChild(grid_element);
        }
    }
    assignEvent();
}

// Color the node on mouse hover
function assignEvent() {
    let grid_elements = document.querySelectorAll('.grid_element');
    grid_elements.forEach((grid_element) => {
        grid_element.addEventListener('mouseover', () => {
            grid_element.classList.add('active');
        });
    });
}
