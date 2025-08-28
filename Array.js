const numbers = [1, 2, 3, 4, 5];
///console.log(numbers);

const fruits = ["apple", "banana", "mango", "grapes"];
//console.log(fruits);

var mixed = [1, "apple", true, null];
//console.log(mixed);

let arr = new Array(10); //it create array of 10 empty items
//console.log(arr);

const arr1 = Array.of(1, 2, 3, 4, 5);
//console.log(arr1);
console.log(arr1.at(-1));


const arr2 = Array.from("hello");
//console.log(arr2);


const marvelHeros = ["Batman", "Superman", "Wonder Woman"];
const dcHeros = ["Flash", "Aquaman"];


//marvelHeros.push(dcHeros); //it will add dcHeros array as a single element at the end of marvelHeros array
const allHeros = [...marvelHeros, ...dcHeros]; //it will add each element of dcHeros at the end of marvelHeros array

//console.log(allHeros)

const allHeros1 = [marvelHeros, ...dcHeros];
console.log(allHeros1);


let b = [3,1,4,2];

// sort → ascending/lexical order
console.log(b.sort()); // [1,2,3,4]

// reverse → ulta order
console.log(b.reverse()); // [4,3,2,1]
