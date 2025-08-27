// const m = "man";
// const n = "woman";
// const o = m + n;
// console.log(o);

const gameName = new String("johan");//its return a object
//console.log(gameName[1 + 2]);//so we see the character at index 
// console.log(gameName.length);//it return the length of the string
// console.log(gameName.charAt(3));//it return the string

const newString = gameName.substring(1,4);
console.log(newString);//it return the string from index 1 to 3

const aim = 'hellow';
const newAim = aim.replaceAll('l','P');
console.log(newAim);//it replace all l with P

let str1 = "   JavaScript   ";
console.log(str1.trim());  // "JavaScript"


let str2 = "I love coding";
console.log(str2.includes("love"));  // true
console.log(str2.includes("python")); // false


let str3 = "Hello World";
console.log(str3.startsWith("Hello")); // true
console.log(str3.endsWith("World"));   // true
