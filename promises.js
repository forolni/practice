
function walkDog(){
 
    return new Promise((resolve, reject) => {
    setTimeout(() => {

        const walkedDog = true;

        if(walkedDog){
        resolve("You walk the Dog");
        }
        else{
            reject("You didn't walk the Dog")
        }
    }, 3000);

    })
};

function cleanKitchen(){
   

    return new Promise((resolve, reject) => {
    setTimeout(() => {

        const cleanedKitchen = true

        if(cleanedKitchen){
            resolve("You cleaned the Kitchen");
        }
        else{
            reject("You didn't cleaned the Kitchen");
        }
        
    }, 5000);
    })
};

function takeOutTrash(){
    return new Promise((resolve, reject) => {
    setTimeout(() => {

        const takenOutTrash = true;

        if(takenOutTrash){
        resolve("You took out the Trash");
    }
    else{
        reject("You didn't take out the Trash")
    }
    }, 2000);
    })
};

walkDog().then(value => {console.log(value); return cleanKitchen()})
         .then(value => {console.log(value); return takeOutTrash()})
         .then(value => {console.log(value); console.log("You finished all the Chores")})
         .catch(error => console.log(error));