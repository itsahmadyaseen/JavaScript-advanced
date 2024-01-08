let yourScore = 0;
let compScore = 0;
let rockValue = 1;
let paperValue = 2;
let scissorsValue = 3;

const yourScoreChange = document.getElementById('yourScore');
const compScoreChange = document.getElementById('compScore');
const newchoice = document.querySelectorAll('.choice');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const newMsg = document.getElementById('msg');


const checkWinner = (num,random) => {
    if(num === random) {
        newMsg.innerText = `Game was a draw`;
    }
    else if(num === 1 && random === 2){
        newMsg.innerText = `Computer Won, He chose Paper`;
        compScore++;
        compScoreChange.innerText = `${compScore}`;
    } else if(num === 1 && random === 3){
        newMsg.innerText = `You Won, He chose Scissor`;
        yourScore++;
        yourScoreChange.innerText = `${yourScore}`;
    } else if(num === 2 && random === 1){
        newMsg.innerText = `You Won, He chose Rock`;
        yourScore++;
        yourScoreChange.innerText = `${yourScore}`;
    } else if(num === 2 && random === 3){
        newMsg.innerText = `Computer Won, He chose Scissor`;
        compScore++;
        compScoreChange.innerText = `${compScore}`;
    } else if(num === 3 && random === 1){
        newMsg.innerText = `Computer Won, He chose Rock`;
        compScore++;
        compScoreChange.innerText = `${compScore}`;
    } else if(num === 3 && random === 2){
        newMsg.innerText = `You Won, He chose Paper`;
        yourScore++;
        yourScoreChange.innerText = `${yourScore}`;
    }
}
 
const randomGenerator = (num) => {
    this.num = num;
    let random = Math.ceil(Math.random() *3);
    checkWinner(num,random);
}

rock.addEventListener('click',() => {
    randomGenerator(1);
})
paper.addEventListener('click',() => {
    randomGenerator(2);
})
scissors.addEventListener('click',() => {
    randomGenerator(3);
})