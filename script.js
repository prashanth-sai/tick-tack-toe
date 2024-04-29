let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
const winCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],  // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8],  // Columns
    [0, 4, 8], [2, 4, 6]              // Diagonals
];

// Check winner if combination is matches with winCombinations
const checkWinner = () => {
    return winCombinations.some(combination => {
        return combination.every(idx => board[idx] === currentPlayer);
    });
}

// When users enter there input we fill that cell with there input 
const playerAction = (cell, index) => {
    if (board[index] !== "" || checkWinner()) {
        return;
    }
    board[index] = currentPlayer;
    cell.innerText = currentPlayer;
    if (checkWinner()) {
        alert(currentPlayer + " wins!");
        setTimeout(() => {
            resetGame()
        }, 1000);
        return;
    }
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    togglePlayerHighlight();
}

// Toggle the player when player has to play
const togglePlayerHighlight = () => {
    const playerX = document.getElementById('playerX');
    const playerO = document.getElementById('playerO');
    if (currentPlayer === "X") {
        playerX.classList.add('current');
        playerO.classList.remove('current');
    } else {
        playerO.classList.add('current');
        playerX.classList.remove('current');
    }
}

// Reset the game by clearing all inputs in cell
const resetGame = () => {
    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X"; 
    document.querySelectorAll('.cell').forEach(cell => cell.innerText = '');
    togglePlayerHighlight(); 
}

