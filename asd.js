function hello(){
    setTimeout(() => {
  console.log("hello")
    },3000)

};

function bye(){
    setTimeout(() => {
        console.log("bye")
    }, 2000)
   
};

async function hey() {
    const hellow = await hello();
    console.log(hellow);
    const byew = await bye();
    console.log(byew);
};

hey();