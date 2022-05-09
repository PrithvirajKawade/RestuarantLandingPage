export const appendMenu = () => {
    const gridContainer = document.createElement('div');
    gridContainer.classList = 'grid-container';  
    
    const menu = [
        {img: 'https://www.linkpicture.com/q/greentea.png',
        name: 'Green Tea'},
        {img: 'https://www.linkpicture.com/q/matcha.png',
        name: 'Motcha Tea'},
        {img: 'https://www.linkpicture.com/q/herbal.png',
        name: 'Herbal Tea'}
    ];

    menu.forEach(x => render(x));

// Creates the menu elements 

    function render(x) {
        const img = document.createElement('img');
        const name = document.createElement('h3');
        const productCell = document.createElement('div');

        img.setAttribute('src', x.img);
        name.innerHTML = x.name;
        productCell.classList = 'cell';

        appendProduct(img, name, productCell);
    }
    
// Appends the elements

    function appendProduct(img, name, cell) {
        cell.appendChild(img);
        cell.appendChild(name);
        gridContainer.appendChild(cell);
    }

    return gridContainer;

}