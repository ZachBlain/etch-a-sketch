
let color = 'black';


function populateBoard(size){
  let board = document.querySelector('.board');
  let squares = board.querySelectorAll('div');
  squares.forEach((div) => (div.style.backgroundColor = 'white'));
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++){
    let square = document.createElement('div');
    square.addEventListener('mouseover', changeSquare);
    square.style.backgroundColor = 'white';
    board.insertAdjacentElement('beforeend', square);
  }
}

function changeSize(input){
  if (input <= 100 && input >= 2){
  populateBoard(input);
  }else {
    console.log('erros number to low or high');
  }
}


function changeSquare(){
  if (color == 'random'){
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
  }else{
  this.style.backgroundColor = color;
}}

function changeColor(choice){
  color = choice;
}

function resetBoard() {
  let board = document.querySelector('.board');
  let squares = board.querySelectorAll('div');
  squares.forEach((div) => div.style.backgroundColor = 'white');
}

populateBoard(16);