function sum (callback, x, y){
    let result = x + y;
    console.log(result);
    callback(result);
}

function display(result){
    result += 10;
    console.log(result);
}

sum(display, 1, 5);