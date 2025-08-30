//scope
function one(){
    let username = "John";
    function two(){
       const age = 30;
        console.log(username);// John
    }
    console.log(age); // undefined
}

//scope 