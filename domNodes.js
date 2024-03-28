const textAll = document.querySelectorAll("p");

let msg = textAll[0].innerHTML;
console.log(msg);

let count = 1;

const menu = document.getElementById("menu");

function addItem() {
  const item = document.createElement("li"); //สร้าง li
  item.innerText = "Item "+(count++); //เพิ่ม item ใน li
  menu.appendChild(item); // เพิ่มลูก li ในแม่ ul
}

// ลบ Node
const test = document.getElementById('test')
const item = document.getElementById('item-3')

// test.removeChild(item)

function removeItem() {
    test.removeChild(item)
}

// replace
const itemB = document.getElementById('item-2')
const newItem = document.createElement('li')
newItem.innerText = 'X'

function replaceItem() {
    test.replaceChild(newItem,itemB)
}

