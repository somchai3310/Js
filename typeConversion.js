// typeConversion
// แปลง string to number

// let num = parseInt("20.15")
let num = "20.15";

console.group('-----Type Conversion----');

console.warn('$$$แปลง string to number');
console.log('default value -->', num);
console.log('default type -->', typeof(num));
console.log('parseInt num -->',parseInt(num));
console.log('parseFloat num -->',parseFloat(num));
console.log('+ num -->',+(num));

// แปลง number to string
let numToString = 200;

console.warn('$$$แปลง number to string');
console.log('default value -->', numToString);
console.log('num +"" -->', numToString+"");
console.log('num .toString() -->', numToString.toString());
console.groupEnd();