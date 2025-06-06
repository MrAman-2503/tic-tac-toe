 const X_CLASS = 'x';
        const O_CLASS = 'o';
        const WINNING_COMBINATIONS = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        const cellElements = document.querySelectorAll('[data-cell]');
        const board = document.getElementById('board');
        const winningMessageElement = document.getElementById('winningMessage');
        const winningMessageTextElement = document.querySelector('[data-winning-message-text]');
        const restartButton = document.getElementById('restartButton');
        let oTurn;

        startGame();

        restartButton.addEventListener('click', startGame);

        function startGame() {
            oTurn = false;
            const player1 = document.getElementById('player1');
            const player2 = document.getElementById('player2');
            player1.classList.remove('winner');
            player2.classList.remove('winner');

            cellElements.forEach(cell => {
            cell.classList.remove(X_CLASS);
            cell.classList.remove(O_CLASS);
            cell.textContent = '';  // Clear the text content inside the cell
            cell.removeEventListener('click', handleClick);
            cell.addEventListener('click', handleClick, { once: true });
            });
            setBoardHoverClass();
            updateTurnIndicator();
            winningMessageElement.classList.remove('show');
        }
        function userInput(id){
    count++;
    if(id==="btn1"){
        if(flag == 0){
            btn1.innerText= "❌";
            btn1.disabled = true;
            flag= 1;
            btn1Value= 0;
        }
        else{
            btn1.innerText= "⭕";
            btn1.disabled = true;
            flag= 0;
            btn1Value= 1;
        }  
    }

    if(id==="btn2"){
        if(flag == 0){
            btn2.innerText= "❌";
            btn2.disabled = true;
            flag= 1;
            btn2Value= 0;
        }
        else{
            btn2.innerText= "⭕";
            btn2.disabled = true;
            flag= 0;
            btn2Value= 1;
        }  
    }

    if(id==="btn3"){
        if(flag == 0){
            btn3.innerText= "❌";
            btn3.disabled = true;
            flag= 1;
            btn3Value= 0;
        }
        else{
            btn3.innerText= "⭕";
            btn3.disabled = true;
            flag= 0;
            btn3Value= 1;
        }  
    }

    if(id==="btn4"){
        if(flag == 0){
            btn4.innerText= "❌";
            btn4.disabled = true;
            flag= 1;
            btn4Value= 0;
        }
        else{
            btn4.innerText= "⭕";
            btn4.disabled = true;
            flag= 0;
            btn4Value= 1;
        }  
    }

    if(id==="btn5"){
        if(flag == 0){
            btn5.innerText= "❌";
            btn5.disabled = true;
            flag= 1;
            btn5Value= 0;
        }
        else{
            btn5.innerText= "⭕";
            btn5.disabled = true;
            flag= 0;
            btn5Value= 1;
        }  
    }

    if(id==="btn6"){
        if(flag == 0){
            btn6.innerText= "❌";
            btn6.disabled = true;
            flag= 1;
            btn6Value= 0;
        }
        else{
            btn6.innerText= "⭕";
            btn6.disabled = true;
            flag= 0;
            btn6Value= 1;
        }  
    }

    if(id==="btn7"){
        if(flag == 0){
            btn7.innerText= "❌";
            btn7.disabled = true;
            flag= 1;
            btn7Value= 0;
        }
        else{
            btn7.innerText= "⭕";
            btn7.disabled = true;
            flag= 0;
            btn7Value= 1;
        }  
    }

    if(id==="btn8"){
        if(flag == 0){
            btn8.innerText= "❌";
            btn8.disabled = true;
            flag= 1;
            btn8Value= 0;
        }
        else{
            btn8.innerText= "⭕";
            btn8.disabled = true;
            flag= 0;
            btn8Value= 1;
        }  
    }

    if(id==="btn9"){
        if(flag == 0){
            btn9.innerText= "❌";
            btn9.disabled = true;
            flag= 1;
            btn9Value= 0;
        }
        else{
            btn9.innerText= "⭕";
            btn9.disabled = true;
            flag= 0;
            btn9Value= 1;
        }  
    }
    if(count > 4){
        checkResult();
    }
    
}

