
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
    }, 2000);

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
        
    }, 2000);
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
    }, 1000);
    })
};

async function doChores() {
    try{
    const walkDogResult = await walkDog();
    console.log(walkDogResult);
    const cleanedKitchenResult = await cleanKitchen();
    console.log(cleanedKitchenResult);
    const takeOutTrashResult = await takeOutTrash();
    console.log(takeOutTrashResult);
    console.log("You finished all the Chores");
    }

    catch(error){
        console.error(error);
    }
   
}
doChores();