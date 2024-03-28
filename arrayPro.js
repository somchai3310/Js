let colors = ["red", "blue", "white"];
let num = [10, 200, 0,1000, 5, 11];
console.log("count arr ->", colors.length);

// เลือก first last
console.group('----first last----')
console.log("first = ", colors[0]);
console.log("last = ", colors[colors.length - 1]);
console.groupEnd()

// sort() a-z
console.group('----sort() a-z----')
console.log("default arr ->", colors);
let result = colors.sort();
console.log("sort arr ->", result);
console.groupEnd()

// sort() ตัวเลข
console.group('----sort() ตัวเลข----')
num.sort(function (a, b) {
    return a - b;
});
console.log('sort number ->',num);
console.groupEnd()

// reverse() จากหลังไปหน้า ของตัวเริ่มต้น
console.group('----reverse() จากหลังไปหน้า ของตัวเริ่มต้น----')
console.log("num arr ->", num);
console.log("reverse arr ->", num.reverse());
console.groupEnd()

// เพิ่มสมาชิก
console.group('----push() เพิ่มสมาชิก----')
num.push(9999)
console.log("push arr ->", num);
console.groupEnd()

// array for loop
// colors = ["red", "blue", "white"]
console.group('----เข้าถึงสมาชิกด้วย for loop----')
let count = colors.length; // 3
// i=0 i<3 i++
for( let i = 0  ; i < count ; i++ ){
    console.log('ลำดับที่ ',i+1,'มีค่า',colors[i]);
    console.log('check i',i);
}
// console.log(colors[0]);
// console.log(colors[1]);
// console.log(colors[2]);
console.groupEnd()

// เข้าถึงสมาชิกด้วย forEach
console.group('----เข้าถึงสมาชิกด้วย forEach----')
colors.forEach(myData);
function myData(item) {
    console.log('color',item);
}
console.groupEnd()

// แปลงให้ array เป็น string
console.group('----แปลงให้ array เป็น string----')
let x = colors.toString()
let y = colors.join("|")
console.log('array toString() ->',x);
console.log('array toString() check type ->',typeof(x));
console.log('array join("*") ->',y);
console.log('array join("*") check type ->',typeof(y));
console.groupEnd()

// เอาตัวท้ายสุดออก
console.group('----เอาตัวท้ายสุดออก----')
console.log(colors);
colors.pop();

console.log('after pop', colors);
console.groupEnd();

// รวม array
let cars = ['benz','bmw','mg']
let fruits = ['orage','banana']

let mix1 = cars.concat(fruits)
let mix2 = [...cars, ...fruits] //spread
let mix3 = cars.push(...fruits) // push แต่ cars เดิมจะมี fruits มาด้วย
for( let i = 0  ; i < cars.length ; i++ ){
    fruits.push(cars[i])
    console.log('push cars in fruits ', i);
}

console.log('array .concat() ->',mix1);
console.log('array [...a, ...b] -->',mix2);
console.log('array a.push(...b) -->',cars);
//  ข้อห้ามในการใช้ spread [...a, ...b]
const isArray = [1, 2, 3];
const notArray = 'random';
// [...isArray, ...notArray] 😱 [ 1, 2, 3, 'r', 'a', 'n', 'd', 'o', 'm' ]
// isArray.concat(notArray) ✅  [ 1, 2, 3, 'random' ]
