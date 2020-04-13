const clear_button = document.getElementById("clear-button");
let gridCount = [];


clear_button.addEventListener("click", function() {
        gridCount.forEach(function (el) {
        el.classList.remove("hovered");
    });

    document.getElementById('main').innerHTML = "" //Erases grid
    startGame();
});


function createGrid(num) {
    let targetLocation = document.getElementById('main'); // whatever you want to append the rows to: 
    for (let i = 0; i < num; i++) {
        let row = document.createElement("div");
        row.className = "row";
        for (let j = 1; j <= num; j++) {
            let cellHeight = (500/num).toString() + "px"
            let cellWidth = (750/num).toString() + "px"
            console.log(cellHeight)
            let cell = document.createElement("div");
            cell.className = "gridsquare";
            cell.innerText = "";
            cell.style.height = cellHeight;
            cell.style.width = cellWidth;
            cell.addEventListener("mouseenter", (event) => {
                event.target.classList.add("hovered");
            });
            gridCount.push(cell);
            row.appendChild(cell);
        }
        targetLocation.appendChild(row);
    }
}




function startGame() {
    let userNum = prompt("How many rows and columns would you like the grid to have? Ex: (4 = 4x4 grid, 8 = 8x8 grid, etc.) The number must be 20 or below."); 
    if (userNum <= 20) {
        createGrid(userNum);
    }
    else if (userNum > 20) {
        userNum = prompt("How many rows and columns would you like the grid to have? Ex: (4 = 4x4 grid, 8 = 8x8 grid, etc.) The number must be 20 or below.");
        if (userNum > 20) {
            alert("Please read the instructions next time");
        }
    }
    else {
        alert("ERROR");
    }
}

startGame();




