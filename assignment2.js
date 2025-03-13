// values 
let a = 25
let b = 20
let c = 12
let d = "15"
const e = 15

// sum of the declared variable
let sum = (a + b + c + d + e);
console.log("the sum of declared variable is:",sum)

// comparing the values of variable d and constant e
let operator_1 = d > e
let operator_2 = d < e
let operator_3 = d => e
let operator_4 = d <= e
let operator_5 = d === e

console.log("is d > e:" + operator_1 + "\n" + "is d < e:" + operator_2 + "\n" + "is d => e:" + operator_3 + "\n" + "is d <= e:" + operator_4 + "\n" + "is d === e:" + operator_5 );

// subtrating all the values
let subtraction = ( a - b - c - d - e);
// multiplying
let multiply = (a * c) / e;
//displaying exponent value
let exponent = (e**c);
//reasigning the value 
const newE = (c**3);

//displaying the result of the subtraction, multiply, exponent and newE
console.log(subtraction + "\n" + multiply + "\n" + exponent + "\n" + newE)