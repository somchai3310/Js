JavaScript

https://www.youtube.com/watch?v=AbjY-ajKgSI&list=PLltVQYLz1BMDsB7SrMh8x6uDTfl7LdNlP
เป็นภาษาที่ทำงานฝั่ง Client Side Script

ความสามารถของ JavaScript
- สามารถเปลี่ยนแปลงรูปแบบการแสดงผลของ HTML,CSS ได้
- ตรวจสอบความถูกต้องของข้อมูลได้
- ตรวจสอบ Browser ของผู้ใช้ได้
- เก็บข้อมูลผู้ใช้ได้ เช่น การใช้ Cookie, Local Storage เป็นต้น

รูปแบบการเขียน JavaScript
1. แบบ Internal คือ กำหนด JavaScript ไว้ในส่วนของ <head></head> หรือ
<body></body>

<script type="text/javascript">
Statement.......
</script>

2. แบบ External คือ กำหนด JavaScript ไว้เป็นไฟล์ด้านนอกที่มีนามสกุล .js
จากนั้นก็นำเข้ามาทำงานในหน้าเว็บ หรือ HTML ไฟล์

<script src=“ชื่อไฟล์.js"></script>

การแสดงข้อมูล
- document.write(“ข้อความที่ต้องการแสดง”) แสดงเป็นข้อความ
ตัวเลข ตัวแปร หรือแท็ก HTML ก็ได้ในหน้าเว็บ
- alert(“ข้อความแจ้งเตือน”) สำหรับแจ้งเตือนผู้ใช้ในหน้าเว็บ
- Console.log(“ข้อความ หรือ ตัวแปร”) สำหรับ debug ค่าต่างๆ แต่จะ
ไม่แสดงผลในหน้าเว็บ

การเขียนคําอธิบาย (Comment)
วิธีที่ 1 โดยใช้เครื่องหมาย Slash ( / ) ใช้ในการอธิบายคำสั่งสั้นๆในรูป
แบบบรรทัดเดียว
วิธี2 ที่ 2 เขียนคำอธิบายไว้ในเครื่องหมาย /* ... */ ใช้ในการอธิบายคำสั่ง
ยาวๆหรือแบบหลายบรรทัด

ตัวแปรและชนิดข้อมูล
ตัวแปร คือ ชื่อที่ถูกนิยามขึ้นมาเพื่อใช้เก็บค่าข้อมูลสำหรับ
นำไปใช้งานในโปรแกรม โดยข้อมูลอาจจะประกอบด้วย
ข้อความ ตัวเลข ตัวอักษรหรือผลลัพธ์จากการประมวลผล
ข้อมูล

รูปแบบการตั้งชื่อ
1. ขึ้นต้นด้วยตัวอักษรในภาษาอังกฤษตามด้วยตัวอักษรหรือตัวเลข
2. ห้ามขึ้นต้นด้วยตัวเลขหรือสัญลักษณ์พิเศษ
3. ขึ้นต้นด้วย $ (dollar sign) และ _ (underscore) ได้
4. มีลักษณะเป็น case sensitive คือ ตัวพิมพ์เล็กพิมพ์ใหญ่จะมี
ความหมายที่แตกต่างกัน
5. ไม่ซ้ำกับคำสงวน (Keyword)

ตัวแปรใน JavaScript เป็นรูปแบบ Dynamic Typing
ตัวแปรแบบ Dynamic Typing คือชนิดตัวแปรจะเป็นอะไรก็ได้ตามค่าที่ตัว
มันเก็บโดยไม่ต้องประกาศชนิดข้อมูล
• ตัวแปรแบบ Static Typing ต้องประกาศชนิดข้อมูลในตอนเริ่มต้น เช่น int,
double, char เพื่อบอกว่าตัวแปรนี้จะเก็บข้อมูลชนิดไหน

***ตัวแปรที่ประกาศไว้แต่ยังไม่ได้กำหนดค่า จะมีค่าเป็น undefined โดยอัตโนมัติ

