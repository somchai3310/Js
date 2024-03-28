const a = document.getElementsByTagName("p");
console.log("a", a);
// check tag p มีตรงไหนบ้าง

const b = document.getElementById("demo");
console.log("b", b);
// ต้องเขียน <script src="dom.js"></script> ใน body ถึงจะหาเจอ

const c = document.querySelector('.myJs');
const d = document.querySelector('#demo');
const e = document.querySelectorAll('p');

console.log('e ',e);
console.log('c ',c);

function displayText(Text) {
  if (Text) {
    b.innerText = "<strong>ทดสอบการเปลี่ยน Text</strong>";
  } else {
    b.innerHTML = "<strong>ทดสอบการเปลี่ยน Text</strong>";
  }
}
