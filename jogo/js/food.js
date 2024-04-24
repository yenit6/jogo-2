
import { onSnake, expandSnake } from "./snake.js";
import { randomGridPosition } from "./grid.js";
const score = document.getElementById('score')

let food = getRandomFoodPosition();
let countingScore = 0

score.innerText = countingScore

const EXPANSION_RATE = 1;

export function update() {
    if(onSnake(food)){
        expandSnake(EXPANSION_RATE);
        food = getRandomFoodPosition();
       countingScore += 100 
       score.innerText = countingScore
    }
}

export function draw(gameBoard) {
    const foodElement = document.createElement('div');
    foodElement.style.gridColumnStart = food.x;
    foodElement.style.gridRowStart = food.y;
    foodElement.classList.add('food');
    gameBoard.appendChild(foodElement);

   
}

function getRandomFoodPosition() {
    let newFoodPosition;

    while(newFoodPosition == null || onSnake(newFoodPosition)){
        newFoodPosition = randomGridPosition();
    }

    return newFoodPosition;
}
