
try{
    const dividend = Number(window.prompt("Enter a dividend: "));
    const divisor = Number(window.prompt("Enter a divisor: "));

    const result = dividend / divisor;

    if(divisor == 0){
        throw new Error("You can't divide by zero")
    }

    if(isNaN(dividend) || isNaN(divisor)){
        throw new Error("values must be numebrs");
    }

    console.log(result);

}

catch(error){
    throw new Error(error);
}
