console.log('5+10 ->',5+10);
console.log('5-10 ->',5-10);
console.log('5*10 ->',5*10);
console.log('5/10 ->',5/10);

console.log('5%10 ->',5%10);
console.log('10%5 ->',10%5);

console.log('3%10 ->',3%10);
console.log('10%3 ->',10%3);

// ยกกำลัง
console.log('ยกกำลัง', 5**2);

// เปรียบเทียบ
console.group('----เปรียบเทียบ----')
let a = 5 , b = 20;
let check = true;

console.log('a , b', a , b)
console.log('check', check)
console.log('a == b', a == b);
console.log('a != b', a != b);
console.log('a > b', a > b);
console.log('a < b', a < b);
console.log('a >= b', a >= b);
console.log('a <= b', a <= b);
console.log('!check', !check);
console.groupEnd();

// perfix postfix
let x = 5, y = 10;

console.group('เพิ่มค่า ลดค่า')
// ++
console.group('++ perfix')
console.log('x ', x);
console.log('++x ', ++x);
console.log('x ', x);
console.groupEnd();

console.group('postfix ++')
x= 5;
console.log('x ', x);
console.log('x++ ', ++x);
console.log('x ', x);
console.groupEnd();

// --
console.group('-- perfix')
console.log('y ', y);
console.log('--y ', --y);
console.log('y ', y);
console.groupEnd();

console.group('postfix --')
y= 10;
console.log('y ', y);
console.log('y-- ', --y);
console.log('y ', y);
console.groupEnd();