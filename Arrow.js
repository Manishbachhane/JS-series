const user = {
    username: "John",
    age: 30,
    welcomeMessage: function(){
        console.log(`Hello, my name is ${this.username} `);
    }
}
console.log(user.welcomeMessage());


//arrow function
const add = (a, b) => {
    return a + b;
}

//implicit return
const sub = (a, b) => a - b;

//arrow function
const mul = (a, b) => a * b;

//implicit return
const div = (a, b) => a / b;


