let turn = 'O';
let winnerArray = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
];
const winner = document.getElementById('winningMessage');
let board_array = new Array(9).fill('E');
const board = document.querySelector('.board');
let count = 0;

const printer = (event)=>{
    console.log(event.target.id);
    const element = event.target;
    if (board_array[element.id] === 'E') {
        count = count + 1;
    if(turn === 'O') {
        element.innerHTML = 'O';
        board_array[element.id] = 'O';
        let flag = false;
        for (let [index0, index1, index2] of winnerArray) {
            if (board_array[index0] != 'E' && board_array[index0] === board_array[index1] && board_array[index1] === board_array[index2]) {
                flag = true;
            }
        }
        if (flag === true) {
        winner.innerHTML = `Winner is: O`;
        board.removeEventListener('click', printer);
        return;
        }
        turn = 'X';
    } else {
        element.innerHTML = 'X';
        board_array[element.id] = 'X';
        let flag = false;
        for (let [index0, index1, index2] of winnerArray) {
            if (board_array[index0] != 'E' && board_array[index0] === board_array[index1] && board_array[index1] === board_array[index2]) {
                flag = true;
            }
        }
        if (flag === true) {
        winner.innerHTML = `Winner is: X`;
        board.removeEventListener('click', printer);
        return;
        }
        turn = 'O';
    }
    }
    if (count == 9) {
        winner.innerHTML = 'Match is draw';
    }
}

board.addEventListener('click', printer);
const restart = document.getElementById('restart');
restart.addEventListener('click', (event)=> {
    const cell = document.getElementsByClassName('cell');
    Array.from(cell).forEach((value)=>{
        value.innerHTML = "";
        turn = 'O';
        count = 0;
        board_array = new Array(9).fill('E');
        board.addEventListener('click', printer);
        winner.innerHTML = "";
    })
})