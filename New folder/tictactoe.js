// //tictactoe game logic
// class TicTacToe {
//     constructor(container) {
//         this.container = container;
//         this.currentPlayer = 'X';
//         this.board = Array(9).fill(null);
//         this.gameOver = false;
//         this.init();
//     }
//     init() {
//         this.container.innerHTML = '';
//         this.cells = [];
//         for (let i = 0; i < 9; i++) {
//             const cell = document.createElement('div');
//             cell.classList.add('cell');
//             cell.addEventListener('click', () => this.makeMove(i));
//             this.container.appendChild(cell);
//             this.cells.push(cell);
//         }
//         this.status = document.createElement('div');
//         this.status.classList.add('status');
//         this.container.appendChild(this.status);
//         this.updateStatus();
//         this.container.classList.add('tictactoe-container');
//         const style = document.createElement('style');
//         style.textContent = `
//             .tictactoe-container
//             {
//                 display: grid;
//                 grid-template-columns: repeat(3, 100px);
//                 grid-template-rows: repeat(3, 100px);
//                 gap: 5px;
//                 width: max-content;
//                 margin: 20px auto;
//                 font-family: Arial, sans-serif;
//                 text-align: center;
//                 border: 2px solid #000;
//                 padding: 10px;
//                 background-color: #f9f9f9;
//             }
//             .cell {
//                 width: 100px;
//                 height: 100px;
//                 display: flex;
//                 align-items: center;
//                 justify-content: center;
//                 font-size: 2em;
//                 border: 1px solid #000;
//                 cursor: pointer;
//                 background-color: #fff;
//                 transition: background-color 0.3s;
//             }
//             .cell:hover {
//                 background-color: #e0e0e0;
//             }
//             .status {
//                 grid-column: span 3;
//                 margin-top: 10px;
//                 font-size: 1.5em;
//                 color: #333;
//             }
//         `;
//         document.head.appendChild(style);
//     }
//     makeMove(index) {
//         if (this.gameOver || this.board[index]) return;
//         this.board[index] = this.currentPlayer;
//         this.cells[index].textContent = this.currentPlayer;
//         if (this.checkWin()) {
//             this.status.textContent = `Player ${this.currentPlayer} wins!`;
//             this.gameOver = true;
//         } else if (this.board.every(cell => cell)) {
//             this.status.textContent = "It's a draw!";
//             this.gameOver = true;
//         } else {
//             this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
//             this.updateStatus();
//         }
//     }
//     checkWin() {
//         const winPatterns = [
//             [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
//             [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
//             [0, 4, 8], [2, 4, 6]             // diagonals
//         ];
//         return winPatterns.some(pattern =>
//             pattern.every(index => this.board[index] === this.currentPlayer)
//         );
//     }
//     updateStatus() {
//         this.status.textContent = `Player ${this.currentPlayer}'s turn`;
//     }
//     start() {
//         this.init();
//         this.currentPlayer = 'X';
//         this.gameOver = false;
//     }
//     reset() {
//         this.start();
//         this.board.fill(null);
//         this.cells.forEach(cell => cell.textContent = '');
//     }
// }
// if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
//     module.exports = TicTacToe;
// }
// // Usage example (uncomment to use):
// // const game = new TicTacToe(document.getElementById('game'));
// // game.start();
// // game.reset();
// // To run the game, include this script in an HTML file with a div having id 'game'.
// // Example HTML structure:





let xTurn = true;
        function changeMark(buttonId){
            let currentMark = document.getElementById(buttonId).innerHTML;

            if(!currentMark) {
                if(xTurn) {
                    document.getElementById(buttonId).innerHTML = 'X';
                } else {
                    document.getElementById(buttonId).innerHTML = 'O';
                }
            }
        }