ตั้งแต่ 2015 เปลี่ยนจาก var ไปใช้ let
const (ค่าคงที่)
const ชื่อตัวแปร = ค่าของตัวแปร;

Data type
boolean -> true/false
number -> 20 / 30.15
string -> 'text'
object -> {firstName: "somchai", lastName:"khao"}
array -> ["มะม่วง","มะละกอ","ส้ม"]

หัวข้อที่เกี่ยวข้องกับตัวแปร
 typeof คือ เช็คชนิดข้อมูล
 null คือ ไม่มีการกำหนดค่าถูกกำหนดค่าโดยผู้เขียน
 undefined ไม่มีการกำหนดค่า (เป็นค่าเริ่มต้นของโปรแกรม)

จัดการตัวเลข (Number)
 let x,y;
 x = 20; // integer
 y = 20.15; // float

จัดการอักขระและข้อความด้วย string
 การประกาศ string ขึ้นมาใช้ ต้องกําหนดเนื้อหาหรือค่าอยู่ในเครื่องหมาย
 '(single quote) หรือ " (double quote)

การแปลงชนิดข้อมูล (Type Conversion)
แปลงจาก String เป็น Number
x = parseInt(’1.2);
x = parseFloat('1.2′);
ใช้เครื่องหมาย (+...) เพิ่มไปข้างหน้า
แปลงจาก Number เป็น String
ใช้เครื่องหมาย + ตัวแปร หรือ ค่าที่เป็นตัวเลข
• ใช้ toString() เช่น x.toString()

อาร์เรย์ (Array) คืออะไร
ความหมายที่ 1 ชุดของตัวแปรที่อยู่ในรูปลำดับใช้เก็บค่าข้อมูล
ให้อยู่ในกลุ่มเดียวกัน ข้อมูลภายในอาร์เรย์จะถูกเก็บบนหน่วย
ความจำในตำแหน่งที่ต่อเนื่องกัน โดยขนาดของอาร์เรย์จะเล็กหรือ
ใหญ่ขึ้นกับจำนวนมิติที่กำหนดขึ้น

ความหมายที่ 2 เป็นตัวแปรที่ใช้ในการเก็บข้อมูลที่มีลำดับที่ต่อ
เนื่อง ซึ่งข้อมูลมีค่าได้หลายค่าโดยใช้ชื่ออ้างอิงได้เพียงชื่อเดียว
และใช้หมายเลขกํากับ (index) ให้กับตัวแปรเพื่อจําแนกความแตก
ต่างของค่าตัวแปรแต่ละตัว

การสร้าง Array
วิธีที่ 1 สร้างโดยใช้คำสั่ง Array()
let ชื่ออาร์เรย์ = new Array();
let ชื่ออาร์เรย์= Array(สมาชิกตัวที่1, สมาชิกตัวที่2, ... );
เช่น
let myArray = new Array();
myArray[0] = 2000;
let days = Array(“จันทร์”, “อังคาร”, “พุธ”);
วิธีที่ 2 []

ตัวดำเนินการ operator
A+B
1. ตัวดำเนินการ operator -> +
2. ตัวถูกดำเนินการ operand -> A B
+ - * / %

เปรียบเทียบ
ได้ข้อมูลเป็น boolean
==  -> เท่ากับ
!=  -> ไม่เท่ากับ  
>  -> มากกว่า
<  -> น้อยกว่า
>=  -> มากกว่าหรือเท่ากับ
<=  -> น้อยกว่าหรือเท่ากับ

ตรรกศาสตร์
&&  -> AND  -> true  -> A && B เป็นจริงทั้งคู่
||  -> OR   -> false -> A || B เป็นเท็จทั้งคู่
!   -> NOT  -> ทำให้ตรงข้าม

เพิ่มค่า ลดค่า  
++a perfix  เพิ่มค่าให้ก่อน
a++ postfix นำไปใช้ก่อนแล้ว เพิ่มค่า
--b perfix  ลดค่าก่อน แล้วใช้
b-- postfix นำไปใช้ก่อนแล้ว ลดค่า

compound assignment
+= -> x+=y -> x=x+y
-= -> x-=y -> x=x-y

ลำดับความสำคัญของตัวดำเนินการ
1 ()
2 ++ , --
3 *, / , %
4 +, -
5 <, <= , > , >=
6 ==, !=
7 &&
8 ||
9 =, += , -= , *= , /= , %=

case study
1. 5+8*9
2. 10-4+2
3. 10-(2+1)
4. 5*2-40/5
5. 7+8/2+25

condition
if
Switch..case

ข้อควรระวังใช้ if หลายอัน ให้ใช้ if..else if..else if..else

if..else แบบลดรูป ternary operator
เหนื่อย ? พัก : ลุยต่อ ;

if ซ้อน if

Switch..case
ต้อง break ทุกครั้งที่เข้า case ไม่งั้นไหล

Loop
while
for
do..while

break จะหยุดทำงาน
continue ข้ามส่วนนั้นแล้วให้เริ่มใหม่

for(ค่าเริ่มต้น; เงื่อนไข ; เปลี่ยนแปลงค่า){
    คำสั่ง
}

do..while ทำก่อนหนึ่งรอบ แล้วเช็คเงื่อนไข เงื่อนไขเป็นจริงทำซ้ำ

ข้อแตกต่างและการใช้งาน Loop.
For ใช้ในกรณีรู้จำนวนรอบที่ชัดเจน
While ใช้ในกรณีที่ไม่รู้จำนวนรอบ
Do..while ใช้ในกรณีที่อยากให้ลองทําก่อน 1 รอบ
แล้วทำซ้ำไปเรื่อยๆทราบเท่าที่เงื่อนไขเป็นจริง

ค่า null undefined NaN
null -> ประกาศตัวแปรและกำหนดค่าไว้ let x = null;
undefined -> ประกาศตัวแปรและไม่ได้ให้ค่า let x;
NaN -> Not a Number let a = 0, b="x" ; alert(a-b)

function
ชุดคำสั่ง
รูปแบบของฟังก์ชั่น
1.ฟังก์ชั่นที่ไม่มีการรับและส่งค่า
function ชื่อฟังก์ชั่น(){
// คําสั่งต่างๆ
}
การเรียกใช้งานฟังก์ชั่น
ชื่อฟังก์ชั่น ();

2.ฟังก์ชั่นที่มีการรับค่าเข้ามาทํางาน
function ชื่อฟังก์ชั่น(parameterl,parameter2,....){
// กลุ่มคําสั่งต่างๆ
}

อาร์กิวเมนต์ คือ ตัวแปรหรือค่าที่ต้องการส่งมาให้กับฟังก์ชัน (ตัวแปรส่ง)
พารามิเตอร์ คือ ตัวแปรที่ฟังก์ชันสร้างไว้สำหรับรับค่าที่จะส่งเข้ามาให้กับฟังก์ชัน (ตัวแปรรับ)

การเรียกใช้งานฟังก์ชั่น
ชื่อฟังก์ชั่น (argument argument2.......);

3.ฟังก์ชั่นที่มีส่งค่าออกมา
function ชื่อฟังก์ชั่น(){
    return ค่าที่จะส่งออกไป
}

4.ฟังก์ชั่นที่มีการรับค่าเข้ามาส่งค่าออกไป
function ชื่อฟังก์ชั่น(parameterl,parameter2,...) {
    retrun ค่าที่จะส่งออกไป
}

5.ฟังก์ชั่นแบบกำหนดค่าเริ่มต้น
function ชื่อฟังก์ชั่น(name='somchai',parameter2,...) {
    // กลุ่มคําสั่งต่างๆ
}

ขอบเขตตัวแปร
local variable ในfunction
global variable ใช้นอกfunction ได้ในไฟล์

Array Properties & Function
หาจำนวนสมาชิกและเรียงลำดับ
let color = ['red','blue','white']
let x = color.length;
let y = color.sort(); // sort() Function หรือ method

สมาชิกตัวแรกและตัวสุดท้าย
let first = color[0]
let last = color[color.length-1]

สมาชิกต่อท้าย
color.push('yellow')

เข้าถึงสมาชิกด้วย for loop
let colors = ['red','blue','white']
let count = colors.length;
for( let i = 0 ;i<count: i++ ){
    console.log('ลำดับที่ ',i+1,'มีค่า',colors[i]);
}

เข้าถึงสมาชิกด้วย forEach
let colors = ['red','blue','white']
colors.forEach(myData);

function myData(item){
    console.log(item)
}

แปลง array เป็น string
.toSting()  //แปลงเป็น string
.join("*");  // แปลงเป็น string แล้วเชื่อมด้วย * 
color.pop()  //เอาตัวสุดท้ายออก
let x = color.pop()  //เอาตัวสุดท้ายออก แล้วเก็บค่าใน x

รวม array
let colors = ['red','blue','white']
let cars = ['benz','bmw','mg']
let fruits = ['orage','banana']

//concat
let carts = colors.concat(cars,fruits)
let carts = [].concat(cars,fruits)
//spread
let carts = [...cars, ...fruits]
//.push(spread)
let carts = cars.push(...fruits)

การเรียงลำดับใน array
let fruits = ['orage','banana']
fruits.sort();
fruits.reverse();

เรียง array ตัวเลข
let num = [10, 200, 0,1000, 5, 11];
num.sort(function (a, b) {
    return a - b; // น้อยไปมาก
    return b - a; // มากไปน้อย
});

JS Object
let ชื่อวัตถุ = {propertyName:value}
eg. 
let user = {
    name:'somchai', age:'27', email:'somchai@gmail.com'
}

การเข้าถึงข้อมูล
objectName.propertyName
objectName['propertyName']
eg.
user.name
user['name']

js object method
let user = {
    name: 'somchai',
    lname: 'hahaha'
    getUser: function(){
        return this.name + ' '+ this.lname
    }
}

การยืนยันด้วย confirm()
eg.
confirm("ข้อความ")

HTML DOM (Document Object Model)
เมื่อหน้าเว็บโหลดเสร็จเรียบร้อย web Browser มันจะสร้าง DOM ของหน้านั้นขึ้นมา โดยมอง HTML เป็นโครงสร้างต้นไม้ (ก้อน Object) หรือเรียกว่า DOM

คุณสมบัติของ HTML DOM
เข้าถึงและเปลี่ยนคุณสมบัติทั้งหมดของ Element ในหน้าเว็บได้
ควบคุมและเปลี่ยนรูปแบบ CSS ได้
สามารถตอบสนองกับทุกเหตุการณ์ที่เกิดขึ้นหน้าเว็บได้
เข้าถึง Element ผ่าน Id, Tag, Class
document.getElementById ("ชื่อไอดี");
document.getElementsByTagName("ชื่อแท็ก");
document.getElementsByClassName ("ชื่อคลาส");

DOM Document
เปลี่ยนเนื้อหา HTML : element.innerHTML
เปลี่ยนเนื้อหา Text : element.innerText
เปลี่ยน style Element: element.style.properties = value
ดำเนินการผ่าน Method
element.setAttribute(attribute, value)

DOM Nodes
document.createElement(element) // สร้าง element ใหม่
document.removeChild(element) // ลบ node ลูก
document.appendChild(element) // นำ element ไปต่อใน node แม่
document.replaceChild(new,old) // แทนที่ element

DOM CSS add & remove class
element.classList.add('class')  // เพิ่ม class style
element.classList.remove('class') // ลบ class style
element.classList.toggle('class') // สลับ class style
element.classList.contains('class') // เปรียบเทียบ class style


DOM Event
ตลิกเม้า วางเม้า กดปุ่มคีย์บอร
คลิกแล้วแจ้งเตือน

EventListener
เหตุการณ์หรือการกระทำที่เกิดขึ้นกับอิลิเมนต์แต่รูปแบบการเขียน จะเขียนใน js ทั้งหมด
โครงสร้าง
element.addEventListener(event,callback)