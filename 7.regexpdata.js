let date = new Date();


console.log( date.getDate() );


console.log( date.getMonth() );
console.log(date.getFullYear() );


let str = 'ahb acb aeb aeeb adcb axeb';
let result = str.match(/a.b/g);

console.log(result[0]);
console.log(result[1]);
console.log(result[2]);

let str1 = '2+3 223 2223';
let result1 = str1.match(/2\+3/g);

console.log(result1[0]);
