const person = {
  name: "John",
  age: 30,
  isStudent: false
};

// console.log(person.name);
// console.log(person["age"]);

// console.log(person.isStudent);


const person2 = {
  name: "Jane",
  age: 25,
  isStudent: true
};

// console.log(person2.name);
// console.log(person2["age"]);

// console.log(person2.isStudent); 

//way of  creating Objects 
// 1 obejct literal:
let obj={
  key:'value',
  age:22,
  isStudent:true
};

// 2 useing new Object()
let obj2 = new Object();
obj2.key = 'value';
obj2.age = 22;
obj2.isStudent = true;

// 3 Constructor Function:
function Person(name, age, isStudent) {
  this.name = name;
  this.age = age;
  this.isStudent = isStudent;
}

let obj3 = new Person('value', 22, true);

//4 Class Syntax (ES6):

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
let u2 = new User("Manish", 22);

//5 Object.create():

let proto = {
   greet: function(){
     return "Hello";
    }
  };
let user = Object.create(proto);


//-----accessing propertys----


//Dot Notation:

// console.log(user.name);


//Bracket Notation:

// console.log(user["name"]);


// ----------------4. Adding / Updating / Deleting
let car = { brand: "Pulsar" };
car.model = "150";   // add
car.brand = "Bajaj"; // update
delete car.model;    // delete

// --------7. Iteration in Objects--------
let user1 = { name: "Manish", age: 22 };

for (let key in user) {
  console.log(key, user[key]);
}

Object.keys(user).forEach(k => console.log(k, user[k]));