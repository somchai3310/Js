// 1.ฟังก์ชั่นที่ไม่มีการรับและส่งค่า
function printLog() {
  console.log("Hello World");
}

function message() {
  alert("รับเงิน");
}

function displayName() {
  document.write("สมชาย");
}

// เรียก function
printLog();

// 2.ฟังก์ชั่นที่มีการรับค่าเข้ามาทํางาน
// function with parameter
function plusNumber(x) {
  console.log("ค่าที่ส่งมา ->", x);
}

// call function with argument
plusNumber(5);
plusNumber("ทดสอบ");

function fullName(fname, lname) {
  console.log(`ชื่อ ${fname} นามสกุล ${lname}`);
}

fullName("สมชาย", "ใจดี");
fullName("สมชาย"); //ค่าที่ไม่ส่งไปจะได้ undefine

function sum(x, y) {
  let total = x + y;
  console.log("ผลรวม ", total);
}

// 3.ฟังก์ชั่นที่มีส่งค่าออกมา
function getIP() {
  return "127.0.0.1";
}

function getNumber() {
  return 100 * 100;
}

let myIp = getIP();
console.log("myIP ->", myIp);
console.log("getNumber() -->", getNumber());

// 4.ฟังก์ชั่นที่มีการรับค่าเข้ามาส่งค่าออกไป
function setSalary(money) {
  let bonus = 1000;
  return money + bonus;
}

console.log("ได้เงินเดือน ->", setSalary(15000));

function summation(x, y) {
  return x + y;
}
console.log("summation ", summation(30, 40));

// 5.ฟังก์ชั่นแบบกำหนดค่าเริ่มต้น
function fullNameCity(fname, lname, city = "กรุงเทพ") {
  console.log(`ชื่อ ${fname} นามสกุล ${lname} อยู่ที่ ${city}`);
}
fullNameCity("สมชาย", "ใจดี");
fullNameCity("ชาย", "ใจดี", "เชียงราย");

// ขอบเขตตัวแปร
let a = 100; //global

function test() {
  let b = 50; //local
  console.log("a in function ->", a);
  console.log("b in function ->", b);
}

console.log("a OUT function ->", a);
console.log("b OUT function ->", b);
test();