function createCounter(){
    let count = 0;

    function increment(){
        count++;
        console.log(`count increased to ${count}`);
    }

    function getCount(){
        return count;
    }
    return {increment, getCount};
}


const counter = createCounter();

counter.increment();
counter.increment();
counter.increment();
counter.increment();
console.log(`The current count is ${counter.getCount()}`);

function createGame(){
    let score = 0;

    function increaseScore(points){
        score += points;
        console.log(`+${points}pts`);
        console.log(`Score is ${score}pts`);
    }
    function decreaseScore(points){
        score -= points;
        console.log(`-${points}pts`);
        console.log(`Score is ${score}pts`);
    }

    function getScore(){
        return score;
    }

    return {increaseScore, decreaseScore, getScore};
}

const game = createGame();

game.decreaseScore(15);
game.decreaseScore(8);
game.increaseScore(10);
game.increaseScore(10);
game.decreaseScore(8);
game.decreaseScore(8);
game.decreaseScore(8);
game.increaseScore(10);
game.increaseScore(10);
game.increaseScore(10);
game.decreaseScore(8);
game.increaseScore(20);
console.log(`The final score is ${game.getScore()}pts`);