if(true){
    let x=10;
    const y=20;
    var z=30;
}

console.log(x); // undefined
console.log(y); // undefined
console.log(z); // number

for(var i=0;i<5;i++){
    console.log(i); // 0,1,2,3,4
}

// Block Scope
if(true){
    let a=10;
    const b=20;
    var c=30;
}

console.log(a); // undefined
console.log(b); // undefined
console.log(c); // number