function checkResult(){
    if(btn1Value == 0 && btn2Value == 0 && btn3Value == 0 ||
        btn1Value == 0 && btn4Value == 0 && btn7Value == 0 ||
        btn1Value == 0 && btn5Value == 0 && btn9Value == 0 ||
        btn2Value == 0 && btn5Value == 0 && btn8Value == 0 ||
        btn3Value == 0 && btn6Value == 0 && btn9Value == 0 ||
        btn3Value == 0 && btn5Value == 0 && btn7Value == 0 ||
        btn4Value == 0 && btn5Value == 0 && btn6Value == 0 ||
        btn7Value == 0 && btn8Value == 0 && btn9Value == 0 
    ){
        console.log("Person 1 won");

    }else if(btn1Value === btn2Value === btn3Value === 1 ||
        btn1Value === btn4Value === btn7Value === 1 ||
        btn1Value === btn5Value === btn9Value === 1 ||
        btn2Value === btn5Value === btn8Value === 1 ||
        btn3Value === btn6Value === btn9Value === 1 ||
        btn3Value === btn5Value === btn7Value === 1 ||
        btn4Value === btn5Value === btn6Value === 1 ||
        btn7Value === btn8Value === btn9Value === 1

    ){
        console.log("Person 1 won");
    }
}

        function handleClick(e) {
            const cell = e.target;
            const currentClass = oTurn ? O_CLASS : X_CLASS;
            placeMark(cell, currentClass);
            if (checkWin(currentClass)) {
                endGame(false);
            } else if (isDraw()) {
                endGame(true);
            } else {
                swapTurns();
                setBoardHoverClass();
            }
        }

        function placeMark(cell, currentClass) {
            cell.classList.add(currentClass);
            // Show notation text inside the cell
            if (currentClass === 'x') {
                cell.textContent = 'X';
            } else if (currentClass === 'o') {
                cell.textContent = 'O';
            }
        }

        function swapTurns() {
            oTurn = !oTurn;
            updateTurnIndicator();
        }

        function setBoardHoverClass() {
            board.classList.remove(X_CLASS);
            board.classList.remove(O_CLASS);
            if (oTurn) {
                board.classList.add(O_CLASS);
            } else {
                board.classList.add(X_CLASS);
            }
        }

        function checkWin(currentClass) {
            return WINNING_COMBINATIONS.some(combination => {
                return combination.every(index => {
                    return cellElements[index].classList.contains(currentClass);
                });
            });
        }

        function isDraw() {
            return [...cellElements].every(cell => {
                return cell.classList.contains(X_CLASS) || cell.classList.contains(O_CLASS);
            });
        }

        function endGame(draw) {
            const player1 = document.getElementById('player1');
            const player2 = document.getElementById('player2');
            const player1Wins = document.getElementById('player1Wins');
            const player1Losses = document.getElementById('player1Losses');
            const player1Draws = document.getElementById('player1Draws');
            const player2Wins = document.getElementById('player2Wins');
            const player2Losses = document.getElementById('player2Losses');
            const player2Draws = document.getElementById('player2Draws');

            if (draw) {
                winningMessageTextElement.innerText = 'Draw!';
                player1Draws.textContent = parseInt(player1Draws.textContent) + 1;
                player2Draws.textContent = parseInt(player2Draws.textContent) + 1;
                player1.classList.remove('winner');
                player2.classList.remove('winner');
            } else {
                winningMessageTextElement.innerText = `${oTurn ? "O's" : "X's"} Wins!`;
                if (oTurn) {
                    player2Losses.textContent = parseInt(player2Losses.textContent) + 1;
                    player1Wins.textContent = parseInt(player1Wins.textContent) + 1;
                    player1.classList.add('winner');
                    player2.classList.remove('winner');
                } else {
                    player1Losses.textContent = parseInt(player1Losses.textContent) + 1;
                    player2Wins.textContent = parseInt(player2Wins.textContent) + 1;
                    player2.classList.add('winner');
                    player1.classList.remove('winner');
                }
            }
            winningMessageElement.classList.add('show');
            updateTurnIndicator(true);
        }
        function updateTurnIndicator(gameOver = false) {
            const player1Turn = document.getElementById('player1Turn');
            const player2Turn = document.getElementById('player2Turn');
            if (gameOver) {
                player1Turn.innerText = '';
                player2Turn.innerText = '';
            } else {
                if (oTurn) {
                    player1Turn.innerText = '← Your Turn';
                    player2Turn.innerText = '';
                } else {
                    player1Turn.innerText = '';
                    player2Turn.innerText = '← Your Turn';
                }
            }
        }